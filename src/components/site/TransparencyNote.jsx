import { Info } from 'lucide-react'

/**
 * Encart de transparence, rendu obligatoire par le cahier des charges pour le
 * Lake Loft : le shala est sur son toit et accueille du public.
 *
 * Présenté comme un atout, mais sans rien masquer de ce que ça implique. Il
 * apparaît sur la page Le Lieu et sur la page Studio, les deux endroits où un
 * visiteur peut se poser la question.
 */
export default function TransparencyNote({ copy, tone = 'dark', className = '' }) {
    const isLight = tone === 'light'

    return (
        <aside
            className={`rounded-3xl border p-8 md:p-10 ${
                isLight
                    ? 'border-veda-gold/40 bg-veda-gold/[0.07]'
                    : 'border-veda-gold/40 bg-veda-gold/[0.06]'
            } ${className}`}
        >
            <div className="flex items-center gap-3">
                <Info className="h-4 w-4 shrink-0 text-veda-gold" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                    {copy.eyebrow}
                </p>
            </div>

            <h3 className="mt-5 font-heading text-2xl leading-snug md:text-3xl">
                {copy.title} <span className="italic text-veda-gold">{copy.titleAccent}</span>
            </h3>

            <p className={`mt-4 max-w-2xl text-base font-light leading-relaxed ${isLight ? 'text-veda-dark/70' : 'text-veda-light/70'}`}>
                {copy.lead}
            </p>

            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                {copy.points.map((point) => (
                    <div key={point.label}>
                        <dt className={`text-sm font-semibold ${isLight ? 'text-veda-dark' : 'text-veda-light'}`}>
                            {point.label}
                        </dt>
                        <dd className={`mt-2 text-sm font-light leading-relaxed ${isLight ? 'text-veda-dark/65' : 'text-veda-light/65'}`}>
                            {point.text}
                        </dd>
                    </div>
                ))}
            </dl>
        </aside>
    )
}
