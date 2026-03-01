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
                    light: '#f5f5f5' // Approximate generic light for contrast
                }
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
