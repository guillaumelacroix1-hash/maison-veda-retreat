import { motion } from 'framer-motion'
import { Instagram, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-veda-dark text-veda-light py-16 px-6 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="text-2xl font-heading tracking-widest uppercase">
                            La Maison <span className="text-veda-gold italic">Veda</span>
                        </div>
                        <p className="text-veda-light/60 font-light text-sm leading-relaxed">
                            Une invitation à la reconnexion profonde à travers le Hatha et le Kundalini Yoga, au cœur du Sri Lanka.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-veda-gold font-semibold tracking-widest uppercase text-sm">Contact</h4>
                        <ul className="space-y-4 text-sm font-light text-veda-light/70">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-veda-gold/70 shrink-0 mt-0.5" />
                                <span>4 rue des Moulins<br />16120 Saint-Simon,<br />France</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-veda-gold/70 shrink-0" />
                                <span>+33 6 79 09 89 47</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-veda-gold/70 shrink-0" />
                                <a href="mailto:lamaisonveda@gmail.com" className="hover:text-veda-gold transition-colors">
                                    lamaisonveda@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-veda-gold font-semibold tracking-widest uppercase text-sm">Liens Utiles</h4>
                        <ul className="space-y-3 text-sm font-light text-veda-light/70">
                            <li><a href="https://www.lamaisonveda.com/" className="hover:text-veda-gold transition-colors" target="_blank" rel="noreferrer">Accueil</a></li>
                            <li><a href="https://www.lamaisonveda.com/la-maison-veda/" className="hover:text-veda-gold transition-colors" target="_blank" rel="noreferrer">La maison VEDA</a></li>
                            <li><a href="https://www.lamaisonveda.com/yoga-kundalini-le-studio/" className="hover:text-veda-gold transition-colors" target="_blank" rel="noreferrer">Cours & Formations</a></li>
                            <li><a href="https://www.lamaisonveda.com/hebergement/" className="hover:text-veda-gold transition-colors" target="_blank" rel="noreferrer">Hébergement</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h4 className="text-veda-gold font-semibold tracking-widest uppercase text-sm">Suivez-nous</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-veda-light/20 flex items-center justify-center hover:bg-veda-gold hover:border-veda-gold hover:text-white transition-all">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-veda-light/40 font-light">
                    <p>2027 © La Maison VEDA – Tous droits réservés.</p>
                    <p>Conçu pour une expérience digitale premium.</p>
                </div>
            </div>
        </footer>
    )
}
