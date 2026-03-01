import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // Parallax and Scale effect
    const yList = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]) // Image grows as we scroll down
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]) // Text fades out

    return (
        <div ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-veda-dark">

            {/* Background Image with Parallax & Scale */}
            <motion.div
                style={{ y: yList, scale, originY: 0 }}
                className="absolute inset-0 z-0 origin-top"
            >
                {/* Gradients to match the screenshot Exactly */}
                <div className="absolute inset-0 bg-veda-dark/40 z-10" />
                {/* Bottom gradient fading into the next section */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-veda-dark to-transparent z-10" />
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-veda-dark/80 to-transparent z-10" />

                <img
                    src="https://www.lamaisonveda.com/wp-content/uploads/2024/04/IMG_0945-scaled.jpg"
                    alt="Retraite Sri Lanka La Maison Veda"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="z-20 text-center px-4 max-w-4xl flex flex-col items-center mt-16"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="px-6 py-1.5 border border-veda-gold/40 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-8 text-veda-light bg-veda-dark/30 backdrop-blur-md"
                >
                    7 AU 13 FÉVRIER 2027
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-7xl md:text-[7rem] leading-[1.1] mb-6 font-heading"
                >
                    Retraite
                    <br />
                    <span className="font-heading italic font-light text-veda-gold drop-shadow-lg">Sri Lanka</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl font-light text-veda-light max-w-2xl mx-auto mb-12 drop-shadow-md"
                >
                    Immersion Hatha & Kundalini au cœur de la jungle, face au lac sacré de Koggala.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                >
                    <button className="px-10 py-3.5 bg-veda-sand hover:bg-white text-veda-dark text-sm sm:text-base font-semibold tracking-widest uppercase transition-colors duration-300 rounded-full shadow-lg">
                        Réservation
                    </button>
                    <button className="px-10 py-3.5 border border-white/50 text-white hover:border-white hover:bg-white/10 text-sm sm:text-base font-semibold tracking-widest uppercase transition-all duration-300 rounded-full backdrop-blur-sm">
                        Découvrir
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 z-20 pointer-events-none"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown className="text-white/50 w-6 h-6 font-light" />
                </motion.div>
            </motion.div>
        </div>
    )
}
