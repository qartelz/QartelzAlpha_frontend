/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#354f52',
        customBlue2: '#14213d',

      },

      backgroundImage: {
        'gradient-radial-custom': 'radial-gradient(circle, rgba(211,210,224,1) 50%, rgba(87,75,195,1) 100%)',
      },
    },
  },
  plugins: [],
}

