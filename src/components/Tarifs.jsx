import { motion } from 'framer-motion'
import { Calendar, Check, Plane } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Tarifs() {
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
                        Rejoignez-nous
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading leading-tight mb-8"
                    >
                        Dates & <span className="italic text-veda-gold">Tarifs</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-veda-dark/70 font-light max-w-2xl mx-auto"
                    >
                        Préparez votre voyage vers une immersion totale au cœur du Sri Lanka. Retrouvez ici toutes les informations pratiques et nos différentes formules d'hébergement.
                    </motion.p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-16">

                    {/* Info Section - Centered Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-veda-gold/10 text-center flex flex-col items-center transform transition-transform duration-500 hover:-translate-y-2">
                            <div className="p-4 bg-veda-gold/5 rounded-full text-veda-gold mb-6 inline-flex">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-heading mb-3">Dates du séjour</h4>
                            <p className="font-medium text-veda-dark mb-2">7 au 13 février 2027</p>
                            <p className="text-sm text-veda-dark/60">Arrivée le dimanche à 14h<br />Départ le samedi à 11h</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-veda-gold/10 text-center flex flex-col items-center transform transition-transform duration-500 hover:-translate-y-2">
                            <div className="p-4 bg-veda-gold/5 rounded-full text-veda-gold mb-6 inline-flex">
                                <Plane className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-heading mb-3">Transport</h4>
                            <p className="text-sm text-veda-dark/70 leading-relaxed">
                                Vol pour Colombo (pensez au décalage horaire +1j). Navette aéroport-hôtel partageable avec le groupe.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-veda-gold/10 text-center flex flex-col items-center md:col-span-2 lg:col-span-1 transform transition-transform duration-500 hover:-translate-y-2">
                            <div className="p-4 bg-veda-gold/5 rounded-full text-veda-gold mb-6 inline-flex">
                                <Check className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-heading mb-4">Ce qui est inclus</h4>
                            <ul className="space-y-2 text-sm text-veda-dark/80 inline-block text-left">
                                {["6 nuits d'hébergement", "Pension complète (végétarienne)", "2 à 4 pratiques de yoga / jour", "Expériences (Cacao, Kirtan...)", "Activités durant la retraite"].map((item, i) => (
                                    <li key={i} className="flex items-start justify-center gap-2">
                                        <Check className="w-4 h-4 text-veda-gold shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Pricing Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl pt-8 border-t border-veda-gold/20"
                    >
                        <div className="bg-white border border-veda-gold/20 rounded-[2.5rem] p-10 relative shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group">
                            <div className="absolute -top-4 bg-veda-dark text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase py-2 px-6 rounded-full shadow-md">
                                Standard
                            </div>

                            <h4 className="text-3xl font-heading mb-3 mt-4">Chambre Partagée</h4>
                            <p className="text-sm text-veda-dark/60 mb-10 font-light">Pour 2, 3 ou 4 personnes. L'idéal pour partager l'expérience.</p>

                            <div className="flex items-baseline gap-2 mb-10 justify-center">
                                <span className="text-6xl font-heading text-veda-gold">1<span className="tracking-tight">280</span></span>
                                <span className="text-2xl font-medium">€</span>
                            </div>

                            <div className="mt-auto w-full">
                                <Link to="/reserver" className="block text-center w-full py-4 bg-veda-dark group-hover:bg-black text-veda-light font-medium tracking-widest uppercase transition-colors duration-300 rounded-full text-sm shadow-md">
                                    Réserver ma place
                                </Link>
                                <p className="text-xs text-veda-dark/60 mt-4 font-light leading-relaxed">
                                    <span className="font-medium text-veda-dark">Acompte de 500€</span> par virement.<br /> Preuve à envoyer par email pour valider.<br />
                                    Solde à régler 1 mois avant (15 janvier).<br />
                                    <span className="italic">Annulation: Remboursement si remplacement possible.</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-veda-dark text-white rounded-[2.5rem] p-10 relative shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 border border-veda-gold/20 flex flex-col items-center text-center group">
                            <div className="absolute -top-4 bg-veda-gold text-veda-dark text-[10px] sm:text-xs font-bold tracking-widest uppercase py-2 px-6 rounded-full shadow-md">
                                Premium
                            </div>

                            <h4 className="text-3xl font-heading mb-3 mt-4 text-veda-gold">Chambre Single</h4>
                            <p className="text-sm text-veda-light/60 mb-10 font-light">Profitez de votre espace privé pour un repos total.</p>

                            <div className="flex items-baseline gap-2 mb-10 justify-center">
                                <span className="text-6xl font-heading text-white">1<span className="tracking-tight">480</span></span>
                                <span className="text-2xl font-medium text-veda-gold">€</span>
                            </div>

                            <div className="mt-auto w-full">
                                <Link to="/reserver" className="block text-center w-full py-4 bg-veda-gold group-hover:bg-white text-veda-dark font-bold tracking-widest uppercase transition-colors duration-300 rounded-full text-sm shadow-lg">
                                    Réserver ma place
                                </Link>
                                <p className="text-xs text-veda-gold/80 mt-4 font-light leading-relaxed">
                                    <span className="font-medium text-white">Acompte de 500€</span> par virement.<br /> Preuve à envoyer par email pour valider.<br />
                                    Solde à régler 1 mois avant (15 janvier).<br />
                                    <span className="italic">Annulation: Remboursement si remplacement possible.</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
