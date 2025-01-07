export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Includes all subdirectories and files
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['"Bebas Neue"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      borderRadius:{
        'extraLarge':'12rem' ,
        'Large':'8rem',
        'medium':'4rem',
      },
    },
  },
  plugins: [],
};
