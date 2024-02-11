
 /** @type {import('tailwindcss').Config} */

 module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'custom-gradient': "linear-gradient(to bottom right, #6B21A8 10%, #7C3AED 60%, #5B21B6 95%)",
        },
      },
    },
    plugins: [],
   }
   