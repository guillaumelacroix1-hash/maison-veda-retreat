import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import VosGuides from './components/VosGuides'
import Programme from './components/Programme'
import Villas from './components/Villas'
import Gallery from './components/Gallery'
import Tarifs from './components/Tarifs'
import FAQ from './components/FAQ'
import Prolonger from './components/Prolonger'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Logo from './components/Logo'

function App() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initialize state on mount

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-veda-dark font-sans text-veda-light">
            {/* Dynamic Navbar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-veda-dark/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3 md:py-4'
                : 'bg-transparent border-b border-transparent py-4 md:py-6'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
                    <div className="flex items-center w-3/4 md:w-auto">
                        <Logo className="h-8 md:h-12 w-auto max-w-full text-veda-gold drop-shadow-sm transition-transform duration-500 hover:scale-105" fill="currentColor" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-center space-x-8 text-sm font-medium tracking-wide">
                            <a href="#programme" className="hover:text-veda-gold transition-colors duration-300">Programme</a>
                            <a href="#guides" className="hover:text-veda-gold transition-colors duration-300">Vos Guides</a>
                            <a href="#hebergement" className="hover:text-veda-gold transition-colors duration-300">Hébergement</a>
                            <a href="#tarifs" className="hover:text-veda-gold transition-colors duration-300">Tarifs</a>
                        </div>
                        <a href="#tarifs" className="flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide text-veda-dark bg-veda-gold rounded-full hover:bg-white transition-colors duration-300 shadow-md hover:shadow-lg">
                            Réserver
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-veda-light hover:text-veda-gold transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-veda-dark border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium tracking-wide">
                        <a href="#programme" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-veda-gold transition-colors duration-300 border-b border-white/5">Programme</a>
                        <a href="#guides" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-veda-gold transition-colors duration-300 border-b border-white/5">Vos Guides</a>
                        <a href="#hebergement" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-veda-gold transition-colors duration-300 border-b border-white/5">Hébergement</a>
                        <a href="#tarifs" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-veda-gold transition-colors duration-300 border-b border-white/5">Tarifs</a>
                        <div className="pt-2 pb-2">
                            <a href="#tarifs" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold tracking-wide text-veda-dark bg-veda-gold rounded-full hover:bg-white transition-colors duration-300 shadow-md">
                                Réserver
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div id="accueil"><Hero /></div>
                <div id="guides"><VosGuides /></div>
                <div id="programme"><Programme /></div>
                <div id="hebergement"><Villas /></div>
                <div id="galerie"><Gallery /></div>
                <div id="tarifs"><Tarifs /></div>
                <div id="faq"><FAQ /></div>
                <div id="prolonger"><Prolonger /></div>
                <FinalCTA />
            </main>

            <Footer />
        </div>
    )
}

export default App
