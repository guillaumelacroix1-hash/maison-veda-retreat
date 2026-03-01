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
                ? 'bg-veda-dark/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-4'
                : 'bg-transparent border-b border-transparent py-6'
                }`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <Logo className="h-12 w-auto text-veda-gold drop-shadow-sm transition-transform duration-500 hover:scale-105" fill="currentColor" />
                    </div>
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
