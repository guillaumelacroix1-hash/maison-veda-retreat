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
                    // Deux teintes selon le fond, par la variable --veda-gold
                    // (src/index.css). Les opacités (/20, /50…) restent possibles.
                    gold: 'rgb(var(--veda-gold) / <alpha-value>)',
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
        },
    },
    plugins: [],
}
