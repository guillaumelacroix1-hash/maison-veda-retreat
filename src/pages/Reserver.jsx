import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import ContentGap from '../components/site/ContentGap'
import NotFound from './NotFound'
import { getRetreat } from '../data/retreats'
import { DEPOSIT_RATE } from '../data/site'

/**
 * Demande d'inscription à une retraite.
 *
 * État actuel : la demande part chez Formspree, comme sur la page 2027 en
 * ligne. Le cahier des charges (section 6) prévoit à la place un paiement
 * immédiat par carte, avec fermeture automatique quand il ne reste plus de
 * place. Rien n'est branché : l'écart est signalé à l'écran par
 * <ContentGap id="payment">.
 *
 * À ne pas confondre avec la réservation des villas (page Lieu &
 * Hébergements), que Manu équipe d'un paiement en direct et d'un channel
 * manager Bed24. Reste à décider si les retraites y passeront aussi.
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdkboow'

export default function Reserver() {
    const { slug } = useParams()
    const { t, lang, path } = useI18n()

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        housingType: 'Single',
        minivanTour: false,
        message: '',
    })

    const retreat = getRetreat(slug)
    if (!retreat) return <NotFound />

    const copy = retreat[lang] ?? retreat.fr
    const deposit = retreat.pricing?.from
        ? Math.round(retreat.pricing.from * DEPOSIT_RATE)
        : null

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, retreat: `${copy.title} (${copy.dates})` }),
            })

            if (response.ok) {
                setIsSubmitted(true)
            } else {
                setError(t('booking.errorSend'))
            }
        } catch {
            setError(t('booking.errorNetwork'))
        } finally {
            setIsSubmitting(false)
        }
    }

    const fieldClass =
        'w-full rounded-xl border border-white/10 bg-veda-dark/50 px-4 py-3 font-light text-veda-light ' +
        'placeholder-white/30 transition-all focus:border-veda-gold/50 focus:outline-none focus:ring-1 focus:ring-veda-gold/50'
    const labelClass = 'block text-xs font-semibold uppercase tracking-widest text-veda-light/80'

    return (
        <>
            <PageMeta title={`${t('common.book')}, ${copy.title}`} />

            <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-32">
                <div className="pointer-events-none absolute left-10 top-1/4 h-64 w-64 rounded-full bg-veda-gold/5 blur-[100px]" />
                <div className="pointer-events-none absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-veda-light/5 blur-[120px]" />

                <div className="relative z-10 w-full max-w-2xl rounded-pill border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:p-12">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="mb-10 text-center">
                                    <h1 className="mb-4 font-heading text-4xl md:text-5xl">
                                        {t('booking.title')} <span className="italic text-veda-gold">{t('booking.titleAccent')}</span>
                                    </h1>
                                    <p className="text-sm font-light text-veda-light/70 md:text-base">
                                        {copy.title}, {copy.dates}.
                                    </p>
                                    {deposit && (
                                        <p className="mt-3 text-sm font-light text-veda-gold">
                                            {t('booking.depositLine', { amount: deposit })}
                                        </p>
                                    )}
                                </div>

                                <ContentGap id="payment" className="mb-10" />

                                {error && (
                                    <div className="mb-6 rounded-xl border border-red-500/50 bg-red-500/10 p-4 text-center text-sm text-red-200">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className={labelClass}>{t('booking.firstName')} *</label>
                                            <input
                                                type="text" id="firstName" name="firstName" required
                                                value={formData.firstName} onChange={handleChange}
                                                className={fieldClass} placeholder=""
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className={labelClass}>{t('booking.lastName')} *</label>
                                            <input
                                                type="text" id="lastName" name="lastName" required
                                                value={formData.lastName} onChange={handleChange}
                                                className={fieldClass} placeholder=""
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className={labelClass}>{t('contact.fields.email')} *</label>
                                            <input
                                                type="email" id="email" name="email" required
                                                value={formData.email} onChange={handleChange}
                                                className={fieldClass} placeholder="votre@email.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className={labelClass}>{t('contact.fields.phone')}</label>
                                            <input
                                                type="tel" id="phone" name="phone"
                                                value={formData.phone} onChange={handleChange}
                                                className={fieldClass} placeholder=""
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="housingType" className={labelClass}>{t('booking.housing')} *</label>
                                        <select
                                            id="housingType" name="housingType" required
                                            value={formData.housingType} onChange={handleChange}
                                            className={`${fieldClass} appearance-none`}
                                        >
                                            <option value="Single" className="bg-veda-dark">{t('booking.housingSingle')}</option>
                                            <option value="Partagé" className="bg-veda-dark">{t('booking.housingShared')}</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <input
                                            type="checkbox" id="minivanTour" name="minivanTour"
                                            checked={formData.minivanTour} onChange={handleChange}
                                            className="h-5 w-5 cursor-pointer rounded border-white/10 bg-veda-dark/50 accent-veda-gold"
                                        />
                                        <label htmlFor="minivanTour" className="cursor-pointer select-none text-sm font-light text-veda-light/90">
                                            {t('booking.travelOption')}
                                        </label>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className={labelClass}>{t('contact.fields.message')} *</label>
                                        <textarea
                                            id="message" name="message" required rows="4"
                                            value={formData.message} onChange={handleChange}
                                            className={`${fieldClass} resize-none`}
                                            placeholder={t('booking.messagePlaceholder')}
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-veda-gold py-4 font-bold uppercase tracking-widest text-veda-dark shadow-md transition-colors duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-veda-dark border-r-transparent" />
                                                    {t('booking.submitting')}
                                                </>
                                            ) : (
                                                t('booking.submit')
                                            )}
                                        </button>
                                        <p className="mt-4 text-center text-xs font-light text-veda-light/50">
                                            {t('booking.noPayment')}
                                        </p>
                                    </div>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-col items-center py-10 text-center"
                            >
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-veda-gold/10 text-veda-gold">
                                    <CheckCircle2 className="h-10 w-10" />
                                </div>
                                <h2 className="mb-4 font-heading text-3xl md:text-4xl">
                                    {t('booking.thanks', { name: formData.firstName })}
                                </h2>
                                <p className="mx-auto mb-10 max-w-md font-light text-veda-light/70">
                                    {t('booking.confirmation')}
                                </p>
                                <Link
                                    to={path('home')}
                                    className="inline-block rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-medium transition-colors hover:bg-white/20"
                                >
                                    {t('nav.home')}
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </>
    )
}
