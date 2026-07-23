/* global React, Icon, Reveal, SectionHeader */
const { useState: useStateS } = React;

/* ---------------- Programme ---------------- */
function Programme() {
    const items = [
        { icon: "sun", title: "Matinées ressourçantes", desc: "Sadhana au lever du soleil face au lac, suivi de cours de yoga Kundalini ou Hatha pour éveiller le corps et l'esprit.", image: "../../assets/images/yoga-sunrise.jpg" },
        { icon: "wind", title: "Pratiques profondes", desc: "Yin yoga, yoga nidra, danse du dragon, chants de mantras et méditations pour une introspection profonde.", image: "../../assets/images/yoga-practice.jpg" },
        { icon: "moon", title: "Expériences incluses", desc: "Clôturez vos journées avec des expériences immersives : breathwork, soirée kirtan et cacao cérémonie.", image: "../../assets/images/villa-lake-house.jpeg" },
        { icon: "map", title: "Découverte & culture", desc: "Refuge et libération des tortues, temple bouddhiste et cérémonie puja, et visite de Galle classée UNESCO.", image: "../../assets/images/stilt-fishermen.jpeg" },
        { icon: "heart", title: "Temps libre & farniente", desc: "Après-midi libre : plage, cours de surf, cours de cuisine, usine à thé ou safari d'éléphants.", image: "../../assets/images/beach.jpeg" },
    ];
    return (
        <section className="py-24 md:py-32 px-6 bg-[#fdfbf7] text-veda-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeader eyebrow="L'Expérience" title="Le Programme de" accent="Votre Retraite" divider intro="Durant la retraite, quelques sorties touristiques sont planifiées, mais l'idée est de privilégier le repos et l'introspection entre les cours." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1 + 0.2}>
                            <div className="bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-500 border border-veda-gold/10 group relative overflow-hidden h-full">
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-veda-dark/85" />
                                </div>
                                <div className="relative z-10 flex flex-col">
                                    <div className="w-14 h-14 rounded-full bg-veda-gold/10 flex items-center justify-center mb-6 border border-transparent group-hover:border-veda-gold/30 transition-colors">
                                        <Icon name={item.icon} className="w-6 h-6 text-veda-gold" />
                                    </div>
                                    <h4 className="text-xl font-heading mb-3 group-hover:text-white transition-colors duration-300">{item.title}</h4>
                                    <p className="text-veda-dark/70 group-hover:text-veda-light/90 leading-relaxed font-light text-sm transition-colors duration-300">{item.desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                    <Reveal delay={0.7}>
                        <div className="bg-veda-dark text-white p-10 rounded-2xl shadow-xl relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-veda-gold rounded-bl-full -mr-16 -mt-16 pointer-events-none opacity-80" />
                            <h4 className="text-xl font-heading mb-3 text-veda-gold">Pension Complète</h4>
                            <p className="text-veda-light/90 leading-relaxed font-light text-sm mb-6">Savourez 3 repas végétariens par jour, préparés avec soin par notre équipe srilankaise locale.</p>
                            <span className="inline-block px-4 py-1.5 bg-veda-gold rounded-full text-[10px] font-bold tracking-[0.1em] uppercase text-veda-dark">Inclus</span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ---------------- Villas (carousels) ---------------- */
function VillaCard({ name, accent, desc, images, offsetClass }) {
    const [idx, setIdx] = useStateS(0);
    return (
        <div className={offsetClass}>
            <div className="mb-6">
                <h4 className="text-4xl font-heading mb-2 text-veda-light">{name} <span className="text-veda-gold">{accent}</span></h4>
                <p className="text-veda-light/70 font-light text-sm">{desc}</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 group cursor-zoom-in">
                <img src={images[idx]} alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                    <button key={i} onClick={() => setIdx(i)} className={`relative w-20 h-16 sm:w-24 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${idx === i ? "ring-2 ring-veda-gold ring-offset-2 ring-offset-veda-dark opacity-100 scale-105" : "opacity-50 hover:opacity-100"}`}>
                        <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
}

function Villas() {
    const [more, setMore] = useStateS(false);
    const house = ["../../assets/images/villa-lake-house.jpeg", "../../assets/images/villa-lake-loft.jpeg", "../../assets/images/yoga-practice.jpg"];
    const loft = ["../../assets/images/villa-lake-loft.jpeg", "../../assets/images/villa-lake-house.jpeg", "../../assets/images/yoga-sunrise.jpg"];
    return (
        <section className="py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <Reveal as="h3" className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase">Votre Hébergement</Reveal>
                        <Reveal as="h2" delay={0.1} className="text-4xl md:text-6xl font-heading leading-tight">Les villas de <span className="italic text-veda-gold">La maison VEDA</span></Reveal>
                    </div>
                    <Reveal delay={0.3} className="text-veda-light/80 font-light max-w-lg space-y-4 text-sm sm:text-base leading-relaxed">
                        <p>À seulement 2h15 de l'aéroport de Colombo, au bord du mythique lac de Koggala, niché au cœur de la jungle, à proximité des plus belles plages de surf du sud du Sri Lanka.</p>
                        {more && <p>Levers de soleil à couper le souffle, faune et flore luxuriante, à 5 mn en tuktuk de la plage. Un lieu dédié à la détente et au lâcher-prise.</p>}
                        <button onClick={() => setMore(!more)} className="text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors mt-2">{more ? "- Lire moins" : "+ En savoir plus"}</button>
                    </Reveal>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
                    <Reveal><VillaCard name="La" accent="'Lake House'" desc="Une maison authentique sri-lankaise, aux murs en terre, juste au bord du lac." images={house} offsetClass="" /></Reveal>
                    <Reveal delay={0.2}><VillaCard name="Le" accent="'Lake Loft'" desc="Une villa contemporaine, son yoga shala perché offrant une vue imprenable sur le lac." images={loft} offsetClass="lg:mt-24" /></Reveal>
                </div>
            </div>
        </section>
    );
}

Object.assign(window, { Programme, Villas, VillaCard });
