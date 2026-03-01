import React from 'react';

const Logo = ({ className = "h-14 w-auto animate-fade-in", fill = "currentColor", strokeWidth = "1.5" }) => {
    // Inner petals
    const innerPetals = Array.from({ length: 8 }).map((_, i) => (
        <path
            key={`inner-${i}`}
            d="M50 35 C 55 42, 55 48, 50 50 C 45 48, 45 42, 50 35 Z"
            stroke={fill}
            strokeWidth="0.8"
            fill="none"
            transform={`rotate(${i * 45} 50 50)`}
        />
    ));

    // Outer larger petals
    const outerPetals = Array.from({ length: 16 }).map((_, i) => (
        <path
            key={`outer-${i}`}
            d="M50 18 C 58 35, 60 45, 50 50 C 40 45, 42 35, 50 18 Z"
            stroke={fill}
            strokeWidth="0.6"
            fill="none"
            transform={`rotate(${i * 22.5} 50 50)`}
        />
    ));

    return (
        <svg
            className={className}
            viewBox="0 0 500 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Mandala Icon (Left Aligned) - Reduced scale relative to viewBox */}
            <g transform="translate(10, 10) scale(0.8)">
                <circle cx="50" cy="50" r="45" stroke={fill} strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="40" stroke={fill} strokeWidth="1" fill="none" />
                {outerPetals}
                <circle cx="50" cy="50" r="18" stroke={fill} strokeWidth="0.5" fill="none" strokeDasharray="1 2" />
                {innerPetals}
                <circle cx="50" cy="50" r="4" fill={fill} />
            </g>

            {/* Typography (Right of the Icon) - Increased size */}
            <text
                x="110"
                y="55"
                fontFamily="'Playfair Display', 'Merriweather', serif"
                fontSize="42"
                fontWeight="500"
                letterSpacing="0.08em"
                textAnchor="start"
                fill={fill}
            >
                LA MAISON VEDA
            </text>

            <text
                x="114"
                y="80"
                fontFamily="'Inter', system-ui, sans-serif"
                fontSize="16"
                fontWeight="300"
                letterSpacing="0.4em"
                textAnchor="start"
                fill={fill}
                opacity="0.8"
            >
                RETRAITE & YOGA
            </text>
        </svg>
    );
};

export default Logo;
