import { motion } from 'framer-motion'
import { Sun, Moon, Wind, Heart, Map } from 'lucide-react'
import { useI18n } from '../i18n'
import { retreatContent } from '../data/retreat2027'

/** Icône et visuel de chaque bloc, dans l'ordre du contenu (retreat2027.js). */
const DECOR = [
    { icon: Sun, image: 'new_image/yoga.jpg' },
    { icon: Wind, image: 'new_image/yoga2.jpg' },
    { icon: Moon, image: 'new_image/maison-veda.jpeg' },
    { icon: Map, image: 'new_image/Stilt-fishermen.jpeg' },
    { icon: Heart, image: 'new_image/ahangama-beach-camp-poe-1367x2048.jpeg' },
]

export default function Programme() {
    const { lang } = useI18n()
    const c = retreatContent(lang).programme

    const items = c.items.map((item, i) => ({
        ...item,
        icon: DECOR[i]?.icon,
        image: `${import.meta.env.BASE_URL}${DECOR[i]?.image ?? ''}`,
    }))

    return (
        <section className="py-24 md:py-32 px-6 bg-[#fdfbf7] text-veda-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase"
                    >
                        {c.eyebrow}
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading leading-tight"
                    >
                        {c.title} <span className="italic text-veda-gold">{c.titleAccent}</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-24 h-[1px] bg-veda-gold mx-auto mt-8 origin-left"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-veda-dark/70 font-light mt-8 text-sm sm:text-base leading-relaxed"
                    >
                        {c.intro}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                            className="bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-500 border border-veda-gold/10 group relative overflow-hidden"
                        >
                            {/* Hover Background Image */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-veda-dark/85 transition-opacity duration-500" />
                            </div>

                            <div className="relative z-10 w-full h-full flex flex-col">
                                <div className="w-14 h-14 rounded-full bg-veda-gold/10 flex items-center justify-center mb-6 border border-transparent group-hover:border-veda-gold/30 transition-colors">
                                    {item.icon && <item.icon className="w-6 h-6 text-veda-gold" />}
                                </div>
                                <h4 className="text-xl font-heading mb-3 group-hover:text-white transition-colors duration-300">{item.title}</h4>
                                {item.badge && (
                                    <span className="inline-block mb-3 self-start px-3 py-1 bg-veda-gold/20 text-veda-gold rounded-full text-[10px] font-bold tracking-[0.1em] uppercase group-hover:bg-veda-gold group-hover:text-veda-dark transition-colors duration-300">
                                        {item.badge}
                                    </span>
                                )}
                                <p className="text-veda-dark/70 group-hover:text-veda-light/90 leading-relaxed font-light text-sm transition-colors duration-300">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Highlight card for Food */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="bg-veda-dark text-white p-10 rounded-2xl shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-veda-gold rounded-bl-full -mr-16 -mt-16 pointer-events-none opacity-80" />
                        <h4 className="text-xl font-heading mb-3 text-veda-gold">{c.board.title}</h4>
                        <p className="text-veda-light/90 leading-relaxed font-light text-sm mb-6">
                            {c.board.desc}
                        </p>
                        <span className="inline-block px-4 py-1.5 bg-veda-gold rounded-full text-[10px] font-bold tracking-[0.1em] uppercase text-veda-dark">
                            {c.board.badge}
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-2xl mx-auto text-center mt-16 pt-12 border-t border-veda-gold/20"
                >
                    <p className="text-veda-dark/70 font-light text-sm sm:text-base leading-relaxed">
                        {c.outro} <span className="italic text-veda-gold">{c.outroAccent}</span>{c.outroEnd}
                    </p>
                    <a
                        href="#prolonger"
                        className="inline-block mt-6 text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-veda-dark transition-colors"
                    >
                        {c.outroLink}
                    </a>
                </motion.div>

            </div>
        </section>
    )
}
