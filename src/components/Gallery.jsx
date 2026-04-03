import React, { useState } from 'react';

const getImageUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}?v=2`;

const surPlaceImages = [
    getImageUrl("/images/carousels/sur place/58e443fd-7a8a-4171-8043-d62d5425e848.jpg"),
    getImageUrl("/images/carousels/sur place/7691518e-d834-41c2-b243-3edbf97e7229.jpg"),
    getImageUrl("/images/carousels/sur place/BB32CCC1-6A37-48F5-BC9D-D2D696669524.jpg"),
    getImageUrl("/images/carousels/sur place/IMG_1289.JPG"),
    getImageUrl("/images/carousels/sur place/IMG_1300.JPG"),
    getImageUrl("/images/carousels/sur place/IMG_1312.JPG"),
    getImageUrl("/images/carousels/sur place/IMG_1712.JPEG"),
    getImageUrl("/images/carousels/sur place/IMG_9658.JPEG"),
    getImageUrl("/images/carousels/sur place/IMG_9905.JPG")
];

import visitImageNames from '../../public/visites/gallery-images.json';

const visitImages = visitImageNames.map(name => getImageUrl(`/visites/${name}`));

const allImages = [...surPlaceImages, ...visitImages];
const INITIAL_COUNT = 20;

const Gallery = () => {
    const [showAll, setShowAll] = useState(false);
    const [lightboxImage, setLightboxImage] = useState(null);

    const displayedImages = showAll ? allImages : allImages.slice(0, INITIAL_COUNT);

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        const currentIndex = allImages.indexOf(lightboxImage);
        if (currentIndex !== -1) {
            setLightboxImage(allImages[(currentIndex + 1) % allImages.length]);
        }
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        const currentIndex = allImages.indexOf(lightboxImage);
        if (currentIndex !== -1) {
            setLightboxImage(allImages[(currentIndex - 1 + allImages.length) % allImages.length]);
        }
    };

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxImage) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') setLightboxImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxImage]);

    return (
        <section className="py-24 bg-veda-dark text-veda-light relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-veda-light/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading mb-6 tracking-wide uppercase">
                        Découvrez <span className="text-veda-gold italic tabular-nums">l'Expérience</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                        Plongez dans l'univers de La Maison Veda, entre retraite paisible au bord du lac et découvertes inoubliables au Sri Lanka.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {displayedImages.map((src, index) => {
                        const isLarge = index === 0 || index === 5;
                        const isWide = index === 2 || index === 7;

                        return (
                            <div
                                key={index}
                                onClick={() => setLightboxImage(src)}
                                className={`relative group cursor-pointer overflow-hidden rounded-xl animate-fade-in-up
                                    ${isLarge ? 'md:row-span-2 md:col-span-2' : ''}
                                    ${isWide && !isLarge ? 'md:col-span-2' : ''}
                                `}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="absolute inset-0 bg-veda-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={src}
                                    alt={`Galerie ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* View Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <div className="bg-veda-dark/80 rounded-full p-4 backdrop-blur-sm border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-veda-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Tout voir / Réduire button */}
                {allImages.length > INITIAL_COUNT && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 bg-white/5 text-white/70 hover:bg-veda-gold hover:text-veda-dark border border-white/10 hover:border-veda-gold"
                        >
                            {showAll ? 'Réduire' : `Tout voir (${allImages.length} photos)`}
                        </button>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[100] bg-veda-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-fade-in"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-veda-gold transition-colors z-[101]"
                        onClick={() => setLightboxImage(null)}
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    <button
                        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[101] p-2 hover:bg-white/10 rounded-full"
                        onClick={handlePrev}
                    >
                        <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    <img
                        src={lightboxImage}
                        alt="Enlarged view"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[101] p-2 hover:bg-white/10 rounded-full"
                        onClick={handleNext}
                    >
                        <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Gallery;
