import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { useI18n } from '../../i18n'

/**
 * Briques de formulaire partagées par les quatre formulaires du site
 * (inscription retraite, devis location, devis VEDA Travel, contact).
 *
 * Les envois ne sont pas encore branchés : les fonctions serverless Vercel
 * (Resend pour l'email, Stripe pour l'acompte) arrivent à l'étape suivante.
 * En attendant, la soumission n'invente pas un succès, elle le dit.
 */
export const FORMS_WIRED = false

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

/** Bandeau discret rappelant que l'envoi n'est pas encore actif. */
export function FormNotice() {
    if (FORMS_WIRED) return null
    return (
        <p className="mt-5 flex items-start gap-2.5 text-xs font-light leading-relaxed text-veda-light/40">
            <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-veda-gold/60" />
            Envoi non branché. Les fonctions serverless (Resend pour l'email, Stripe pour l'acompte)
            sont à mettre en place sur Vercel.
        </p>
    )
}

/**
 * Enveloppe de formulaire : gère la soumission et l'état visuel.
 * `endpoint` sera l'URL de la fonction Vercel une fois FORMS_WIRED passé à true.
 */
export function Form({ endpoint, submitLabel, children, className = '' }) {
    const { t } = useI18n()
    const [state, setState] = useState('idle')

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!FORMS_WIRED) {
            setState('unwired')
            return
        }

        setState('sending')
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
            })
            setState(response.ok ? 'sent' : 'error')
            if (response.ok) event.target.reset()
        } catch {
            setState('error')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={className} noValidate={false}>
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
                <p className="mt-4 text-sm font-light text-veda-gold">{t('common.responseTime')}</p>
            )}
            {state === 'error' && (
                <p className="mt-4 text-sm font-light text-red-300">
                    L'envoi a échoué. Écrivez-nous directement par email ou sur WhatsApp.
                </p>
            )}
            {state === 'unwired' && <FormNotice />}
        </form>
    )
}

/** Capture d'email de la newsletter (section 10 du cahier des charges). */
export function NewsletterForm() {
    const { t } = useI18n()
    const [state, setState] = useState('idle')

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                setState('unwired')
            }}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
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
                className="shrink-0 rounded-full bg-veda-gold px-7 py-3 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
            >
                {t('home.newsletterCta')}
            </button>
            {state === 'unwired' && (
                <p className="sr-only">Envoi non branché</p>
            )}
        </form>
    )
}
