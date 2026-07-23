import { Link } from 'react-router-dom'
import { useI18n, useCurrentRoute } from '../../i18n'
import { LANGS, buildPath } from '../../routes'

/**
 * Bascule vers la page équivalente dans l'autre langue.
 *
 * On repart de la clé de route plutôt que du chemin : /fr/retraites renvoie
 * donc bien vers /en/retreats, et non vers l'accueil anglais.
 */
export default function LanguageSwitcher({ className = '', onNavigate }) {
    const { lang } = useI18n()
    const current = useCurrentRoute()

    return (
        <div className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-widest ${className}`}>
            {LANGS.map((code, i) => {
                const isActive = code === lang
                // Sans route identifiée (page 404), on renvoie vers l'accueil de la langue.
                const to = current
                    ? buildPath(current.key, code, current.params)
                    : buildPath('home', code)

                return (
                    <span key={code} className="flex items-center">
                        {i > 0 && <span className="px-1.5 opacity-30">/</span>}
                        <Link
                            to={to}
                            onClick={onNavigate}
                            hrefLang={code}
                            aria-current={isActive ? 'true' : undefined}
                            className={
                                isActive
                                    ? 'text-veda-gold'
                                    : 'opacity-50 transition-opacity duration-300 hover:opacity-100'
                            }
                        >
                            {code}
                        </Link>
                    </span>
                )
            })}
        </div>
    )
}
