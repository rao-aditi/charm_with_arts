/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c76a',
          dark: '#a07830',
          muted: '#d4b96a',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          soft: '#111111',
          card: '#1a1a1a',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        wapulse: {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(37,211,102,0.4)' },
          '50%': { boxShadow: '0 4px 35px rgba(37,211,102,0.65), 0 0 0 12px rgba(37,211,102,0.1)' },
        },
        goldGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201,168,76,0.6), 0 0 80px rgba(201,168,76,0.2)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-35px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(35px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.88)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '150%' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        wapulse: 'wapulse 2.5s ease-in-out infinite',
        goldGlow: 'goldGlow 3s ease-in-out infinite',
        fadeUp: 'fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards',
        slideRight: 'slideRight 0.75s cubic-bezier(0.22,1,0.36,1) forwards',
        slideLeft: 'slideLeft 0.75s cubic-bezier(0.22,1,0.36,1) forwards',
        scaleIn: 'scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
      },
      boxShadow: {
        gold: '0 4px 24px rgba(201,168,76,0.3)',
        'gold-lg': '0 8px 40px rgba(201,168,76,0.4)',
        card: '0 4px 24px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
