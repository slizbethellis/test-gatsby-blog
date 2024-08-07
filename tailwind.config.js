/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito Variable', 'sans-serif'],
    },
    extend: {
      colors: {
        phthalo: {
          50: '#f5f8f8',
          100: '#ddeae9',
          200: '#bad5d4',
          300: '#90b8b7',
          400: '#689999',
          600: '#3d6264',
          700: '#335152',
          800: '#2c4243',
          900: '#253435',
          950: '#131f20'
        },
        fuzz: {
          '50': '#fff4ed',
          '100': '#ffe6d5',
          '200': '#ffbe98',
          '300': '#ffa272',
        },
        lila: {
          '100': '#fae5ff',
          '200': '#f4caff',
          '700': '#a30ac1',
          '800': '#870b9d',
          '900': '#791089',
          '950': '#4b0057'
        },
        zomp: '#39a78e',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              'font-weight': 700,
            },
            a: {
              'text-decoration-line': 'none',
              '&:hover': {
                'text-decoration-line': 'underline',
              },
            },
          }
        },
        phthalo: {
          css: {
            '--tw-prose-body': theme('colors.phthalo[900]'),
            '--tw-prose-headings': theme('colors.phthalo[950]'),
            '--tw-prose-lead': theme('colors.phthalo[800]'),
            '--tw-prose-links': theme('colors.lila[800]'),
            '--tw-prose-bold': theme('colors.phthalo[950]'),
            '--tw-prose-counters': theme('colors.phthalo[700]'),
            '--tw-prose-bullets': theme('colors.phthalo[500]'),
            '--tw-prose-hr': theme('colors.phthalo[400]'),
            '--tw-prose-quotes': theme('colors.phthalo[950]'),
            '--tw-prose-quote-borders': theme('colors.phthalo[400]'),
            '--tw-prose-captions': theme('colors.phthalo[800]'),
            '--tw-prose-code': theme('colors.phthalo[950]'),
            '--tw-prose-th-borders': theme('colors.phthalo[400]'),
            '--tw-prose-td-borders': theme('colors.phthalo[300]'),
            '--tw-prose-invert-body': theme('colors.phthalo[100]'),
            '--tw-prose-invert-headings': theme('colors.phthalo[50]'),
            '--tw-prose-invert-lead': theme('colors.phthalo[200]'),
            '--tw-prose-invert-links': theme('colors.fuzz[300]'),
            '--tw-prose-invert-bold': theme('colors.phthalo[50]'),
            '--tw-prose-invert-counters': theme('colors.phthalo[300]'),
            '--tw-prose-invert-bullets': theme('colors.phthalo[500]'),
            '--tw-prose-invert-hr': theme('colors.phthalo[700]'),
            '--tw-prose-invert-quotes': theme('colors.phthalo[50]'),
            '--tw-prose-invert-quote-borders': theme('colors.phthalo[700]'),
            '--tw-prose-invert-captions': theme('colors.phthalo[300]'),
            '--tw-prose-invert-code': theme('colors.phthalo[50]'),
            '--tw-prose-invert-th-borders': theme('colors.phthalo[600]'),
            '--tw-prose-invert-td-borders': theme('colors.phthalo[700]'),
          }
        }
      })
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography')
  ],
}

