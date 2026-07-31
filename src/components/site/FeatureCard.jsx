import { motion } from 'framer-motion'

/**
 * Carte à icône, avec photo révélée au survol.
 *
 * Reprend le traitement des cartes de la page retraite 2027, qui fonctionne
 * bien : icône dans un cercle doré, titre, description, et une photo qui monte
 * en fond quand la souris passe, le texte basculant alors en clair.
 *
 * @param {ReactNode} icon
 * @param {string} title
 * @param {string} desc
 * @param {string} [image]  photo révélée au survol
 * @param {string} [badge]
 * @param {number} [delay]  décalage d'apparition, pour une entrée en cascade
 */
export default function FeatureCard({ icon: Icon, title, desc, image, badge, delay = 0, tone = 'light' }) {
    const isLight = tone === 'light'

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay, duration: 0.6 }}
            className={`group relative overflow-hidden rounded-2xl border p-8 transition-shadow duration-500 md:p-10 ${
                isLight
                    ? 'border-veda-gold/10 bg-white shadow-card hover:shadow-card-hover'
                    : 'border-veda-gold/20 bg-white/[0.04] hover:border-veda-gold/50'
            }`}
        >
            {image && (
                <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <img
                        src={image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-full w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-veda-dark/85" />
                </div>
            )}

            <div className="relative z-10 flex h-full flex-col">
                {Icon && (
                    <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-transparent bg-veda-gold/10 transition-colors duration-300 group-hover:border-veda-gold/30">
                        <Icon className="h-6 w-6 text-veda-gold" />
                    </span>
                )}

                <h3 className="mb-3 font-heading text-xl transition-colors duration-300 group-hover:text-white">
                    {title}
                </h3>

                {badge && (
                    <span className="mb-3 self-start rounded-full bg-veda-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-veda-gold transition-colors duration-300 group-hover:bg-veda-gold group-hover:text-veda-dark">
                        {badge}
                    </span>
                )}

                {desc && (
                    <p
                        className={`text-sm font-light leading-relaxed transition-colors duration-300 group-hover:text-veda-light/90 ${
                            isLight ? 'text-veda-dark/70' : 'text-veda-light/70'
                        }`}
                    >
                        {desc}
                    </p>
                )}
            </div>
        </motion.article>
    )
}
