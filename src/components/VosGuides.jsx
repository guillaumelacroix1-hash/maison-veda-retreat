import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

export default function VosGuides() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const yUp = useTransform(scrollYProgress, [0, 1], [50, -50])
    const yDown = useTransform(scrollYProgress, [0, 1], [-50, 50])

    const [showMoreAurelie, setShowMoreAurelie] = useState(false)
    const [showMoreNathalie, setShowMoreNathalie] = useState(false)

    return (
        <section ref={containerRef} className="py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase">
                                Vos Guides
                            </h3>
                            <h2 className="text-5xl md:text-7xl font-heading mb-12 leading-[1.1]">
                                L'union du <span className="italic text-veda-gold">Hatha</span>
                                <br />
                                & du <span className="italic text-veda-gold">Kundalini</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-12"
                        >
                            {/* Aurelie */}
                            <div className="pl-6 border-l-4 border-veda-gold">
                                <h4 className="text-2xl font-heading mb-4 text-white">Aurélie Dutrey</h4>
                                <div className="text-veda-light/80 leading-relaxed font-light text-sm sm:text-base space-y-3">
                                    <p>
                                        Aurélie, Radha Navjot kaur est la fondatrice de La maison VEDA, studio de yoga et centre de retraites à St-Simon en Charente et à Habaraduwa dans le sud du Sri Lanka.
                                    </p>
                                    <AnimatePresence>
                                        {showMoreAurelie && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden space-y-3"
                                            >
                                                <p>
                                                    Elle transmet la pratique du yoga Kundalini selon les enseignements de Gurmukh Kaur Khalsa, (Golden bridge, USA). Aurélie est également certifiée en yoga Hatha (Aryoga, Rishikesh, Inde) et praticienne en Ayurvéda, (formation Thérapeute ayurvédique, Daramshala, clinique Ayuskama, Inde).
                                                </p>
                                                <p>
                                                    Ses 5 années de résidence au Sri Lanka lui permettent aujourd’hui d’organiser des séjours sur cette île magnifique et elle a très à coeur de partager ses plus belles expériences et découvertes avec vous.
                                                </p>
                                                <p>
                                                    Elle sera votre professeure de Kundalini & Meditation et coordinatrice sur place, de votre inscription jusqu’à votre départ.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <button
                                        onClick={() => setShowMoreAurelie(!showMoreAurelie)}
                                        className="text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors mt-2"
                                    >
                                        {showMoreAurelie ? '- Lire moins' : '+ En savoir plus'}
                                    </button>
                                </div>
                            </div>

                            {/* Nathalie */}
                            <div className="pl-6 border-l-4 border-veda-gold mt-12">
                                <h4 className="text-2xl font-heading mb-4 text-white">Nathalie Catinaud</h4>
                                <div className="text-veda-light/80 leading-relaxed font-light text-sm sm:text-base space-y-3">
                                    <p>
                                        Orginaire de Charente, Nathalie a rencontré le yoga il y a une quinzaine d’année lors d’un long voyage au Canada, elle a découvert différentes pratiques qui lui ont permise de faire de merveilleuses rencontres humaines et spirituelles.
                                    </p>
                                    <AnimatePresence>
                                        {showMoreNathalie && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden space-y-3"
                                            >
                                                <p>
                                                    Très vite le yoga a pris une place importante dans sa vie, une aide précieuse pour maitriser ses émotions et d’un point de vue plus général, un accompagnement vers un meilleur équilibre.
                                                </p>
                                                <p>
                                                    De retour en France, sa passion pour la discipline l’a poussé à se former à l’ENPY ( école nationale des professeurs de yoga) et depuis 2016 elle enseigne avec joie les yoga Hatha et Nidra, des moments de détente corporelle qui invitent au lâcher prise et à laisser aller le stress.
                                                </p>
                                                <p>
                                                    Nathalie travaille également avec son conjoint sur l’exploitation viticole où elle s’occupe principalement de l’administratif et de la gestion du personnel.<br />
                                                    Ce pied toujours en entreprise, l’a amené à se former en tant qu’intervenante méditation et yoga sur chaise dans le cadre de la QVT ( qualité de vie en au travail ).
                                                </p>
                                                <p className="italic">
                                                    « Je remercie chaque jours l’univers de m’avoir guidé sur la voix du yoga »
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <button
                                        onClick={() => setShowMoreNathalie(!showMoreNathalie)}
                                        className="text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors mt-2"
                                    >
                                        {showMoreNathalie ? '- Lire moins' : '+ En savoir plus'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Images Grid */}
                    <div className="lg:w-1/2 relative w-full pt-10 lg:pt-0">
                        <div className="flex flex-row gap-12 sm:gap-20 md:gap-28 relative z-10 justify-center lg:justify-end items-end">

                            <motion.div
                                style={{ y: yUp }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="w-[60%] sm:w-[50%] relative pb-8 group"
                            >
                                {/* Image 1 - Aurélie */}
                                <div className="relative">
                                    {/* Decorative Box offset (en quinconce) */}
                                    <div className="absolute inset-0 border border-veda-gold/60 -z-10 translate-x-5 -translate-y-5 rounded-xl pointer-events-none hidden sm:block transition-transform duration-700 group-hover:translate-x-7 group-hover:-translate-y-7"></div>

                                    <div className="overflow-hidden rounded-xl bg-veda-dark shadow-2xl relative z-10">
                                        <img
                                            src="https://www.lamaisonveda.com/wp-content/uploads/2023/01/DSCF3673-scaled.jpg"
                                            alt="Aurélie Dutrey"
                                            className="w-full h-auto aspect-[3/4] object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                style={{ y: yDown }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-[60%] sm:w-[50%] relative group"
                            >
                                {/* Image 2 - Nathalie */}
                                <div className="relative">
                                    {/* Decorative Box offset (en quinconce) */}
                                    <div className="absolute inset-0 border border-veda-gold/60 -z-10 -translate-x-5 translate-y-5 rounded-xl pointer-events-none hidden sm:block transition-transform duration-700 group-hover:-translate-x-7 group-hover:translate-y-7"></div>

                                    <div className="overflow-hidden rounded-xl bg-veda-dark shadow-2xl relative z-10">
                                        <img
                                            src="https://www.lamaisonveda.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-28-at-07.13.20-1024x913.jpeg"
                                            alt="Nathalie Catinaud"
                                            className="w-full h-auto aspect-[3/4] object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
