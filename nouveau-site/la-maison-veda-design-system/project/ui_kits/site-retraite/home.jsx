/* global React, Logo, Icon, Reveal, SectionHeader, Footer */
const { useState: useStateH, useEffect: useEffectH } = React;

/* ---------------- Navbar ---------------- */
function Navbar({ onReserve }) {
    const [scrolled, setScrolled] = useStateH(false);
    const [menuOpen, setMenuOpen] = useStateH(false);
    useEffectH(() => {
        const scroller = document.getElementById("kit-scroll");
        const onScroll = () => setScrolled((scroller ? scroller.scrollTop : window.scrollY) > 50);
        const target = scroller || window;
        target.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => target.removeEventListener("scroll", onScroll);
    }, []);
    const nav = ["Vos Guides", "Programme", "Hébergement", "Tarifs"];
    return (
        <nav className={`absolute top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-veda-dark/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3 md:py-4" : "bg-transparent border-b border-transparent py-4 md:py-6"}`} style={{ position: "sticky" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
                <a className="block cursor-pointer"><Logo className="h-8 md:h-11" /></a>
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-8 text-sm font-medium tracking-wide text-veda-light">
                        {nav.map((n) => <a key={n} className="hover:text-veda-gold transition-colors duration-300 cursor-pointer">{n}</a>)}
                    </div>
                    <button onClick={onReserve} className="flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide text-veda-dark bg-veda-gold rounded-full hover:bg-white transition-colors duration-300 shadow-md">Réserver</button>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-veda-light hover:text-veda-gold transition-colors">
                    <Icon name={menuOpen ? "x" : "menu"} className="w-6 h-6" />
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-veda-dark border-b border-white/10">
                    <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium tracking-wide text-veda-light">
                        {nav.map((n) => <a key={n} onClick={() => setMenuOpen(false)} className="block py-2 hover:text-veda-gold border-b border-white/5 cursor-pointer">{n}</a>)}
                        <button onClick={onReserve} className="w-full px-4 py-3 text-sm font-semibold tracking-wide text-veda-dark bg-veda-gold rounded-full">Réserver</button>
                    </div>
                </div>
            )}
        </nav>
    );
}

/* ---------------- Hero ---------------- */
function Hero({ onReserve }) {
    return (
        <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-veda-dark -mt-[88px]">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-veda-dark/40 z-10" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-veda-dark to-transparent z-10" />
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-veda-dark/80 to-transparent z-10" />
                <img src="../../assets/images/hero-lake.jpg" alt="Retraite Sri Lanka" className="w-full h-full object-cover object-center" />
            </div>
            <div className="z-20 text-center px-4 max-w-4xl flex flex-col items-center mt-16">
                <span className="px-6 py-1.5 border border-veda-gold/40 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-8 text-veda-light bg-veda-dark/30 backdrop-blur-md">7 au 13 février 2027</span>
                <h1 className="text-6xl sm:text-7xl md:text-[7rem] leading-[1.1] mb-6 font-heading text-veda-light">
                    Retraite<br /><span className="font-heading italic font-light text-veda-gold drop-shadow-lg">Sri Lanka</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-veda-light max-w-2xl mx-auto mb-12 drop-shadow-md">
                    Immersion Hatha &amp; Kundalini au cœur de la jungle, face au lac sacré de Koggala.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <button onClick={onReserve} className="px-10 py-3.5 bg-veda-gold hover:bg-white text-veda-dark text-sm sm:text-base font-semibold tracking-widest uppercase transition-colors duration-300 rounded-full shadow-lg">Réservation</button>
                    <button className="px-10 py-3.5 border border-white/50 text-white hover:border-white hover:bg-white/10 text-sm sm:text-base font-semibold tracking-widest uppercase transition-all duration-300 rounded-full backdrop-blur-sm">Découvrir</button>
                </div>
            </div>
            <div className="absolute bottom-8 z-20 pointer-events-none animate-bounce">
                <Icon name="arrow-down" className="text-white/50 w-6 h-6" />
            </div>
        </div>
    );
}

/* ---------------- Guides (VosGuides) ---------------- */
function Guides() {
    const [moreA, setMoreA] = useStateH(false);
    const [moreN, setMoreN] = useStateH(false);
    return (
        <section className="py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <Reveal>
                        <h3 className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase">Vos Guides</h3>
                        <h2 className="text-5xl md:text-7xl font-heading mb-12 leading-[1.1]">
                            L'union du <span className="italic text-veda-gold">Hatha</span><br />&amp; du <span className="italic text-veda-gold">Kundalini</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2} className="space-y-12">
                        <div className="pl-6 border-l-4 border-veda-gold">
                            <h4 className="text-2xl font-heading mb-4 text-white">Aurélie Dutrey</h4>
                            <div className="text-veda-light/80 leading-relaxed font-light text-sm sm:text-base space-y-3">
                                <p>Aurélie, Radha Navjot kaur est la fondatrice de La maison VEDA, studio de yoga et centre de retraites à St-Simon en Charente et à Habaraduwa dans le sud du Sri Lanka.</p>
                                {moreA && <p>Elle transmet la pratique du yoga Kundalini selon les enseignements de Gurmukh Kaur Khalsa et sera votre professeure de Kundalini &amp; Méditation et coordinatrice sur place.</p>}
                                <button onClick={() => setMoreA(!moreA)} className="text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors mt-2">{moreA ? "- Lire moins" : "+ En savoir plus"}</button>
                            </div>
                        </div>
                        <div className="pl-6 border-l-4 border-veda-gold">
                            <h4 className="text-2xl font-heading mb-4 text-white">Nathalie Catinaud</h4>
                            <div className="text-veda-light/80 leading-relaxed font-light text-sm sm:text-base space-y-3">
                                <p>Originaire de Charente, Nathalie a rencontré le yoga il y a une quinzaine d'années lors d'un long voyage au Canada.</p>
                                {moreN && <p className="italic">« Je remercie chaque jour l'univers de m'avoir guidé sur la voie du yoga. »</p>}
                                <button onClick={() => setMoreN(!moreN)} className="text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors mt-2">{moreN ? "- Lire moins" : "+ En savoir plus"}</button>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="lg:w-1/2 relative w-full">
                    <div className="flex flex-row gap-12 sm:gap-20 justify-center lg:justify-end items-end">
                        {[{ pos: "22% center", off: "translate-x-5 -translate-y-5" }, { pos: "68% center", off: "-translate-x-5 translate-y-5 mt-0" }].map((it, i) => (
                            <Reveal key={i} delay={i * 0.2} className={`w-[60%] sm:w-[48%] relative group ${i === 0 ? "pb-8" : ""}`}>
                                <div className="relative">
                                    <div className={`absolute inset-0 border border-veda-gold/60 -z-10 ${it.off} rounded-xl pointer-events-none hidden sm:block transition-transform duration-700`}></div>
                                    <div className="overflow-hidden rounded-xl bg-veda-dark shadow-2xl relative z-10">
                                        <img src="../../assets/images/guides-aurelie-nathalie.jpeg" alt="Guide" style={{ objectPosition: it.pos }} className="w-full h-auto aspect-[3/4] object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105" />
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

Object.assign(window, { Navbar, Hero, Guides });
