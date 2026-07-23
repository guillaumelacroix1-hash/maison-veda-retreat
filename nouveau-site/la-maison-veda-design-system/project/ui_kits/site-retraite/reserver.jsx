/* global React, Logo, Icon, Footer */
const { useState: useStateR } = React;

function Reserver({ onBack }) {
    const [submitted, setSubmitted] = useStateR(false);
    const [data, setData] = useStateR({ firstName: "", lastName: "", email: "", phone: "", housingType: "Single", minivan: false, message: "" });
    const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
    const submit = (e) => { e.preventDefault(); setSubmitted(true); };
    const field = "w-full bg-veda-dark/50 border border-white/10 rounded-xl px-4 py-3 text-veda-light focus:outline-none focus:border-veda-gold/50 focus:ring-1 focus:ring-veda-gold/50 transition-all font-light placeholder-white/30";
    const label = "block text-xs font-semibold tracking-widest uppercase text-veda-light/80 mb-2";

    return (
        <div className="min-h-full bg-veda-dark font-sans text-veda-light flex flex-col">
            <nav className="w-full z-50 bg-veda-dark/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
                    <a onClick={onBack} className="cursor-pointer"><Logo className="h-8 md:h-10" /></a>
                    <a onClick={onBack} className="flex items-center gap-2 text-sm font-medium hover:text-veda-gold transition-colors cursor-pointer"><Icon name="arrow-left" className="w-4 h-4" />Retour à l'accueil</a>
                </div>
            </nav>
            <main className="flex-grow flex items-center justify-center px-4 py-12 md:py-24 relative overflow-hidden">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-veda-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-veda-light/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative z-10">
                    {!submitted ? (
                        <div>
                            <div className="text-center mb-10">
                                <h1 className="text-4xl md:text-5xl font-heading mb-4">Réserver votre <span className="italic text-veda-gold">Retraite</span></h1>
                                <p className="text-veda-light/70 font-light text-sm md:text-base">Remplissez le formulaire ci-dessous. Nous vous recontacterons très vite pour finaliser votre inscription.</p>
                            </div>
                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div><label className={label}>Prénom *</label><input required value={data.firstName} onChange={set("firstName")} className={field} placeholder="Votre prénom" /></div>
                                    <div><label className={label}>Nom *</label><input required value={data.lastName} onChange={set("lastName")} className={field} placeholder="Votre nom" /></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div><label className={label}>Email *</label><input required type="email" value={data.email} onChange={set("email")} className={field} placeholder="votre@email.com" /></div>
                                    <div><label className={label}>Téléphone</label><input value={data.phone} onChange={set("phone")} className={field} placeholder="Optionnel" /></div>
                                </div>
                                <div><label className={label}>Type d'hébergement *</label>
                                    <select value={data.housingType} onChange={set("housingType")} className={`${field} appearance-none`}>
                                        <option className="bg-veda-dark">Single</option>
                                        <option className="bg-veda-dark">Partagé</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-3 pt-2">
                                    <input type="checkbox" checked={data.minivan} onChange={set("minivan")} className="w-5 h-5 rounded bg-veda-dark/50 accent-veda-gold cursor-pointer" id="mv" />
                                    <label htmlFor="mv" className="text-sm font-light text-veda-light/90 cursor-pointer select-none">Je suis intéressé.e par l'excursion en minivan</label>
                                </div>
                                <div><label className={label}>Message *</label><textarea required rows="4" value={data.message} onChange={set("message")} className={`${field} resize-none`} placeholder="Avez-vous des questions ou des particularités (allergies, santé) ?"></textarea></div>
                                <div className="pt-4">
                                    <button type="submit" className="w-full bg-veda-gold text-veda-dark font-bold tracking-widest uppercase py-4 rounded-xl hover:bg-white transition-colors duration-300 shadow-md">Envoyer ma demande</button>
                                    <p className="text-center mt-4 text-xs font-light text-veda-light/50">Aucun paiement n'est requis à cette étape.</p>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="text-center py-10 flex flex-col items-center">
                            <div className="w-20 h-20 bg-veda-gold/10 rounded-full flex items-center justify-center mb-6 text-veda-gold"><Icon name="check-circle-2" className="w-10 h-10 text-veda-gold" /></div>
                            <h2 className="text-3xl md:text-4xl font-heading mb-4">Merci, {data.firstName || "à bientôt"} !</h2>
                            <p className="text-veda-light/70 font-light mb-10 max-w-md mx-auto">Votre demande de réservation a bien été envoyée. Nous vous contacterons très prochainement pour valider votre inscription.</p>
                            <button onClick={onBack} className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-colors">Retour à l'accueil</button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

Object.assign(window, { Reserver });
