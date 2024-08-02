  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-brown':'#784F33',
        'azul-boton': "#295C7A",
        'card-color': "#F6E4D7",
        'color-fondo': "#FAFAFA",
        'color-star': '#f3cd01',
        'color-suscribe': '#d0a144',
        'color-footer': '#252b42'
      },
      fontFamily:{
        // sans: ["martel", "Roboto"]
        sans: ['Roboto'],
        serif: ['Martel'],
      },
      padding: {
        '9/16': '56.25%', // Para 16:9
        '3/4': '75%', // Para 4:3
        '1/1': '100%', // Para 1:1
      },
      
    },
  },
  plugins: [],
}
