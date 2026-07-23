import { useI18n } from '../../i18n'
import { CONTENT_GAPS } from '../../data/contentGaps'

/**
 * Marque à l'écran un contenu qui reste à fournir, avec son responsable.
 *
 * Rend visible la section 12 du cahier des charges directement dans le site,
 * plutôt que de laisser un blanc ou, pire, un texte inventé (section 8).
 *
 * Pour masquer toutes ces zones d'un coup, par exemple pour une démo client :
 * VITE_HIDE_CONTENT_GAPS=true dans l'environnement de build.
 */
export default function ContentGap({ id, className = '' }) {
    const { t, lang } = useI18n()

    if (import.meta.env.VITE_HIDE_CONTENT_GAPS === 'true') return null

    const gap = CONTENT_GAPS[id]
    if (!gap) {
        if (import.meta.env.DEV) console.error(`[ContentGap] id inconnu : "${id}"`)
        return null
    }

    // L'espace avant les deux-points est une règle typographique française.
    const colon = lang === 'fr' ? ' : ' : ': '

    return (
        <div
            className={`rounded-2xl border border-dashed border-veda-gold/40 bg-veda-gold/5 p-6 md:p-8 ${className}`}
            data-content-gap={id}
        >
            <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-veda-gold/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-veda-gold">
                    {t('gap.badge')}
                </span>
                <span className="text-xs font-light opacity-50">
                    {t('gap.source')}, {gap.ref}
                </span>
            </div>

            <p className="mt-4 text-sm font-light leading-relaxed opacity-80">
                {gap[lang] ?? gap.fr}
            </p>

            <p className="mt-4 text-xs font-light opacity-60">
                <span className="font-medium text-veda-gold">{t('gap.owner')}</span>
                {colon}
                {gap.owner}
            </p>
        </div>
    )
}
