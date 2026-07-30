import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

/**
 * Grille de cartes-portails vers les grandes sections du site.
 *
 * Reprend le principe des cartes du site source (VACATIONS, RETREATS,
 * VEDA TRAVEL, KUNDALINI YOGA, OUR STORY), en gardant leurs visuels.
 *
 * Les images restent en couleur : le Sri Lanka se vend par ses couleurs, et
 * une grille désaturée donnait au site un air éteint. Le survol assombrit
 * légèrement et fait monter la légende.
 *
 * @param {{to: string, label: string, caption?: string, image: {src,alt}}[]} items
 */
export default function SectionCards({ items, className = '' }) {
    return (
        <ul className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
            {items.map((item, index) => (
                <li
                    key={item.to}
                    // La première carte occupe deux colonnes sur grand écran :
                    // la grille cesse d'être une simple répétition régulière.
                    className={index === 0 ? 'lg:col-span-2' : ''}
                >
                    <Link
                        to={item.to}
                        className="group relative flex h-full min-h-[280px] items-end overflow-hidden rounded-3xl focus:outline-none focus:ring-2 focus:ring-veda-gold focus:ring-offset-2 focus:ring-offset-veda-dark lg:min-h-[340px]"
                    >
                        {item.image && (
                            <img
                                src={item.image.src}
                                alt={item.image.alt || ''}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-105"
                            />
                        )}

                        {/* Dégradé qui garde le titre lisible sans éteindre la photo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-veda-dark via-veda-dark/35 to-transparent transition-all duration-700 group-hover:from-veda-dark group-hover:via-veda-dark/55" />

                        {/* Liseré doré qui se révèle au survol */}
                        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-veda-gold/0 transition-colors duration-500 group-hover:border-veda-gold/60" />

                        <div className="relative w-full p-7 lg:p-9">
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <h3 className="font-heading text-2xl uppercase tracking-wide text-white drop-shadow lg:text-3xl">
                                        {item.label}
                                    </h3>
                                    {item.caption && (
                                        <p className="mt-2 max-w-sm text-sm font-light leading-relaxed text-white/0 transition-colors duration-500 group-hover:text-white/80">
                                            {item.caption}
                                        </p>
                                    )}
                                </div>
                                <ArrowUpRight className="h-6 w-6 shrink-0 translate-y-2 text-veda-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
