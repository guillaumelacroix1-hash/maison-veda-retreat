import { motion } from 'framer-motion'
import { Calendar, Check, Plane } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { retreatContent } from '../data/retreat2027'

export default function Tarifs() {
    const { path, lang } = useI18n()
    const c = retreatContent(lang).tarifs
    const bookPath = path('book', { slug: 'sri-lanka-2027' })

    /** Conditions de paiement, identiques sur les deux formules. */
    const terms = (tone) => (
        <p className={`text-xs mt-4 font-light leading-relaxed ${tone}`}>
            <span className="font-medium">{c.depositLabel}</span>{' '}
            <span className="whitespace-pre-line">{c.depositTerms}</span>
            <br />
            <span className="italic">{c.cancellation}</span>
        </p>
    )

    return (
        <section className="py-24 md:py-32 px-6 bg-[#fdfbf7] text-veda-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase"
                    >
                        {c.eyebrow}
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading leading-tight mb-8"
                    >
                        {c.title} <span className="italic text-veda-gold">{c.titleAccent}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-veda-dark/70 font-light max-w-2xl mx-auto"
                    >
                        {c.intro}
                    </motion.p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-16">

                    {/* Info Section - Centered Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-veda-gold/10 text-center flex flex-col items-center transform transition-transform duration-500 hover:-translate-y-2">
                            <div className="p-4 bg-veda-gold/5 rounded-full text-veda-gold mb-6 inline-flex">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-heading mb-3">{c.datesTitle}</h4>
                            <p className="font-medium text-veda-dark mb-2">{c.datesValue}</p>
                            <p className="text-sm text-veda-dark/60 whitespace-pre-line">{c.datesDetail}</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-veda-gold/10 text-center flex flex-col items-center transform transition-transform duration-500 hover:-translate-y-2">
                            <div className="p-4 bg-veda-gold/5 rounded-full text-veda-gold mb-6 inline-flex">
                                <Plane className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-heading mb-3">{c.transportTitle}</h4>
                            <p className="text-sm text-veda-dark/70 leading-relaxed">
                                {c.transportDesc}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-veda-gold/10 text-center flex flex-col items-center md:col-span-2 lg:col-span-1 transform transition-transform duration-500 hover:-translate-y-2">
                            <div className="p-4 bg-veda-gold/5 rounded-full text-veda-gold mb-6 inline-flex">
                                <Check className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-heading mb-4">{c.includedTitle}</h4>
                            <ul className="space-y-2 text-sm text-veda-dark/80 inline-block text-left">
                                {c.included.map((item, i) => (
                                    <li key={i} className="flex items-start justify-center gap-2">
                                        <Check className="w-4 h-4 text-veda-gold shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Pricing Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl pt-8 border-t border-veda-gold/20"
                    >
                        <div className="bg-white border border-veda-gold/20 rounded-[2.5rem] p-10 relative shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group">
                            <div className="absolute -top-4 bg-veda-dark text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase py-2 px-6 rounded-full shadow-md">
                                {c.sharedBadge}
                            </div>

                            <h4 className="text-3xl font-heading mb-3 mt-4">{c.sharedTitle}</h4>
                            <p className="text-sm text-veda-dark/60 mb-10 font-light">{c.sharedDesc}</p>

                            <div className="flex items-baseline gap-2 mb-10 justify-center">
                                <span className="text-6xl font-heading text-veda-gold">1<span className="tracking-tight">280</span></span>
                                <span className="text-2xl font-medium">€</span>
                            </div>

                            <div className="mt-auto w-full">
                                <Link to={bookPath} className="block text-center w-full py-4 bg-veda-dark group-hover:bg-black text-veda-light font-medium tracking-widest uppercase transition-colors duration-300 rounded-full text-sm shadow-md">
                                    {c.cta}
                                </Link>
                                {terms('text-veda-dark/60')}
                            </div>
                        </div>

                        <div className="bg-veda-dark text-white rounded-[2.5rem] p-10 relative shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 border border-veda-gold/20 flex flex-col items-center text-center group">
                            <div className="absolute -top-4 bg-veda-gold text-veda-dark text-[10px] sm:text-xs font-bold tracking-widest uppercase py-2 px-6 rounded-full shadow-md">
                                {c.singleBadge}
                            </div>

                            <h4 className="text-3xl font-heading mb-3 mt-4 text-veda-gold">{c.singleTitle}</h4>
                            <p className="text-sm text-veda-light/60 mb-10 font-light">{c.singleDesc}</p>

                            <div className="flex items-baseline gap-2 mb-10 justify-center">
                                <span className="text-6xl font-heading text-white">1<span className="tracking-tight">480</span></span>
                                <span className="text-2xl font-medium text-veda-gold">€</span>
                            </div>

                            <div className="mt-auto w-full">
                                <Link to={bookPath} className="block text-center w-full py-4 bg-veda-gold group-hover:bg-white text-veda-dark font-bold tracking-widest uppercase transition-colors duration-300 rounded-full text-sm shadow-lg">
                                    {c.cta}
                                </Link>
                                {terms('text-veda-gold/80')}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
