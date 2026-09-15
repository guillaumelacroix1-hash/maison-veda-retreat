import RetreatCard from './RetreatCard'
import RetreatFeature from './RetreatFeature'

/**
 * Les retraites à venir, disposées selon leur nombre.
 *
 * Une seule : elle occupe toute la largeur. Deux ou quatre : deux colonnes.
 * Deux cartes dans une grille de trois laissaient une colonne entière vide à
 * droite, sur l'accueil comme sur la page Retraites. Trois ou plus : trois
 * colonnes.
 *
 * Accueil et page Retraites partageaient cette logique en double ; elle vit
 * désormais ici.
 */
export default function RetreatGrid({ retreats }) {
    if (!retreats?.length) return null
    if (retreats.length === 1) return <RetreatFeature retreat={retreats[0]} />

    const deuxColonnes = retreats.length === 2 || retreats.length === 4

    return (
        <div className={`grid gap-8 md:grid-cols-2 ${deuxColonnes ? '' : 'lg:grid-cols-3'}`}>
            {retreats.map((retreat) => (
                <RetreatCard key={retreat.slug} retreat={retreat} large={deuxColonnes} />
            ))}
        </div>
    )
}
