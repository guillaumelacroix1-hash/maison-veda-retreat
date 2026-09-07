/** Une famille de questions fréquentes, en questions-réponses. */
export default function FaqList({ items, tone = 'dark', className = '' }) {
    const question = tone === 'light' ? 'text-veda-dark' : 'text-veda-light'
    const reponse = tone === 'light' ? 'text-veda-dark/70' : 'text-veda-light/70'

    return (
        <dl className={`space-y-7 ${className}`}>
            {items.map((item) => (
                <div key={item.q}>
                    <dt className={`font-heading text-lg leading-snug ${question}`}>{item.q}</dt>
                    <dd className={`mt-2 text-base font-light leading-relaxed ${reponse}`}>{item.a}</dd>
                </div>
            ))}
        </dl>
    )
}
