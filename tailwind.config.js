/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Apple-style spring easing curves
      transitionTimingFunction: {
        'spring-out': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'spring-in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
        'spring-smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      // Animation durations (150-250ms range)
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
      },
      // Custom animation keyframes
      keyframes: {
        'fade-in-scale': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.96)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'modal-enter': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'modal-exit': {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
        },
        'card-enter': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.96) translateY(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
      },
      // Custom animations
      animation: {
        'fade-in-scale': 'fade-in-scale 200ms cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'modal-enter': 'modal-enter 200ms cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'modal-exit': 'modal-exit 150ms cubic-bezier(0.65, 0, 0.35, 1) forwards',
        'card-enter': 'card-enter 200ms cubic-bezier(0.33, 1, 0.68, 1) forwards',
      },
    },
  },
  plugins: [],
}

