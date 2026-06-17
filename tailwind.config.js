/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0D2F4F',
          teal: '#0A6E8A',
          mint: '#00C9A7',
          sky: '#E8F4FD',
          orange: '#FF6B35',
          slate: '#4A6FA5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D2F4F 0%, #0A6E8A 50%, #00C9A7 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(10,110,138,0.1) 0%, rgba(0,201,167,0.05) 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0D2F4F 0%, #0A3D5C 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(13, 47, 79, 0.08)',
        'card-hover': '0 8px 40px rgba(13, 47, 79, 0.15)',
        'glow': '0 0 40px rgba(0, 201, 167, 0.2)',
      },
    },
  },
  plugins: [],
}
