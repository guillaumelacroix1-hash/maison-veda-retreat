import { motion } from 'framer-motion'
import { Sun, Moon, Wind, Heart, Map } from 'lucide-react'

export default function Programme() {
    const items = [
        {
            icon: <Sun className="w-6 h-6 text-veda-gold" />,
            title: "Matinées ressourçantes",
            desc: "Sadhana au lever du soleil face au lac, suivi de pratiques énergisantes (Kundalini, Hatha) pour éveiller le corps et l'esprit.",
            image: "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_0193.jpeg"
        },
        {
            icon: <Wind className="w-6 h-6 text-veda-gold" />,
            title: "Pratiques profondes",
            desc: "2 à 3 cours par jour incluant Yin Yoga, Nidra, danse du dragon, méditations et chants de mantras.",
            image: "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_0295.jpeg"
        },
        {
            icon: <Moon className="w-6 h-6 text-veda-gold" />,
            title: "Soirées d'intégration",
            desc: "Clôturez vos journées avec des séances de breathwork, sound healing, kirtan ou une cérémonie du Cacao.",
            image: "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_0292.jpeg"
        },
        {
            icon: <Map className="w-6 h-6 text-veda-gold" />,
            title: "Découverte & Culture",
            desc: "Visites incluses : refuge des tortues, temple Bouddhiste (cérémonie puja), et la ville de Galle classée à l'UNESCO.",
            image: "https://www.lamaisonveda.com/wp-content/uploads/2025/08/Stilt-fishermen.jpeg"
        },
        {
            icon: <Heart className="w-6 h-6 text-veda-gold" />,
            title: "Temps libre & Farniente",
            desc: "Profitez des après-midis pour vous reposer au bord de la piscine, surfer, ou explorer la région en tuktuk.",
            image: "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_0086.jpeg"
        }
    ]

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
                        L'Expérience
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading leading-tight"
                    >
                        Le Programme de <span className="italic text-veda-gold">Votre Retraite</span>
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
                        Durant la retraite, il y a quelques sorties touristiques planifiées, mais l’idée est de privilégier le repos et l’introspection entre les cours. Vous disposerez d’une liste de recommandations pour vos visites touristiques dans la région. Libre à vous de réserver un tuktuk et de vous organiser en groupe ou solo pour partir à l’aventure !
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
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-heading mb-3 group-hover:text-white transition-colors duration-300">{item.title}</h4>
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
                        <h4 className="text-xl font-heading mb-3 text-veda-gold">Pension Complète</h4>
                        <p className="text-veda-light/90 leading-relaxed font-light text-sm mb-6">
                            Savourez 3 repas végétariens par jour (petit-déjeuner, lunch et dîner) préparés avec soin par notre équipe srilankaise locale.
                        </p>
                        <span className="inline-block px-4 py-1.5 bg-veda-gold rounded-full text-[10px] font-bold tracking-[0.1em] uppercase text-veda-dark">
                            Inclus
                        </span>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
