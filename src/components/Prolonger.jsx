import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palmtree, Bus, ChevronDown } from 'lucide-react'

export default function Prolonger() {
    const [showMoreTour, setShowMoreTour] = useState(false)

    return (
        <section className="py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative z-10 overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay">
                <img
                    src="https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_0086.jpeg"
                    alt="Sri Lanka texture"
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase"
                    >
                        L'Aventure Continue
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading leading-tight"
                    >
                        Prolongez votre <span className="italic text-veda-gold">séjour !</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-veda-light/70 font-light mt-6 text-sm sm:text-base leading-relaxed"
                    >
                        Nous vous recommandons de prendre 2 à 3 semaines de disponibilité pour ce voyage. Le vol dure en moyenne de 10 à 23h, et le décalage horaire se fait sentir généralement les 2 premiers jours.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">

                    {/* Card 1: Chill & Farniente */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative rounded-3xl overflow-hidden min-h-[450px] sm:min-h-[500px] flex items-end cursor-pointer shadow-2xl"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://www.lamaisonveda.com/wp-content/uploads/2024/03/IMG_1494.jpeg"
                                alt="Plage du sud Sri Lanka"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Gradients to ensure text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-veda-dark/95 via-veda-dark/50 to-transparent"></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 sm:p-12 w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                            <div className="w-12 h-12 rounded-full bg-veda-gold/20 backdrop-blur-md flex items-center justify-center mb-6 text-veda-gold border border-veda-gold/30">
                                <Palmtree className="w-5 h-5" />
                            </div>
                            <h4 className="text-3xl font-heading text-white mb-4 drop-shadow-lg">Chill & Farniente</h4>
                            <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed drop-shadow-md">
                                Restez à proximité de notre lieu de retraites dans le sud du Sri-Lanka pour profiter des plages, du surf. Nous pouvons vous recommander quelques adresses secrètes où séjourner et des activités incontournables.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Tour en mini-van */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative rounded-3xl overflow-hidden min-h-[450px] sm:min-h-[500px] flex items-end cursor-pointer shadow-2xl"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={`${import.meta.env.BASE_URL}minivan.jpg`}
                                alt="Tourisme Sri Lanka Safari"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Gradients to ensure text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-veda-dark/95 via-veda-dark/50 to-transparent"></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 sm:p-12 w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                            <div className="w-12 h-12 rounded-full bg-veda-gold/20 backdrop-blur-md flex items-center justify-center mb-6 text-veda-gold border border-veda-gold/30">
                                <Bus className="w-5 h-5" />
                            </div>
                            <h4 className="text-3xl font-heading text-white mb-4 drop-shadow-lg">Tour en mini-van</h4>
                            <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed drop-shadow-md">
                                À la suite de la retraite, nous organisons un tour exclusif de 6 à 15 jours en van/bus (à partir de 5 pers). Inclut les transports, hébergements, repas chauffeur, et petits déjeuners. Détails et itinéraires sur demande.
                            </p>

                            <AnimatePresence>
                                {showMoreTour && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-4 pt-4 border-t border-veda-gold/30 text-white/80 font-light text-sm sm:text-base leading-relaxed drop-shadow-md overflow-hidden"
                                    >
                                        Du 13 au 19 février (7 jrs/6 nuits), ou tour personnalisé de 6 à 15 jours en mini van/bus à partir de 5 pers.
                                        <br/><br/>
                                        <span className="text-veda-gold font-medium">100€ à 150€ par jour</span> incluant : privatisation minivan/chauffeur, essence, repas et hébergements chauffeur, hébergements pour les passagers, visites au programme et petits déjeuners.
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={(e) => { e.stopPropagation(); setShowMoreTour(!showMoreTour) }}
                                className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-veda-gold hover:text-white transition-colors duration-300 relative z-20"
                            >
                                {showMoreTour ? "Moins de détails" : "En savoir plus"}
                                <motion.div
                                    animate={{ rotate: showMoreTour ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </motion.div>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
