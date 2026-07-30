/**
 * Réception des formulaires du site, envoyés par email via Resend.
 *
 * Un seul endpoint pour les quatre formulaires (contact, devis location du
 * lieu, devis VEDA Travel, newsletter) : ils ne diffèrent que par leurs champs
 * et par l'objet du message.
 *
 * Variables d'environnement à définir sur Vercel :
 *   RESEND_API_KEY  clé Resend (jamais dans le dépôt)
 *   FORM_TO         destinataire des demandes
 *   FORM_FROM       expéditeur, par défaut l'adresse de test Resend
 *
 * ATTENTION à l'expéditeur : tant que FORM_FROM vaut onboarding@resend.dev,
 * Resend n'autorise l'envoi que vers l'adresse du titulaire du compte. Pour
 * écrire à Aurélie, il faut vérifier lamaisonveda.com dans Resend et passer
 * FORM_FROM sur une adresse de ce domaine.
 */

const FORM_TYPES = {
    contact: {
        subject: 'Nouveau message depuis le site',
        fields: ['name', 'email', 'subject', 'message'],
        required: ['name', 'email', 'message'],
    },
    'quote-venue': {
        subject: 'Demande de devis, location du lieu',
        fields: ['firstName', 'lastName', 'email', 'phone', 'guests', 'dates', 'practice', 'food', 'message'],
        required: ['firstName', 'lastName', 'email', 'guests', 'dates'],
    },
    'quote-travel': {
        subject: 'Demande de devis, VEDA Travel',
        fields: ['name', 'email', 'dates', 'groupSize', 'message'],
        required: ['name', 'email', 'groupSize'],
    },
    newsletter: {
        subject: 'Nouvelle inscription à la newsletter',
        fields: ['email'],
        required: ['email'],
    },
}

const LABELS = {
    name: 'Nom',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    subject: 'Sujet',
    message: 'Message',
    dates: 'Dates souhaitées',
    groupSize: 'Nombre de participants',
    guests: 'Personnes, chambres, lits',
    practice: 'Pratique du yoga',
    food: 'Préférences alimentaires',
    services: 'Services souhaités',
}

const isEmail = (value) => typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

/** Neutralise le HTML : les valeurs saisies finissent dans un email. */
const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST')
        return response.status(405).json({ error: 'Méthode non autorisée' })
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.FORM_TO
    const from = process.env.FORM_FROM || 'La Maison VEDA <onboarding@resend.dev>'

    if (!apiKey || !to) {
        console.error('RESEND_API_KEY ou FORM_TO manquant dans l\'environnement')
        return response.status(500).json({ error: 'Formulaire non configuré' })
    }

    const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body || {}
    const { formType, ...data } = body

    const config = FORM_TYPES[formType]
    if (!config) {
        return response.status(400).json({ error: 'Type de formulaire inconnu' })
    }

    const missing = config.required.filter((field) => !String(data[field] ?? '').trim())
    if (missing.length > 0) {
        return response.status(400).json({ error: 'Champs manquants', fields: missing })
    }

    if (!isEmail(data.email)) {
        return response.status(400).json({ error: 'Adresse email invalide' })
    }

    const rows = config.fields
        .filter((field) => String(data[field] ?? '').trim())
        .map(
            (field) =>
                `<tr><td style="padding:6px 14px 6px 0;vertical-align:top;color:#666">${
                    LABELS[field] ?? field
                }</td><td style="padding:6px 0;white-space:pre-line">${escapeHtml(data[field])}</td></tr>`,
        )
        .join('')

    try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from,
                to: [to],
                reply_to: data.email,
                subject: config.subject,
                html: `<h2 style="font-family:Georgia,serif">${config.subject}</h2><table style="font-family:system-ui,sans-serif;font-size:14px">${rows}</table>`,
            }),
        })

        if (!resendResponse.ok) {
            const detail = await resendResponse.text()
            console.error('Resend a refusé l\'envoi:', resendResponse.status, detail)
            return response.status(502).json({ error: 'L\'envoi a échoué' })
        }

        return response.status(200).json({ ok: true })
    } catch (error) {
        console.error('Envoi impossible:', error)
        return response.status(500).json({ error: 'L\'envoi a échoué' })
    }
}
