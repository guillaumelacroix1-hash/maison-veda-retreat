import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Palmtree, Bus, ChevronDown, ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n'
import { retreatContent } from '../data/retreat2027'

export default function Prolonger() {
    const [showMoreTour, setShowMoreTour] = useState(false)
    const { lang, path } = useI18n()
    const c = retreatContent(lang).prolonger

    return (
        <section className="py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative z-10 overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay">
                <img
                    src={`${import.meta.env.BASE_URL}new_image/ahangama-railway-nirbana-sri-lanka-1367x2048.jpeg`}
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
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-veda-light/70 font-light mt-6 text-sm sm:text-base leading-relaxed"
                    >
                        {c.intro}
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
                                src={`${import.meta.env.BASE_URL}new_image/IMG_1494.jpeg`}
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
                            <h4 className="text-3xl font-heading text-white mb-4 drop-shadow-lg">{c.chillTitle}</h4>
                            <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed drop-shadow-md">
                                {c.chillDesc}
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
                            <h4 className="text-3xl font-heading text-white mb-4 drop-shadow-lg">{c.tourTitle}</h4>
                            <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed drop-shadow-md">
                                {c.tourDesc}
                            </p>

                            <AnimatePresence>
                                {showMoreTour && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-4 pt-4 border-t border-veda-gold/30 text-white/80 font-light text-sm sm:text-base leading-relaxed drop-shadow-md overflow-hidden"
                                    >
                                        {c.tourMore}
                                        <br /><br />
                                        <span className="text-veda-gold font-medium">{c.tourPrice}</span> {c.tourIncludes}
                                        <Link
                                            to={path('travel')}
                                            onClick={(e) => e.stopPropagation()}
                                            className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-veda-gold hover:text-white transition-colors"
                                        >
                                            {c.tripsLink}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={(e) => { e.stopPropagation(); setShowMoreTour(!showMoreTour) }}
                                className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-veda-gold hover:text-white transition-colors duration-300 relative z-20"
                            >
                                {showMoreTour ? c.tourLessLabel : c.tourMoreLabel}
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
