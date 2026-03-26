import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import aurelieNatImg from '../../ressources/maisonveda-aurelie-nat.jpeg'
import { Link } from 'react-router-dom'

export default function FinalCTA() {
    return (
        <section className="py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative z-10 overflow-hidden border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl group"
                    >
                        <img
                            src={aurelieNatImg}
                            alt="Aurélie et Nathalie - Vos hôtes"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-veda-dark via-transparent to-transparent opacity-80 mix-blend-multiply pointer-events-none"></div>

                        <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 z-10">
                            <h4 className="text-3xl font-heading text-veda-gold drop-shadow-md">Les Filles</h4>
                            <p className="text-white/80 font-light mt-2 drop-shadow-sm">Vos hôtes pour cette retraite inoubliable.</p>
                        </div>
                    </motion.div>

                    {/* Text & CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col space-y-8"
                    >
                        <div>
                            <h3 className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase">
                                Prêt(e) pour le départ ?
                            </h3>
                            <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading leading-tight mb-8">
                                Réservez votre <span className="italic text-veda-gold block">Retraite.</span>
                            </h2>
                            <p className="text-veda-light/70 font-light leading-relaxed max-w-lg text-lg">
                                Les places sont limitées pour garantir une expérience intimiste et personnalisée. Rejoignez-nous au Sri Lanka pour une parenthèse de bien-être absolu.
                            </p>
                        </div>

                        <div className="pt-8">
                            <Link to="/reserver" className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest text-veda-dark uppercase bg-veda-gold rounded-full transition-all duration-300 hover:bg-white hover:text-veda-dark shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <span className="relative flex items-center gap-3">
                                    Réserver ma retraite
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </Link>
                            <p className="mt-6 text-sm text-veda-light/50 font-light italic">
                                *Acompte de réservation via paiement sécurisé.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
