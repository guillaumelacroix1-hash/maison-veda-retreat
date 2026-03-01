import React, { useState } from 'react';

const galleryImages = [
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_0193.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_0295.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_0292.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_0086.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2024/03/IMG_1535-768x432.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_8743-768x576.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2025/08/IMG_7315-768x576.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_1130-768x576.jpeg"
];

const visitImages = [
    "https://www.lamaisonveda.com/wp-content/uploads/2025/08/Stilt-fishermen.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2024/03/IMG_1494.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/18ed7d26-93bc-48a5-ac0c-1eeb91a182ae.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2026/01/IMG_1126-scaled.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2024/03/IMG_1495.jpeg",
    "https://www.lamaisonveda.com/wp-content/uploads/2024/03/IMG_1490-768x512.jpeg"
];

const Gallery = () => {
    const [selectedTab, setSelectedTab] = useState('sur-place');
    const [lightboxImage, setLightboxImage] = useState(null);

    const currentImages = selectedTab === 'sur-place' ? galleryImages : visitImages;

    return (
        <section id="galerie" className="py-24 bg-veda-dark text-veda-light relative">
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

                {/* Tabs */}
                <div className="flex justify-center mb-12 space-x-4">
                    <button
                        onClick={() => setSelectedTab('sur-place')}
                        className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${selectedTab === 'sur-place'
                                ? 'bg-veda-gold text-veda-dark shadow-lg shadow-veda-gold/20 scale-105'
                                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        Sur Place
                    </button>
                    <button
                        onClick={() => setSelectedTab('visites')}
                        className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${selectedTab === 'visites'
                                ? 'bg-veda-gold text-veda-dark shadow-lg shadow-veda-gold/20 scale-105'
                                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        Visites
                    </button>
                </div>

                {/* Animated Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {currentImages.map((src, index) => {
                        // Create a masonry-like pattern by making some items span rows or columns
                        const isLarge = index === 0 || index === 5;
                        const isWide = index === 2 || index === 7;

                        return (
                            <div
                                key={`${selectedTab}-${index}`}
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
                                    alt={`Galerie ${selectedTab} ${index + 1}`}
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
                    <img
                        src={lightboxImage}
                        alt="Enlarged view"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;
