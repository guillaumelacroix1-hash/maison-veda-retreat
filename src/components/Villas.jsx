import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const getImageUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}?v=2`;

const lakeHouseImages = [
    getImageUrl("/images/carousels/maison-veda/lake-house/17134a43-830c-4499-bba1-31e71e48208f.jpg"),
    getImageUrl("/images/carousels/maison-veda/lake-house/4d8dfbcf-78b2-4fdc-a1d3-469b7396969f.jpg"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_0343.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_0345.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_0346.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_1126.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_1129.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_1130.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_1414.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_1418.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_1419.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_7310.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_7315.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_9684.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_9689.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_9690.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_9691.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_9700.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-house/IMG_9772.JPEG"),
];

const lakeLoftImages = [
    getImageUrl("/images/carousels/maison-veda/lake-loft/a8062efe-d3a3-4cb4-a603-925dae2c1ab0.jpg"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_0250.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_0251.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_1340.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_1341.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_1352.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_1357.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_1434.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_1454.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_1459.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_1462.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9725.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9732.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9766.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9770.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9825.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9833.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9837.JPEG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9895.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9896.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9897.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9898.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9899.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9902.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9903.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9909.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9910.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9913.JPG"),
    getImageUrl("/images/carousels/maison-veda/lake-loft/IMG_9914.JPG"),
];

const jungleBreezeImages = [
    getImageUrl("/images/carousels/jungle-breeze/IMG_2091.JPG"),
    getImageUrl("/images/carousels/jungle-breeze/IMG_2096.JPG"),
    getImageUrl("/images/carousels/jungle-breeze/IMG_2125.JPG"),
    getImageUrl("/images/carousels/jungle-breeze/IMG_2127.JPG"),
    getImageUrl("/images/carousels/jungle-breeze/IMG_2128.JPG"),
    getImageUrl("/images/carousels/jungle-breeze/IMG_2129.JPG"),
    getImageUrl("/images/carousels/jungle-breeze/IMG_2130.JPG"),
    getImageUrl("/images/carousels/jungle-breeze/IMG_2131.JPG"),
    getImageUrl("/images/carousels/jungle-breeze/IMG_2132.JPG"),
    getImageUrl("/images/carousels/jungle-breeze/IMG_2133.JPG"),
    getImageUrl("/images/carousels/jungle-breeze/IMG_2134.JPG"),
];

const tothupolaImages = [
    getImageUrl("/images/carousels/tothupola/IMG_1491.JPG"),
    getImageUrl("/images/carousels/tothupola/IMG_1493.JPG"),
    getImageUrl("/images/carousels/tothupola/IMG_1497.JPG"),
    getImageUrl("/images/carousels/tothupola/IMG_1499.JPG"),
    getImageUrl("/images/carousels/tothupola/IMG_1502.JPG"),
    getImageUrl("/images/carousels/tothupola/IMG_1510.JPG"),
    getImageUrl("/images/carousels/tothupola/IMG_1516.JPG"),
    getImageUrl("/images/carousels/tothupola/IMG_1529.JPG"),
    getImageUrl("/images/carousels/tothupola/IMG_1531.JPG"),
    getImageUrl("/images/carousels/tothupola/IMG_1535.JPG"),
    getImageUrl("/images/carousels/tothupola/IMG_1537.JPG"),
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
                onClick={() => onImageClick(images[currentIndex], currentIndex)}
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
    const [fullscreenData, setFullscreenData] = useState(null)

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        if (fullscreenData) {
            const nextIndex = (fullscreenData.index + 1) % fullscreenData.images.length;
            setFullscreenData({
                url: fullscreenData.images[nextIndex],
                images: fullscreenData.images,
                index: nextIndex
            });
        }
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        if (fullscreenData) {
            const prevIndex = (fullscreenData.index - 1 + fullscreenData.images.length) % fullscreenData.images.length;
            setFullscreenData({
                url: fullscreenData.images[prevIndex],
                images: fullscreenData.images,
                index: prevIndex
            });
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!fullscreenData) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') setFullscreenData(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [fullscreenData]);

    const handleImageClick = (url, images, index) => {
        setFullscreenData({ url, images, index });
    };

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
                        <ImageSlider images={lakeHouseImages} initialDelay={0} onImageClick={(url, idx) => handleImageClick(url, lakeHouseImages, idx)} />
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
                        <ImageSlider images={lakeLoftImages} initialDelay={2000} onImageClick={(url, idx) => handleImageClick(url, lakeLoftImages, idx)} />
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
                    >
                        <ImageSlider images={jungleBreezeImages} initialDelay={4000} onImageClick={(url, idx) => handleImageClick(url, jungleBreezeImages, idx)} />
                        <div className="mt-6 text-left">
                            <h4 className="text-3xl font-heading mb-2 hover:text-veda-gold transition-colors cursor-pointer">La Villa 'Jungle Breeze'</h4>
                            <p className="text-veda-light/70 font-light text-sm line-clamp-2">
                                Nichée au coeur de la verdure, cette villa offre une parenthèse apaisante, idéale pour se ressourcer en toute tranquillité.
                            </p>
                        </div>
                    </motion.div>
                    
                    {/* Tothupola */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="lg:mt-24"
                    >
                        <ImageSlider images={tothupolaImages} initialDelay={6000} onImageClick={(url, idx) => handleImageClick(url, tothupolaImages, idx)} />
                        <div className="mt-6 text-left">
                            <h4 className="text-3xl font-heading mb-2 hover:text-veda-gold transition-colors cursor-pointer">Les Chalets 'Tothpola'</h4>
                            <p className="text-veda-light/70 font-light text-sm line-clamp-2">
                                De magnifiques chalets en bois avec piscine, offrant un havre de paix pittoresque en pleine nature sri-lankaise.
                            </p>
                        </div>
                    </motion.div>

                </div>

            </div>

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
                {fullscreenData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setFullscreenData(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[60]"
                            onClick={() => setFullscreenData(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[60] p-2 hover:bg-white/10 rounded-full"
                            onClick={handlePrev}
                        >
                            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        <motion.img
                            key={fullscreenData.url}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={fullscreenData.url}
                            alt="Fullscreen Villa"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-zoom-out"
                            onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing the modal
                        />

                        <button
                            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[60] p-2 hover:bg-white/10 rounded-full"
                            onClick={handleNext}
                        >
                            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
