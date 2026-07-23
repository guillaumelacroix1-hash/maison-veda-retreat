import { motion } from 'framer-motion'
import { Sun, Moon, Wind, Heart, Map } from 'lucide-react'

export default function Programme() {
    const items = [
        {
            icon: <Sun className="w-6 h-6 text-veda-gold" />,
            title: "Matinées ressourçantes",
            desc: "Sadhana au lever du soleil face au lac, suivi de cours de yoga Kundalini ou Hatha pour éveiller le corps et l'esprit.",
            image: `${import.meta.env.BASE_URL}new_image/yoga.jpg`
        },
        {
            icon: <Wind className="w-6 h-6 text-veda-gold" />,
            title: "Pratiques profondes",
            desc: "Des pratiques douces et profondes, rythmées par les chants de mantras et la méditation, pour une introspection en pleine conscience.",
            image: `${import.meta.env.BASE_URL}new_image/yoga2.jpg`
        },
        {
            icon: <Moon className="w-6 h-6 text-veda-gold" />,
            title: "Expériences Incluses",
            desc: "Clôturez vos journées avec des expériences immersives : soirée kirtan (cercle de chant avec musiciens), séance de breathwork, cacao cérémonie, bain de gong ou autre soin sonore… et parfois une surprise ! Aurélie teste elle-même chaque pratique avant de vous la faire découvrir.",
            image: `${import.meta.env.BASE_URL}new_image/maison-veda.jpeg`
        },
        {
            icon: <Map className="w-6 h-6 text-veda-gold" />,
            title: "Découverte & Culture",
            desc: "Nagez avec les tortues sur une plage paradisiaque, visitez le refuge et participez à la libération des tortues, découvrez un temple Bouddhiste lors d'une cérémonie puja, et flânez dans les rues de Galle, classée UNESCO.",
            image: `${import.meta.env.BASE_URL}new_image/Stilt-fishermen.jpeg`
        },
        {
            icon: <Heart className="w-6 h-6 text-veda-gold" />,
            title: "Temps libre & Farniente",
            desc: "Un après-midi libre, à vous de choisir : profitez de la plage, d'un cours de surf, d'un cours de cuisine, de la visite d'une usine à thé, ou partez en safari éléphant (organisable sur la journée, en partant tôt le matin).",
            image: `${import.meta.env.BASE_URL}new_image/ahangama-beach-camp-poe-1367x2048.jpeg`
        }
    ]

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
                        L'Expérience
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading leading-tight"
                    >
                        Le Programme de <span className="italic text-veda-gold">Votre Retraite</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-24 h-[1px] bg-veda-gold mx-auto mt-8 origin-left"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-veda-dark/70 font-light mt-8 text-sm sm:text-base leading-relaxed"
                    >
                        Imaginez vos journées rythmées par le yoga Hatha & Kundalini, de vrais moments de repos pour vous ressourcer pleinement, des visites touristiques organisées pour explorer la région, et chaque soir, une expérience transformatrice qui nourrit le corps et l’âme. Et vos temps libres n’appartiennent qu’à vous : si l’envie d’explorer les environs se fait sentir, un tuktuk vous attend pour partir à l’aventure, en groupe ou en solo — libre à vous d’en profiter comme bon vous semble.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                            className="bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-500 border border-veda-gold/10 group relative overflow-hidden"
                        >
                            {/* Hover Background Image */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-veda-dark/85 transition-opacity duration-500" />
                            </div>

                            <div className="relative z-10 w-full h-full flex flex-col">
                                <div className="w-14 h-14 rounded-full bg-veda-gold/10 flex items-center justify-center mb-6 border border-transparent group-hover:border-veda-gold/30 transition-colors">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-heading mb-3 group-hover:text-white transition-colors duration-300">{item.title}</h4>
                                {item.badge && (
                                    <span className="inline-block mb-3 self-start px-3 py-1 bg-veda-gold/20 text-veda-gold rounded-full text-[10px] font-bold tracking-[0.1em] uppercase group-hover:bg-veda-gold group-hover:text-veda-dark transition-colors duration-300">
                                        {item.badge}
                                    </span>
                                )}
                                <p className="text-veda-dark/70 group-hover:text-veda-light/90 leading-relaxed font-light text-sm transition-colors duration-300">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Highlight card for Food */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="bg-veda-dark text-white p-10 rounded-2xl shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-veda-gold rounded-bl-full -mr-16 -mt-16 pointer-events-none opacity-80" />
                        <h4 className="text-xl font-heading mb-3 text-veda-gold">Pension Complète</h4>
                        <p className="text-veda-light/90 leading-relaxed font-light text-sm mb-6">
                            Savourez 3 repas végétariens par jour (petit-déjeuner, lunch et dîner) préparés avec soin par notre équipe srilankaise locale.
                        </p>
                        <span className="inline-block px-4 py-1.5 bg-veda-gold rounded-full text-[10px] font-bold tracking-[0.1em] uppercase text-veda-dark">
                            Inclus
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-2xl mx-auto text-center mt-16 pt-12 border-t border-veda-gold/20"
                >
                    <p className="text-veda-dark/70 font-light text-sm sm:text-base leading-relaxed">
                        On tisse de tels liens, on vit tant d'amour au sein du groupe pendant la retraite, qu'on n'a souvent pas envie de se quitter ! C'est bien souvent la totalité du groupe qui s'inscrit pour poursuivre <span className="italic text-veda-gold">l'aventure à travers le pays</span>, en van ou en bus selon le nombre de participants.
                    </p>
                    <a
                        href="#prolonger"
                        className="inline-block mt-6 text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-veda-dark transition-colors"
                    >
                        + Découvrir le voyage
                    </a>
                </motion.div>

            </div>
        </section>
    )
}
