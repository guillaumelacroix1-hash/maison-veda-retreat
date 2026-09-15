/**
 * Questions fréquentes sur deux colonnes de même hauteur.
 *
 * Sur une seule colonne étroite, la FAQ faisait plus de deux mille pixels de
 * haut avec toute la moitié droite vide (page Contact et fiches retraite).
 * Répartir les familles à la main ne marchait pas : leurs poids sont trop
 * proches, une colonne gardait toujours un tiers de vide.
 *
 * On laisse donc le navigateur équilibrer, en colonnes de texte. Chaque
 * question reste d'un seul tenant, et l'intitulé d'une famille voyage avec sa
 * première question : il ne peut pas rester seul en bas de colonne. L'ordre de
 * lecture est conservé, et l'équilibre tient quand on ajoute des questions.
 *
 * @param {{key: string, label: string, items: {q: string, a: string}[]}[]} familles
 */
export default function FaqColonnes({ familles, tone = 'dark', className = '' }) {
    const question = tone === 'light' ? 'text-veda-dark' : 'text-veda-light'
    const reponse = tone === 'light' ? 'text-veda-dark/70' : 'text-veda-light/70'

    return (
        <div className={`gap-16 md:columns-2 lg:gap-24 ${className}`}>
            {familles.flatMap((famille, f) =>
                (famille.items ?? []).map((item, i) => (
                    <div
                        key={`${famille.key}-${item.q}`}
                        // En haut d'une colonne, le navigateur annule cette marge :
                        // les deux colonnes démarrent à la même hauteur.
                        className={`break-inside-avoid ${i > 0 ? 'mt-8' : f > 0 ? 'mt-14' : ''}`}
                    >
                        {i === 0 && (
                            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                {famille.label}
                            </h3>
                        )}
                        <h4 className={`font-heading text-lg leading-snug ${question}`}>{item.q}</h4>
                        <p className={`mt-2 text-base font-light leading-relaxed ${reponse}`}>{item.a}</p>
                    </div>
                )),
            )}
        </div>
    )
}
