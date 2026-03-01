import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: "Billet d’avion",
        answer: "Tarifs à partir de 600 €\nPrivilégiez leș vols de nuit, les vols les plus courts avoisinent les 10h, notamment le vol direct paris colombo avec Sri Lankan Airline !"
    },
    {
        question: "Transfert aéroport",
        answer: "Tarifs des Taxis à partir de 50€\n(vous pourrez mutualiser les transports via le groupe what’s app, où tous les participant partageront leur date et heure d’arrivée à l’aéroport de Colombo)"
    },
    {
        question: "Adresse de l’hotel",
        answer: "La maison VEDA, Duwamalalagama, Habaraduwa 80630, Sri Lanka"
    },
    {
        question: "Déplacements sur place",
        answer: "En tuk-tuk ou taxi & mini-van selon les distances\nComptez 200 roupies LKR le km, (soit 0,60€), quand vous prenez un tuktuk, ils ont tendance à gonfler les tarifs pour les touristes…"
    },
    {
        question: "Formalités (Passeport, Visa, Vaccins)",
        answer: "- Passeport : Vérifiez que votre passeport soit valide pour au moins 6 mois à compter de la date d’arrivée.\n- Visa : Faire votre demande d’ETA sur le site www.eta.gov.lk 1 mois avant le départ, obtention en 24h si tout va bien (Tarif : 50$).\n- Vaccins : Le vaccin anti-covid n’est plus obligatoire."
    },
    {
        question: "Climat & tenue",
        answer: "Le climat est chaud et humide (plus de 30° en haute saison). Prévoyez des vêtements légers, amples et confortables, chapeau, maillot de bain, lunettes de soleil, robes longues/courtes, et un châle pour protéger vos épaules lors des visites de temple.\nPour le yoga Kundalini, la tenue blanche n’est pas obligatoire, mais il y aura une séance de « Venus Kriya » qui se pratique en blanc selon la tradition. Ce serait super si tout le monde jouait le jeu !"
    },
    {
        question: "Trousse de toilette et pharmacie",
        answer: "Apportez vos crèmes solaires, anti-moustiques et bouchons d'oreilles (type cire) de bonne qualité. Prévoyez une trousse classique (anti-diarrhéiques, paracétamol, etc.) et vos protections menstruelles (les serviettes/tampons locaux sont de qualité variable).\nUne crème à base de cortisone peut être utile en cas de réactions aux piqûres de moustiques."
    },
    {
        question: "Monnaie & Retraits",
        answer: "Taux de change moyen : 1€ = 360 roupies LKR.\nVous pourrez retirer des roupies aux distributeurs ATM avec une carte Visa/CB. Il est conseillé de retirer environ 150€ à votre arrivée à l’aéroport (soit env. 50 000 roupies). Le distributeur le plus proche sur place sera à 10 min en tuk-tuk. Vérifiez les conditions de retrait avec votre banque avant de partir."
    },
    {
        question: "Téléphone & Internet",
        answer: "Si vous souhaitez disposer de votre téléphone 24/7, achetez une carte SIM à l’aéroport (privilégiez Dialog ou SLT). L'hôtel dispose du wifi."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="py-24 md:py-32 px-6 bg-white text-veda-dark relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase"
                    >
                        Recommandations
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading"
                    >
                        Préparer <span className="italic text-veda-gold">son voyage</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-veda-gold bg-[#fdfbf7]' : 'border-gray-200'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                >
                                    <span className="font-heading text-lg md:text-xl text-veda-dark pr-8">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-veda-gold transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-veda-dark/70 font-light text-sm md:text-base whitespace-pre-line leading-relaxed border-t border-veda-gold/10 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
