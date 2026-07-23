import { createContext, useContext, useMemo } from 'react'
import { useLocation, matchPath } from 'react-router-dom'
import { LANGS, DEFAULT_LANG, ROUTES, buildPath } from '../routes'
import fr from './fr'
import en from './en'

const DICTS = { fr, en }

const I18nContext = createContext(null)

/** Résout une clé pointée ("nav.retreats") dans un dictionnaire imbriqué. */
function lookup(dict, key) {
    return key.split('.').reduce((acc, part) => (acc == null ? undefined : acc[part]), dict)
}

export function I18nProvider({ lang: requestedLang, children }) {
    const lang = LANGS.includes(requestedLang) ? requestedLang : DEFAULT_LANG

    const value = useMemo(() => {
        /**
         * Traduit une clé. Si elle manque dans la langue courante, on retombe sur
         * le français plutôt que d'afficher un trou : le site reste lisible pendant
         * que la traduction anglaise se construit (section 12 du cahier des charges).
         */
        const t = (key, vars) => {
            let value = lookup(DICTS[lang], key)
            if (value === undefined) {
                value = lookup(DICTS[DEFAULT_LANG], key)
                if (import.meta.env.DEV && value !== undefined && lang !== DEFAULT_LANG) {
                    console.warn(`[i18n] "${key}" manque en ${lang}, repli sur ${DEFAULT_LANG}`)
                }
            }
            if (value === undefined) {
                if (import.meta.env.DEV) console.error(`[i18n] clé inconnue : "${key}"`)
                return key
            }
            if (vars && typeof value === 'string') {
                return value.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? `{${name}}`)
            }
            return value
        }

        return {
            lang,
            t,
            /** URL vers une page du site, dans la langue courante par défaut. */
            path: (key, params, targetLang = lang) => buildPath(key, targetLang, params),
            /** Le français insère une espace avant les deux-points, pas l'anglais. */
            colon: lang === 'fr' ? ' : ' : ': ',
        }
    }, [lang])

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
    const ctx = useContext(I18nContext)
    if (!ctx) throw new Error('useI18n doit être utilisé dans un <I18nProvider>')
    return ctx
}

/**
 * Identifie la page courante à partir de l'URL, toutes langues confondues.
 * Sert au sélecteur de langue pour basculer vers la page équivalente.
 */
export function useCurrentRoute() {
    const { pathname } = useLocation()

    return useMemo(() => {
        for (const [key, slugs] of Object.entries(ROUTES)) {
            for (const lang of LANGS) {
                const pattern = slugs[lang] ? `/${lang}/${slugs[lang]}` : `/${lang}`
                const match = matchPath({ path: pattern, end: true }, pathname)
                if (match) return { key, lang, params: match.params }
            }
        }
        return null
    }, [pathname])
}
