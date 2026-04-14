import React from 'react';

const getImageUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const Logo = ({ className = "h-14 w-auto animate-fade-in", fill = "currentColor" }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Sri Yantra Icon */}
            <img
                src={getImageUrl('/icon-logo-final/logo-lili-maison-veda.svg')}
                alt="La Maison Veda"
                className="h-full w-auto"
            />

            {/* Typography */}
            <div className="flex flex-col justify-center leading-none">
                <span
                    style={{
                        fontFamily: "'Playfair Display', 'Merriweather', serif",
                        fontSize: '1.35em',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        color: fill === 'currentColor' ? 'inherit' : fill,
                    }}
                >
                    LA MAISON VEDA
                </span>
                <span
                    style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: '0.5em',
                        fontWeight: 300,
                        letterSpacing: '0.35em',
                        color: fill === 'currentColor' ? 'inherit' : fill,
                        opacity: 0.8,
                        marginTop: '4px',
                    }}
                >
                    LAKE VILLAS & YOGA
                </span>
            </div>
        </div>
    );
};

export default Logo;
