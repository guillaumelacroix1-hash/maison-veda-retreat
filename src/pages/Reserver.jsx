import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

export default function Reserver() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        housingType: 'Single',
        minivanTour: false,
        message: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        // Endpoint Formspree pour lamaisonveda@gmail.com
        const formspreeEndpoint = 'https://formspree.io/f/xzdkboow' 

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setIsSubmitted(true)
            } else {
                // If the user hasn't replaced the Formspree ID, it will fail, we can show a mock success for demonstration
                // or tell them there was an error. For the demo, if it fails because of invalid ID, let's just simulate success:
                if (formspreeEndpoint.includes('VOTRE_ID_FORMSPREE')) {
                    setIsSubmitted(true);
                    console.log("Demo mode: form submitted successfully");
                } else {
                    setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.")
                }
            }
        } catch (err) {
            // Demo fallback if fetch fails completely (CORS/Network)
            if (formspreeEndpoint.includes('VOTRE_ID_FORMSPREE')) {
                setIsSubmitted(true);
            } else {
                setError("Erreur de connexion. Veuillez vérifier votre réseau.")
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-veda-dark font-sans text-veda-light flex flex-col">
            {/* Simple Navbar */}
            <nav className="w-full z-50 bg-veda-dark/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center w-auto">
                        <Logo className="h-8 md:h-10 w-auto text-veda-gold drop-shadow-sm transition-transform duration-500 hover:scale-105" fill="currentColor" />
                    </Link>
                    <Link to="/" className="flex items-center gap-2 text-sm font-medium hover:text-veda-gold transition-colors duration-300">
                        <ArrowLeft className="w-4 h-4" />
                        Retour à l'accueil
                    </Link>
                </div>
            </nav>

            <main className="flex-grow flex items-center justify-center px-4 py-12 md:py-24 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-veda-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-veda-light/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative z-10">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-center mb-10">
                                    <h1 className="text-4xl md:text-5xl font-heading mb-4">Réserver votre <span className="italic text-veda-gold">Retraite</span></h1>
                                    <p className="text-veda-light/70 font-light text-sm md:text-base">
                                        Remplissez le formulaire ci-dessous pour effectuer votre demande de réservation. Nous vous recontacterons très vite avec les détails pour finaliser votre inscription.
                                    </p>
                                </div>

                                {error && (
                                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 text-red-200 text-sm rounded-xl text-center">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="block text-xs font-semibold tracking-widest uppercase text-veda-light/80">Prénom *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full bg-veda-dark/50 border border-white/10 rounded-xl px-4 py-3 text-veda-light focus:outline-none focus:border-veda-gold/50 focus:ring-1 focus:ring-veda-gold/50 transition-all font-light placeholder-white/30"
                                                placeholder="Votre prénom"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="block text-xs font-semibold tracking-widest uppercase text-veda-light/80">Nom *</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full bg-veda-dark/50 border border-white/10 rounded-xl px-4 py-3 text-veda-light focus:outline-none focus:border-veda-gold/50 focus:ring-1 focus:ring-veda-gold/50 transition-all font-light placeholder-white/30"
                                                placeholder="Votre nom"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase text-veda-light/80">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-veda-dark/50 border border-white/10 rounded-xl px-4 py-3 text-veda-light focus:outline-none focus:border-veda-gold/50 focus:ring-1 focus:ring-veda-gold/50 transition-all font-light placeholder-white/30"
                                                placeholder="votre@email.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="block text-xs font-semibold tracking-widest uppercase text-veda-light/80">Téléphone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-veda-dark/50 border border-white/10 rounded-xl px-4 py-3 text-veda-light focus:outline-none focus:border-veda-gold/50 focus:ring-1 focus:ring-veda-gold/50 transition-all font-light placeholder-white/30"
                                                placeholder="Optionnel"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="housingType" className="block text-xs font-semibold tracking-widest uppercase text-veda-light/80">Type d'hébergement *</label>
                                        <select
                                            id="housingType"
                                            name="housingType"
                                            required
                                            value={formData.housingType}
                                            onChange={handleChange}
                                            className="w-full bg-veda-dark/50 border border-white/10 rounded-xl px-4 py-3 text-veda-light focus:outline-none focus:border-veda-gold/50 focus:ring-1 focus:ring-veda-gold/50 transition-all font-light appearance-none lowercase text-veda-light/90"
                                        >
                                            <option value="Single" className="bg-veda-dark text-veda-light">Single</option>
                                            <option value="Partagé" className="bg-veda-dark text-veda-light">Partagé</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <input
                                            type="checkbox"
                                            id="minivanTour"
                                            name="minivanTour"
                                            checked={formData.minivanTour}
                                            onChange={handleChange}
                                            className="w-5 h-5 rounded border-white/10 bg-veda-dark/50 text-veda-gold focus:ring-veda-gold/50 cursor-pointer accent-veda-gold"
                                        />
                                        <label htmlFor="minivanTour" className="text-sm font-light text-veda-light/90 cursor-pointer select-none">
                                            Je suis intéressé.e par l'excursion en minivane
                                        </label>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-veda-light/80">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-veda-dark/50 border border-white/10 rounded-xl px-4 py-3 text-veda-light focus:outline-none focus:border-veda-gold/50 focus:ring-1 focus:ring-veda-gold/50 transition-all font-light resize-none placeholder-white/30"
                                            placeholder="Avez-vous des questions, ou des particularités (allergies, santé) dont nous devrions être informés ?"
                                        ></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-veda-gold text-veda-dark font-bold tracking-widest uppercase py-4 rounded-xl hover:bg-white transition-colors duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-veda-dark border-r-transparent rounded-full animate-spin"></div>
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                "Envoyer ma demande"
                                            )}
                                        </button>
                                        <p className="text-center mt-4 text-xs font-light text-veda-light/50">
                                            Aucun paiement n'est requis à cette étape.
                                        </p>
                                    </div>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="text-center py-10 flex flex-col items-center"
                            >
                                <div className="w-20 h-20 bg-veda-gold/10 rounded-full flex items-center justify-center mb-6 text-veda-gold">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-heading mb-4">Merci, {formData.firstName} !</h2>
                                <p className="text-veda-light/70 font-light mb-10 max-w-md mx-auto">
                                    Votre demande de réservation a bien été envoyée. Nous avons hâte de vous compter parmi nous et nous vous contacterons très prochainement pour valider votre inscription.
                                </p>
                                <Link to="/" className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-colors">
                                    Retour à l'accueil
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
            
            <Footer />
        </div>
    )
}
