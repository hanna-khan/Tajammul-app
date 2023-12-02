/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow:{
        navbarShadow:"35px 11px 25px rgba(139, 139, 139, 0.16)"
      },
      fontFamily:{
        poppins:"Poppins, sans-serif"
      }
    },
  },
  plugins: [],
}

