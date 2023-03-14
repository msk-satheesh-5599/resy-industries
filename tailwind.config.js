/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    important: true,
    theme: {
        extend: {
            backgroundImage: {
                'hero': 'linear-gradient(to top, #7bc6cc, #be93c5);'
            },
            fontFamily: {
                'lato': ['Lato', 'sans-serif'],
                'glook': ['Glook', 'serif'],
                'kaushan': ['Kaushan Script', 'cursive'],
                'pacifio': ['Pacifico', 'cursive'],
                'rampart': ['Rampart One', 'cursive'],
                'fredoka': ['Fredoka One', 'cursive'],
                'cinzel': ['Cinzel', 'serif']
            }
        }
    },
    plugins: []
}
