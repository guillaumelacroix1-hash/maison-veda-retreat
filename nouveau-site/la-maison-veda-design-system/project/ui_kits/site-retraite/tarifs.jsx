/* global React, Icon, Reveal, SectionHeader */
const { useState: useStateT } = React;

/* ---------------- Tarifs ---------------- */
function Tarifs({ onReserve }) {
    const included = ["6 nuits d'hébergement", "Pension complète (végétarienne)", "2 à 4 pratiques de yoga / jour", "Expériences (Cacao, Kirtan...)", "Activités durant la retraite"];
    return (
        <section className="py-24 md:py-32 px-6 bg-[#fdfbf7] text-veda-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeader eyebrow="Rejoignez-nous" title="Dates &" accent="Tarifs" intro="Préparez votre voyage vers une immersion totale au cœur du Sri Lanka. Retrouvez ici toutes les informations pratiques et nos formules d'hébergement." />
                <div className="flex flex-col items-center space-y-16">
                    <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                        <InfoCard icon="calendar" title="Dates du séjour"><p className="font-medium mb-2">7 au 13 février 2027</p><p className="text-sm text-veda-dark/60">Arrivée le dimanche à 14h<br />Départ le samedi à 11h</p></InfoCard>
                        <InfoCard icon="plane" title="Transport"><p className="text-sm text-veda-dark/70 leading-relaxed">Vol pour Colombo (décalage +1j). Navette aéroport-hôtel partageable avec le groupe.</p></InfoCard>
                        <InfoCard icon="check" title="Ce qui est inclus">
                            <ul className="space-y-2 text-sm text-veda-dark/80 inline-block text-left">
                                {included.map((it) => <li key={it} className="flex items-start gap-2"><Icon name="check" className="w-4 h-4 text-veda-gold shrink-0 mt-0.5" /><span>{it}</span></li>)}
                            </ul>
                        </InfoCard>
                    </Reveal>
                    <Reveal delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl pt-8 border-t border-veda-gold/20">
                        <PriceCard tier="Standard" dark={false} title="Chambre Partagée" sub="Pour 2, 3 ou 4 personnes. L'idéal pour partager l'expérience." price="1280" onReserve={onReserve} />
                        <PriceCard tier="Premium" dark={true} title="Chambre Single" sub="Profitez de votre espace privé pour un repos total." price="1480" onReserve={onReserve} />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
function InfoCard({ icon, title, children }) {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-veda-gold/10 text-center flex flex-col items-center transition-transform duration-500 hover:-translate-y-2">
            <div className="p-4 bg-veda-gold/5 rounded-full text-veda-gold mb-6 inline-flex"><Icon name={icon} className="w-8 h-8 text-veda-gold" /></div>
            <h4 className="text-xl font-heading mb-3">{title}</h4>
            {children}
        </div>
    );
}
function PriceCard({ tier, dark, title, sub, price, onReserve }) {
    return (
        <div className={`rounded-[2.5rem] p-10 relative flex flex-col items-center text-center group border transition-all duration-500 ${dark ? "bg-veda-dark text-white border-veda-gold/20 shadow-2xl" : "bg-white border-veda-gold/20 shadow-xl hover:shadow-2xl"}`}>
            <div className={`absolute -top-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase py-2 px-6 rounded-full shadow-md ${dark ? "bg-veda-gold text-veda-dark" : "bg-veda-dark text-white"}`}>{tier}</div>
            <h4 className={`text-3xl font-heading mb-3 mt-4 ${dark ? "text-veda-gold" : ""}`}>{title}</h4>
            <p className={`text-sm mb-10 font-light ${dark ? "text-veda-light/60" : "text-veda-dark/60"}`}>{sub}</p>
            <div className="flex items-baseline gap-2 mb-10 justify-center">
                <span className={`text-6xl font-heading ${dark ? "text-white" : "text-veda-gold"}`}>{price}</span>
                <span className={`text-2xl font-medium ${dark ? "text-veda-gold" : ""}`}>€</span>
            </div>
            <button onClick={onReserve} className={`w-full py-4 font-bold tracking-widest uppercase transition-colors duration-300 rounded-full text-sm shadow-md ${dark ? "bg-veda-gold text-veda-dark group-hover:bg-white" : "bg-veda-dark text-veda-light group-hover:bg-black"}`}>Réserver ma place</button>
            <p className={`text-xs mt-4 font-light leading-relaxed ${dark ? "text-veda-gold/80" : "text-veda-dark/60"}`}>Acompte de 500€ par virement.<br /><span className="italic">Solde 1 mois avant le départ.</span></p>
        </div>
    );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
    const faqs = [
        { q: "Billet d'avion", a: "Tarifs à partir de 600 €. Privilégiez les vols de nuit ; le vol direct Paris-Colombo avec Sri Lankan Airlines avoisine les 10h." },
        { q: "Formalités (Passeport, Visa, Vaccins)", a: "Passeport valide 6 mois minimum. Demande d'ETA sur eta.gov.lk 1 mois avant le départ (obtention en 24h, 50$). Le vaccin anti-covid n'est plus obligatoire." },
        { q: "Climat & tenue", a: "Climat chaud et humide (plus de 30°). Prévoyez des vêtements légers, un chapeau, un maillot et un châle pour les visites de temple. Tenue blanche bienvenue pour la séance de Venus Kriya." },
        { q: "Monnaie & retraits", a: "1€ ≈ 360 roupies LKR. Retraits possibles aux distributeurs ATM avec une carte Visa/CB. Retirez environ 150€ à l'arrivée." },
    ];
    const [open, setOpen] = useStateT(0);
    return (
        <section className="py-24 md:py-32 px-6 bg-white text-veda-dark relative">
            <div className="max-w-4xl mx-auto">
                <SectionHeader eyebrow="Recommandations" title="Préparer" accent="son voyage" />
                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = open === i;
                        return (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-veda-gold bg-[#fdfbf7]" : "border-gray-200"}`}>
                                    <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full text-left px-6 py-5 flex items-center justify-between">
                                        <span className="font-heading text-lg md:text-xl pr-8">{faq.q}</span>
                                        <Icon name="chevron-down" className={`w-5 h-5 text-veda-gold transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    {isOpen && <div className="px-6 pb-6 text-veda-dark/70 font-light text-sm md:text-base leading-relaxed border-t border-veda-gold/10 pt-4">{faq.a}</div>}
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ---------------- FinalCTA ---------------- */
function FinalCTA({ onReserve }) {
    return (
        <section className="py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative z-10 overflow-hidden border-t border-white/5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <Reveal className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl group">
                    <img src="../../assets/images/guides-aurelie-nathalie.jpeg" alt="Vos hôtes" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-veda-dark via-transparent to-transparent opacity-80 mix-blend-multiply" />
                    <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 z-10">
                        <h4 className="text-3xl font-heading text-veda-gold drop-shadow-md">Les Filles</h4>
                        <p className="text-white/80 font-light mt-2">Vos hôtes pour cette retraite inoubliable.</p>
                    </div>
                </Reveal>
                <Reveal delay={0.2} className="flex flex-col space-y-8">
                    <div>
                        <h3 className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase">Prêt(e) pour le départ ?</h3>
                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading leading-tight mb-8">Réservez votre <span className="italic text-veda-gold block">Retraite.</span></h2>
                        <p className="text-veda-light/70 font-light leading-relaxed max-w-lg text-lg">Les places sont limitées pour garantir une expérience intimiste et personnalisée. Rejoignez-nous au Sri Lanka pour une parenthèse de bien-être absolu.</p>
                    </div>
                    <div>
                        <button onClick={onReserve} className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest text-veda-dark uppercase bg-veda-gold rounded-full transition-all duration-300 hover:bg-white shadow-lg hover:-translate-y-1">
                            Réserver ma retraite <Icon name="arrow-right" className="w-4 h-4" />
                        </button>
                        <p className="mt-6 text-sm text-veda-light/50 font-light italic">*Acompte de réservation via paiement sécurisé.</p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

Object.assign(window, { Tarifs, FAQ, FinalCTA });
