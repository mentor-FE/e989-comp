
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
      fontFamily: {
        default: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hs1: ['4.6875rem', {
          lineHeight: '1.2',
          fontWeight: '600',
        }],
        hs2: ['3.75rem', {
          lineHeight: '1.2',
          fontWeight: '600',
        }],
        hs3: ['2.5rem', {
          lineHeight: '1.2',
          fontWeight: '600',
        }],
        ts1: ['1.875rem', {
          lineHeight: '1.2',
          fontWeight: '600',
        }],
        tr2: ['1.375rem', {
          lineHeight: '1.2',
          fontWeight: '400',
        }],
        ts2: ['1.375rem', {
          lineHeight: '1.2',
          fontWeight: '600',
        }],
        tm2: ['1.375rem', {
          lineHeight: '1.2',
          fontWeight: '500',
        }],
        tr3: ['1.25rem', {
          lineHeight: '1.2',
          fontWeight: '400',
        }],
        ts3: ['1.25rem', {
          lineHeight: '1.2',
          fontWeight: '600',
        }],
        tr4: ['1rem', {
          lineHeight: '1.2',
          fontWeight: '400',
        }],
      },
      colors: {
        'inherit': 'inherit',
        'bright-blue': '#33B1FF',
        'light-blue': '#BAE6FF',
        'bright-red': '#FF5E5B',
        'dark': '#293037',
        'white': '#FFFFFF',
        'black': '#000000',
      },
      borderRadius: {
        xsmall: '5px',
        small: '0.625rem',
        md: '1.25rem',
        full: '9999px',
      },
      screens: {
        'xl': { 'max': '1365px' },
        'lg': { 'max': '1023px' },
        'md': { 'max': '767px' },
        'sm': { 'max': '575px' },
        'xs': { 'max': '374px' },
      },
      transitionDuration: {
        fast: '200ms',
      },
      extend: {
        margin: {
          in: '2.9375rem',
          out: '8.25rem',
        },
        opacity: {
          hover: '0.7',
        },
      },
    },
    plugins: []
  }
  