/* global React */
const { useState, useEffect, useRef } = React;

/* ----------------------------------------------------------
   Icon — wraps lucide UMD. Renders a stable <span> whose
   contents are managed imperatively so React never fights
   lucide's DOM replacement.
---------------------------------------------------------- */
function Icon({ name, className = "w-6 h-6", strokeWidth = 2 }) {
    const ref = useRef(null);
    useEffect(() => {
        if (!ref.current || !window.lucide) return;
        ref.current.innerHTML = "";
        const i = document.createElement("i");
        i.setAttribute("data-lucide", name);
        i.setAttribute("class", className);
        i.setAttribute("stroke-width", strokeWidth);
        ref.current.appendChild(i);
        window.lucide.createIcons({ attrs: { "stroke-width": strokeWidth } });
    }, [name, className, strokeWidth]);
    return <span ref={ref} className="inline-flex items-center justify-center"></span>;
}

/* ----------------------------------------------------------
   Reveal — signature fade-in-up on scroll (whileInView).
---------------------------------------------------------- */
function Reveal({ children, delay = 0, y = 24, className = "", as: Tag = "div" }) {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        // Failsafe 1: if already in (or above) the viewport on mount, show immediately.
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (r.top < vh * 0.92) { setShown(true); return; }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) { setShown(true); io.disconnect(); }
                });
            },
            { threshold: 0.15, rootMargin: "-40px" }
        );
        io.observe(el);
        // Failsafe 2: never let content stay invisible if IO never fires.
        const t = setTimeout(() => setShown(true), 600);
        return () => { io.disconnect(); clearTimeout(t); };
    }, []);
    return (
        <Tag
            ref={ref}
            className={className}
            style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : `translateY(${y}px)`,
                transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
            }}
        >
            {children}
        </Tag>
    );
}

/* ----------------------------------------------------------
   Logo — Sri Yantra mandala + two-line wordmark.
---------------------------------------------------------- */
function Logo({ className = "h-10" }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img src="../../assets/logo-veda-mandala-gold.svg" alt="La Maison Veda" className="h-full w-auto shrink-0" />
            <div className="flex flex-col justify-center leading-none">
                <span className="font-heading text-veda-gold whitespace-nowrap" style={{ fontSize: "1.05em", fontWeight: 500, letterSpacing: "0.08em" }}>
                    LA MAISON VEDA
                </span>
                <span className="font-sans text-veda-light/80 whitespace-nowrap" style={{ fontSize: "0.55em", fontWeight: 300, letterSpacing: "0.32em", marginTop: "5px" }}>
                    LAKE VILLAS &amp; YOGA
                </span>
            </div>
        </div>
    );
}

/* ----------------------------------------------------------
   SectionHeader — eyebrow + heading w/ gold-italic accent +
   animated gold divider. `accent` splits the title.
---------------------------------------------------------- */
function SectionHeader({ eyebrow, title, accent, after, center = true, light = false, divider = false, intro }) {
    return (
        <div className={`${center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-16`}>
            <Reveal as="h3" className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase">
                {eyebrow}
            </Reveal>
            <Reveal as="h2" delay={0.1} className={`text-4xl md:text-6xl font-heading leading-tight ${light ? "text-veda-light" : "text-veda-dark"}`}>
                {title} {accent && <span className="italic text-veda-gold">{accent}</span>} {after}
            </Reveal>
            {divider && (
                <Reveal delay={0.3} className={`${center ? "mx-auto" : ""} mt-8`}>
                    <div className="w-24 h-px bg-veda-gold" />
                </Reveal>
            )}
            {intro && (
                <Reveal delay={0.4} as="p" className={`font-light mt-8 text-sm sm:text-base leading-relaxed ${light ? "text-veda-light/70" : "text-veda-dark/70"}`}>
                    {intro}
                </Reveal>
            )}
        </div>
    );
}

/* ----------------------------------------------------------
   Footer
---------------------------------------------------------- */
function Footer() {
    const links = ["Accueil", "La maison VEDA", "Cours & Formations", "Hébergement"];
    return (
        <footer className="bg-veda-dark text-veda-light py-16 px-6 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div className="space-y-6">
                        <div className="text-2xl font-heading tracking-widest uppercase">
                            La Maison <span className="text-veda-gold italic">Veda</span>
                        </div>
                        <p className="text-veda-light/60 font-light text-sm leading-relaxed">
                            Une invitation à la reconnexion profonde à travers le Hatha et le Kundalini Yoga, au cœur du Sri Lanka.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-veda-gold font-semibold tracking-widest uppercase text-sm">Contact</h4>
                        <ul className="space-y-4 text-sm font-light text-veda-light/70">
                            <li className="flex items-start gap-3"><Icon name="map-pin" className="w-4 h-4 text-veda-gold/70 shrink-0 mt-0.5" /><span>4 rue des Moulins<br />16120 Saint-Simon, France</span></li>
                            <li className="flex items-center gap-3"><Icon name="phone" className="w-4 h-4 text-veda-gold/70 shrink-0" /><span>+33 6 79 09 89 47</span></li>
                            <li className="flex items-center gap-3"><Icon name="mail" className="w-4 h-4 text-veda-gold/70 shrink-0" /><span>lamaisonveda@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-veda-gold font-semibold tracking-widest uppercase text-sm">Liens Utiles</h4>
                        <ul className="space-y-3 text-sm font-light text-veda-light/70">
                            {links.map((l) => <li key={l}><a className="hover:text-veda-gold transition-colors cursor-pointer">{l}</a></li>)}
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-veda-gold font-semibold tracking-widest uppercase text-sm">Suivez-nous</h4>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full border border-veda-light/20 flex items-center justify-center hover:bg-veda-gold hover:border-veda-gold hover:text-white transition-all cursor-pointer"><Icon name="instagram" className="w-4 h-4" /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-veda-light/40 font-light">
                    <p>2027 © La Maison VEDA – Tous droits réservés.</p>
                    <p>Conçu pour une expérience digitale premium.</p>
                </div>
            </div>
        </footer>
    );
}

Object.assign(window, { Icon, Reveal, Logo, SectionHeader, Footer });
