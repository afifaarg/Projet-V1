/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../**/templates/**/*.html'],
  theme: {
    extend: {
      colors: {
        'yellow-primary': '#fff91e', // Remplacez ceci par votre couleur personnalisée
        'green-primary': '#00a693', // Remplacez ceci par votre couleur personnalisée
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'], // Use 'sans' as the generic fallback
      },
    },
  },
  plugins: [],
}

