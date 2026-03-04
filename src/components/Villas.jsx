import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const lakeHouseImages = [
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_1126-scaled.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_1130-768x576.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2025/08/IMG_7315-768x576.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_8743-768x576.jpeg"
];

const lakeLoftImages = [
    "https://www.lamaisonveda.com/wp-content/uploads/2025/09/E3572592-5B73-4E32-9040-A9D6F93F58F2.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2025/09/8038665A-9CEC-47A3-B4AE-68B19D90AE02-scaled.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/4d8dfbcf-78b2-4fdc-a1d3-469b7396969f-768x1152.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/9bd9bd47-bf33-4438-97ca-8ca9c867f2b5-768x1152.jpeg"
];

const jungleBreezeImages = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/702979837.jpg?k=31baa87a2973b7454671af189371c80244e3e0bf50b93db9dd6e4a956c80e3a5&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/702997003.jpg?k=8f5dba45119ef31b3037b28666e4485e929ec07b3e897d4268df9d44eb2ee5a0&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/702996972.jpg?k=9ccb17379d2da69d1e9d17890dc0306ea6935a1647e304c8ad5a14fdaa7f6646&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/702995352.jpg?k=2606e14c0e5dbb8ec3b4ab8542d21a1f3f7bbe07566e61162bbb6c5cefd490c3&o="
];

const ImageSlider = ({ images, initialDelay = 0, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timer;
        const startInterval = () => {
            timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000); // Auto-play every 4 seconds
        };

        const timeout = setTimeout(startInterval, initialDelay);

        return () => {
            clearTimeout(timeout);
            if (timer) clearInterval(timer);
        };
    }, [images.length, initialDelay]);

    return (
        <div className="w-full">
            <div
                className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 group cursor-zoom-in"
                onClick={() => onImageClick(images[currentIndex])}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        alt="Villa"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-4 pt-3 px-3 scrollbar-hide">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`relative w-20 h-16 sm:w-24 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${currentIndex === idx ? 'ring-2 ring-veda-gold ring-offset-2 ring-offset-veda-dark opacity-100 scale-105' : 'opacity-50 hover:opacity-100'
                            }`}
                    >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default function Villas() {
    const [showMoreVillas, setShowMoreVillas] = useState(false)
    const [fullscreenImage, setFullscreenImage] = useState(null)

    return (
        <section className="py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase"
                        >
                            Votre Hébergement
                        </motion.h3>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-heading leading-tight"
                        >
                            Les Villas <span className="italic text-veda-gold">Maison Veda</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-veda-light/80 font-light max-w-lg lg:max-w-2xl space-y-4 text-sm sm:text-base leading-relaxed"
                    >
                        <p>
                            A seulement 2h15 de l’aéroport de Colombo, au bord du mythique lac de Koggala, niché au coeur de la jungle, la maison VEDA est à proximité des plus belles plages de surf du sud du Sri-Lanka, ‘Kabalana Beach’, Habaraduwa, Unaatuna…
                        </p>
                        <AnimatePresence>
                            {showMoreVillas && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden space-y-4"
                                >
                                    <p>Levés de soleil sur le lac à couper le souffle, faune et flore luxuriante, à 5 mn en tuktuk de la plage ! Un lieu propice à la pratique du yoga et de la méditation, dédié à la détente et au lâcher-prise.</p>
                                    <p>La maison VEDA se compose de 2 villas aux identités complémentaires :</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Une petite maison authentique et traditionnelle sri-lankaise ‘Lake house’, aux murs en terre et frises en bois, juste au bord du lac, en parfaite harmonie avec son environnement naturel.</li>
                                        <li>Et une seconde villa plus contemporaine, pensée comme un loft, mêlant modernité et tradition.</li>
                                    </ul>
                                    <p>Le yoga shala est perché au dernier étage de la villa ‘Lake Loft’ avec sa vue imprenable sur le lac et la jungle !</p>
                                    <p>Une équipe Sri-Lankais est à nos petits soins pour le service restauration et le service en chambre, vous serez frappé(e)s par la gentillesse et la générosité des Sri-lankais, c’est un fait marquant pour chaque voyageur.</p>
                                    <p>Selon la taille du groupe, nous mettons a disposition 3 villas supplémentaires connectées a La maison VEDA ou très proche á 2 minute â pied :</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Les Chalets en bois Tothpola et la piscine</li>
                                        <li>La Villa Jungle Breeze.</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <button
                            onClick={() => setShowMoreVillas(!showMoreVillas)}
                            className="text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors mt-2"
                        >
                            {showMoreVillas ? '- Lire moins' : '+ En savoir plus'}
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">

                    {/* Lake House */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <ImageSlider images={lakeHouseImages} initialDelay={0} onImageClick={setFullscreenImage} />
                        <div className="mt-6">
                            <h4 className="text-3xl font-heading mb-2 hover:text-veda-gold transition-colors cursor-pointer">La 'Lake House'</h4>
                            <p className="text-veda-light/70 font-light text-sm line-clamp-2">
                                Une petite maison authentique et traditionnelle sri-lankaise, aux murs en terre et frises en bois, juste au bord du lac.
                            </p>
                        </div>
                    </motion.div>

                    {/* Lake Loft */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:mt-24"
                    >
                        <ImageSlider images={lakeLoftImages} initialDelay={2000} onImageClick={setFullscreenImage} />
                        <div className="mt-6">
                            <h4 className="text-3xl font-heading mb-2 hover:text-veda-gold transition-colors cursor-pointer">Le 'Lake Loft'</h4>
                            <p className="text-veda-light/70 font-light text-sm line-clamp-2">
                                Une villa plus contemporaine, avec son yoga shala perché au dernier étage offrant une vue imprenable sur le lac !
                            </p>
                        </div>
                    </motion.div>

                    {/* Jungle Breeze */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-2 lg:max-w-xl xl:max-w-2xl lg:mx-auto lg:mt-8 w-full"
                    >
                        <ImageSlider images={jungleBreezeImages} initialDelay={4000} onImageClick={setFullscreenImage} />
                        <div className="mt-6 text-center lg:text-left">
                            <h4 className="text-3xl font-heading mb-2 hover:text-veda-gold transition-colors cursor-pointer">La Villa 'Jungle Breeze'</h4>
                            <p className="text-veda-light/70 font-light text-sm line-clamp-2">
                                Nichée au coeur de la verdure, cette villa offre une parenthèse apaisante, idéale pour se ressourcer en toute tranquillité.
                            </p>
                        </div>
                    </motion.div>

                </div>

            </div>

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
                {fullscreenImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setFullscreenImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setFullscreenImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={fullscreenImage}
                            alt="Fullscreen Villa"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-zoom-out"
                            onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing the modal
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
