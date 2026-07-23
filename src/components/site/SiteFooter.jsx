import { Link } from 'react-router-dom'
import { Instagram, Facebook, MapPin, Mail, Phone, MessageCircle } from 'lucide-react'
import { useI18n } from '../../i18n'
import { NAV_KEYS } from '../../routes'
import { CONTACT, SOCIAL } from '../../data/site'

/**
 * Pied de page commun. Instagram et WhatsApp mis en avant, Facebook discret,
 * conformément à la section 10 du cahier des charges.
 */
export default function SiteFooter() {
    const { t, lang, path } = useI18n()
    const year = new Date().getFullYear()

    return (
        <footer className="relative z-10 border-t border-white/5 bg-veda-dark px-6 py-16 text-veda-light">
            <div className="mx-auto max-w-container">
                <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div className="space-y-6">
                        <div className="font-heading text-2xl uppercase tracking-widest">
                            La Maison <span className="italic text-veda-gold">Veda</span>
                        </div>
                        <p className="text-sm font-light leading-relaxed text-veda-light/60">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-veda-gold">
                            {t('footer.navTitle')}
                        </h2>
                        <ul className="space-y-3 text-sm font-light text-veda-light/70">
                            {NAV_KEYS.map((key) => (
                                <li key={key}>
                                    <Link to={path(key)} className="transition-colors hover:text-veda-gold">
                                        {t(`nav.${key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-veda-gold">
                            {t('footer.contactTitle')}
                        </h2>
                        <ul className="space-y-4 text-sm font-light text-veda-light/70">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold/70" />
                                <span>{lang === 'en' ? CONTACT.addressEn : CONTACT.addressFr}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 shrink-0 text-veda-gold/70" />
                                <a href={CONTACT.phoneHref} className="transition-colors hover:text-veda-gold">
                                    {CONTACT.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 shrink-0 text-veda-gold/70" />
                                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-veda-gold">
                                    {CONTACT.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageCircle className="h-4 w-4 shrink-0 text-veda-gold/70" />
                                <a
                                    href={CONTACT.whatsappHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition-colors hover:text-veda-gold"
                                >
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-veda-gold">
                            {t('footer.followTitle')}
                        </h2>
                        <div className="flex gap-4">
                            <a
                                href={SOCIAL.instagram}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-veda-light/20 transition-all hover:border-veda-gold hover:bg-veda-gold hover:text-veda-dark"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href={SOCIAL.facebook}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-veda-light/10 text-veda-light/40 transition-all hover:border-veda-gold/40 hover:text-veda-gold"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                        </div>
                        <a
                            href={SOCIAL.airbnb}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm font-light text-veda-light/60 underline decoration-veda-gold/40 underline-offset-4 transition-colors hover:text-veda-gold"
                        >
                            {t('venue.onAirbnb')}
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-light text-veda-light/40 md:flex-row">
                    <p>{year} {t('footer.rights')}</p>
                    <p>{t('common.location')}</p>
                </div>
            </div>
        </footer>
    )
}
