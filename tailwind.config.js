 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple_dark: '#4B0082',
        purple_light: '#E6E6FA',
        green_dark: '#006400',
        green_light: '#98FB98',
        blue_dark: '#00008B',
        blue_light: '#ADD8E6',
        red_dark: '#8B0000',
        red_light: '#FF6347',
        yellow_dark: '#FFD700',
        yellow_light: '#FFFACD',
        orange_dark: '#FF4500',
        orange_light: '#FFA07A',
        pink_dark: '#FF1493',
        pink_light: '#FFB6C1',
        gray_dark: '#696969',
        gray_light: '#D3D3D3',
        brown_dark: '#8B4513',
        brown_light: '#D2B48C',
      fontFamily: {
            inter: ['Inter', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
    },
    },	
  },
  plugins: [],
  corePlugins: {
    preflight: false,  }
  }}