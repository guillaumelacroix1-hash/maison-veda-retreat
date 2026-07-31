import { useState } from 'react'
import { Plus } from 'lucide-react'

/**
 * Liste repliable.
 *
 * Sert aux hébergements partenaires, que le cahier des charges veut en second
 * plan derrière les villas de La Maison VEDA, tout en conservant leurs photos.
 * Replié, chaque partenaire tient sur une ligne ; déplié, il montre tout.
 *
 * @param {{key: string, title: string, subtitle?: string, content: ReactNode}[]} items
 * @param {number} [defaultOpen]  index ouvert au chargement, aucun par défaut
 */
export default function Accordion({ items, defaultOpen = null, tone = 'dark' }) {
    const [open, setOpen] = useState(defaultOpen)
    const isLight = tone === 'light'

    const rule = isLight ? 'border-veda-dark/10' : 'border-white/10'
    const title = isLight ? 'text-veda-dark' : 'text-veda-light'
    const sub = isLight ? 'text-veda-dark/55' : 'text-veda-light/55'

    return (
        <div className={`border-t ${rule}`}>
            {items.map((item, index) => {
                const isOpen = open === index
                return (
                    <div key={item.key} className={`border-b ${rule}`}>
                        <button
                            type="button"
                            onClick={() => setOpen(isOpen ? null : index)}
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-6 py-7 text-left"
                        >
                            <span>
                                <span className={`block font-heading text-2xl leading-snug ${title}`}>
                                    {item.title}
                                </span>
                                {item.subtitle && (
                                    <span className={`mt-1.5 block text-sm font-light ${sub}`}>
                                        {item.subtitle}
                                    </span>
                                )}
                            </span>

                            <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                                    isOpen
                                        ? 'rotate-45 border-veda-gold bg-veda-gold text-veda-dark'
                                        : isLight
                                          ? 'border-veda-dark/20 text-veda-dark/60'
                                          : 'border-white/20 text-veda-light/60'
                                }`}
                            >
                                <Plus className="h-5 w-5" />
                            </span>
                        </button>

                        {/* Rendu seulement une fois ouvert : les galeries partenaires
                            pèsent plusieurs dizaines d'images. */}
                        {isOpen && <div className="pb-10">{item.content}</div>}
                    </div>
                )
            })}
        </div>
    )
}
