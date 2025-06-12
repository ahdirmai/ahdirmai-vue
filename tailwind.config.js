/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#000000',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'bounce-custom': 'bounceCustom 2s infinite',
        'pulse-ring': 'pulseRing 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceCustom: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}