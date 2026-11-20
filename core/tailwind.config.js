/** Build: tailwindcss -c tailwind.config.js -i core/static/src/input.css -o core/static/core/output.css --minify */
module.exports = {
  content: ['./core/templates/**/*.html'],
  theme: {
    extend: {
      colors: { ink: '#0f172a', brand: '#1a4fc4', 'brand-dark': '#12399a', mist: '#f5f7fb' },
      keyframes: { float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } }, fadeUp: { from: { opacity: '0', transform: 'translateY(18px)' }, to: { opacity: '1', transform: 'none' } } },
      animation: { float: 'float 7s ease-in-out infinite', 'fade-up': 'fadeUp .7s ease-out both' },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
