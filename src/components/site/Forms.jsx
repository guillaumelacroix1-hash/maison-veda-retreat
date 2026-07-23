import { useState } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { useI18n } from '../../i18n'

/**
 * Briques de formulaire partagées par les formulaires du site
 * (devis location, devis VEDA Travel, contact, newsletter).
 *
 * Les envois passent par la fonction serverless api/form.js, qui relaie par
 * email via Resend. Elle a besoin de RESEND_API_KEY et FORM_TO dans
 * l'environnement Vercel : sans elles, l'endpoint répond 500 et le formulaire
 * affiche une erreur plutôt qu'un faux succès.
 *
 * Le paiement de l'acompte (Stripe) reste à part, il n'est pas encore en place.
 */
const ENDPOINT = '/api/form'

const baseField =
    'w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-light text-veda-light ' +
    'placeholder:text-veda-light/30 transition-colors duration-300 ' +
    'focus:border-veda-gold/60 focus:outline-none focus:ring-1 focus:ring-veda-gold/40'

export function Field({ label, name, type = 'text', required = false, placeholder, className = '' }) {
    return (
        <label className={`block ${className}`}>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-veda-light/60">
                {label}
                {required && <span className="ml-1 text-veda-gold">*</span>}
            </span>
            <input type={type} name={name} required={required} placeholder={placeholder} className={baseField} />
        </label>
    )
}

export function TextareaField({ label, name, required = false, rows = 5, placeholder, className = '' }) {
    return (
        <label className={`block ${className}`}>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-veda-light/60">
                {label}
                {required && <span className="ml-1 text-veda-gold">*</span>}
            </span>
            <textarea name={name} rows={rows} required={required} placeholder={placeholder} className={baseField} />
        </label>
    )
}

/** Envoie les champs du formulaire à la fonction serverless. */
async function submitForm(formType, form) {
    const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType, ...Object.fromEntries(new FormData(form)) }),
    })
    if (!response.ok) throw new Error(`Envoi refusé (${response.status})`)
}

/**
 * Enveloppe de formulaire : gère la soumission et l'état visuel.
 * `formType` doit correspondre à une entrée de FORM_TYPES dans api/form.js.
 */
export function Form({ formType, submitLabel, children, className = '' }) {
    const { t, lang } = useI18n()
    const [state, setState] = useState('idle')

    const handleSubmit = async (event) => {
        event.preventDefault()
        setState('sending')
        try {
            await submitForm(formType, event.target)
            event.target.reset()
            setState('sent')
        } catch {
            setState('error')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            {children}

            <div className="mt-8 flex flex-wrap items-center gap-5">
                <button
                    type="submit"
                    disabled={state === 'sending'}
                    className="rounded-full bg-veda-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white disabled:opacity-50"
                >
                    {submitLabel ?? t('contact.fields.send')}
                </button>
                <span className="text-xs font-light text-veda-light/50">{t('common.responseTime')}</span>
            </div>

            {state === 'sent' && (
                <p className="mt-4 flex items-center gap-2 text-sm font-light text-veda-gold">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    {lang === 'en'
                        ? 'Message sent. We reply within 48 hours.'
                        : 'Message envoyé. Nous vous répondons sous 48 h.'}
                </p>
            )}
            {state === 'error' && (
                <p className="mt-4 flex items-start gap-2 text-sm font-light text-red-300">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {lang === 'en'
                        ? 'Sending failed. Please write to us directly by email or on WhatsApp.'
                        : "L'envoi a échoué. Écrivez-nous directement par email ou sur WhatsApp."}
                </p>
            )}
        </form>
    )
}

/** Capture d'email de la newsletter (section 10 du cahier des charges). */
export function NewsletterForm() {
    const { t, lang } = useI18n()
    const [state, setState] = useState('idle')

    const handleSubmit = async (event) => {
        event.preventDefault()
        setState('sending')
        try {
            await submitForm('newsletter', event.target)
            event.target.reset()
            setState('sent')
        } catch {
            setState('error')
        }
    }

    return (
        <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">
                    {t('home.newsletterPlaceholder')}
                </label>
                <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    required
                    placeholder={t('home.newsletterPlaceholder')}
                    className={`${baseField} flex-1`}
                />
                <button
                    type="submit"
                    disabled={state === 'sending'}
                    className="shrink-0 rounded-full bg-veda-gold px-7 py-3 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white disabled:opacity-50"
                >
                    {t('home.newsletterCta')}
                </button>
            </form>

            {state === 'sent' && (
                <p className="mt-3 text-sm font-light text-veda-gold">
                    {lang === 'en' ? 'Thank you, you are on the list.' : 'Merci, vous êtes inscrit·e.'}
                </p>
            )}
            {state === 'error' && (
                <p className="mt-3 text-sm font-light text-red-300">
                    {lang === 'en' ? 'Sign-up failed. Please try again.' : "L'inscription a échoué. Réessayez."}
                </p>
            )}
        </div>
    )
}
