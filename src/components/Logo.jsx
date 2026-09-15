import React from 'react';

const getImageUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

/**
 * Le logo : le yantra, le nom, la signature.
 *
 * Les tailles sont données par paliers plutôt qu'en dur. Sur un téléphone de
 * 360 pixels, le nom en taille fixe mesurait plus large que la place laissée
 * par le sélecteur de langue et le bouton de menu : « FR » se posait sur le
 * A de VEDA, et la signature passait dessous. La taille du grand écran est
 * inchangée.
 */
const Logo = ({ className = "h-14 w-auto animate-fade-in", fill = "currentColor" }) => {
    const couleur = fill === 'currentColor' ? 'inherit' : fill;

    return (
        <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
            {/* Le yantra, teint par la couleur du texte. Le fichier SVG porte son
                doré en dur, qu'une image ne laisse pas changer : posé en masque,
                il prend le doré du thème, comme le nom à côté de lui. */}
            <span
                aria-hidden="true"
                className="block h-full shrink-0 bg-current"
                style={{
                    aspectRatio: '687.7 / 716.99',
                    WebkitMaskImage: `url(${getImageUrl('/icon-logo-final/logo-lili-maison-veda-bigger.svg')})`,
                    maskImage: `url(${getImageUrl('/icon-logo-final/logo-lili-maison-veda-bigger.svg')})`,
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                }}
            />

            <div className="flex flex-col justify-center leading-none">
                <span
                    className="text-[0.95rem] tracking-[0.06em] sm:text-[1.2rem] sm:tracking-[0.08em] lg:text-[1.35rem]"
                    style={{
                        fontFamily: "'Playfair Display', 'Merriweather', serif",
                        fontWeight: 500,
                        color: couleur,
                    }}
                >
                    LA MAISON VEDA
                </span>
                <span
                    className="mt-1 text-[0.44rem] tracking-[0.22em] opacity-80 sm:text-[0.58rem] sm:tracking-[0.3em] lg:text-[0.65rem] lg:tracking-[0.35em]"
                    style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontWeight: 300,
                        color: couleur,
                    }}
                >
                    LAKE VILLAS & YOGA
                </span>
            </div>
        </div>
    );
};

export default Logo;
