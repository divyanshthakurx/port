/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      Noto_Sans: ['Noto Sans', 'sans-serif'],
      Trajan_Pro: ['Trajan Pro', 'sans-serif'],
    },
    extend: {
      keyframes: {
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      colors: {
        primary: {
          red: '#AA1F18',
          bg: '#101010',
        },  
      },
      animation: {
        'ping-slow': 'ping-slow 700ms cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      backgroundImage: {
        'home-hero': "url('/home/hero/mahmood-farooqui-bg.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        'bxl': '1520px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};