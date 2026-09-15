/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                veda: {
                    dark: '#002d2c',
                    gold: '#b99b64',
                    sand: '#b49174',
                    light: '#f5f5f5',
                    cream: '#fdfbf7', // paper-cream, fond des sections claires
                }
            },
            fontFamily: {
                heading: ['Playfair Display', 'Merriweather', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            borderRadius: {
                pill: '2.5rem',
            },
            boxShadow: {
                card: '0 8px 30px rgba(0, 0, 0, 0.04)',
                'card-hover': '0 8px 30px rgba(0, 0, 0, 0.20)',
                premium: '0 20px 50px rgba(0, 0, 0, 0.50)',
            },
            transitionTimingFunction: {
                soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
            },
            maxWidth: {
                container: '80rem',
            },
            // Bande défilante des témoignages. Le jeu d'éléments est rendu deux
            // fois de suite : glisser de la moitié ramène exactement au point de
            // départ, et la boucle ne se voit pas. La durée réelle est calculée
            // par le composant, d'après la longueur de la bande.
            keyframes: {
                defilement: {
                    from: { transform: 'translate3d(0, 0, 0)' },
                    to: { transform: 'translate3d(-50%, 0, 0)' },
                },
            },
            animation: {
                defilement: 'defilement 80s linear infinite',
            },
        },
    },
    plugins: [],
}
