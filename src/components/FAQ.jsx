import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useI18n } from '../i18n'
import { retreatContent } from '../data/retreat2027'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)
    const { lang } = useI18n()
    const c = retreatContent(lang).faq
    const faqs = c.items

    return (
        <section className="py-24 md:py-32 px-6 bg-white text-veda-dark relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
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
                        className="text-4xl md:text-5xl font-heading"
                    >
                        {c.title} <span className="italic text-veda-gold">{c.titleAccent}</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-veda-gold bg-[#fdfbf7]' : 'border-gray-200'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                >
                                    <span className="font-heading text-lg md:text-xl text-veda-dark pr-8">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-veda-gold transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-veda-dark/70 font-light text-sm md:text-base whitespace-pre-line leading-relaxed border-t border-veda-gold/10 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
