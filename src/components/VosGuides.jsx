import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import aureliePhoto from '../../ressources/maisonveda-aurelie-photo.jpg'
import nathaliePhoto from '../../ressources/maisonveda-nathalie-photo.jpg'
import { useI18n } from '../i18n'
import { retreatContent } from '../data/retreat2027'

/** Portraits, dans l'ordre des personnes déclarées dans retreat2027.js. */
const PHOTOS = [
    { src: aureliePhoto, motion: 'up' },
    { src: nathaliePhoto, motion: 'down' },
]

/** Bloc « une professeure » : intro, dépliant biographique, citation. */
function Guide({ person, labels }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="pl-6 border-l-4 border-veda-gold">
            <h4 className="text-2xl font-heading mb-4 text-white">{person.name}</h4>
            <div className="text-veda-light/80 leading-relaxed font-light text-sm sm:text-base space-y-3">
                <p>{person.intro}</p>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden space-y-3"
                        >
                            {person.more.map((paragraph) => (
                                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                            ))}
                            {person.quote && <p className="italic">{person.quote}</p>}
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors mt-2"
                >
                    {isOpen ? labels.less : labels.more}
                </button>
            </div>
        </div>
    )
}

export default function VosGuides() {
    const containerRef = useRef(null)
    const { lang } = useI18n()
    const c = retreatContent(lang).guides

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })
    const yUp = useTransform(scrollYProgress, [0, 1], [50, -50])
    const yDown = useTransform(scrollYProgress, [0, 1], [-50, 50])

    return (
        <section ref={containerRef} className="py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase">
                                {c.eyebrow}
                            </h3>
                            <h2 className="text-5xl md:text-7xl font-heading mb-12 leading-[1.1]">
                                {c.titleStart} <span className="italic text-veda-gold">{c.titleAccent1}</span>
                                <br />
                                {c.titleMiddle} <span className="italic text-veda-gold">{c.titleAccent2}</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-12"
                        >
                            {c.people.map((person) => (
                                <Guide key={person.name} person={person} labels={c} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Portraits en quinconce, avec parallaxe inversée */}
                    <div className="lg:w-1/2 relative w-full pt-10 lg:pt-0">
                        <div className="flex flex-row gap-12 sm:gap-20 md:gap-28 relative z-10 justify-center lg:justify-end items-end">
                            {c.people.map((person, index) => {
                                const photo = PHOTOS[index]
                                if (!photo) return null
                                const isUp = photo.motion === 'up'

                                return (
                                    <motion.div
                                        key={person.name}
                                        style={{ y: isUp ? yUp : yDown }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                        className={`w-[60%] sm:w-[50%] relative group ${isUp ? 'pb-8' : ''}`}
                                    >
                                        <div className="relative">
                                            <div
                                                className={`absolute inset-0 border border-veda-gold/60 -z-10 rounded-xl pointer-events-none hidden sm:block transition-transform duration-700 ${
                                                    isUp
                                                        ? 'translate-x-5 -translate-y-5 group-hover:translate-x-7 group-hover:-translate-y-7'
                                                        : '-translate-x-5 translate-y-5 group-hover:-translate-x-7 group-hover:translate-y-7'
                                                }`}
                                            />
                                            <div className="overflow-hidden rounded-xl bg-veda-dark shadow-2xl relative z-10">
                                                <img
                                                    src={photo.src}
                                                    alt={person.name}
                                                    className="w-full h-auto aspect-[3/4] object-cover object-center grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
