import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      textColor: {
        primary: '#08d9d6'
      },
      keyframes: {
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        rotateReverse: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' }
        }
      },
      animation: {
        rotate: 'rotate 60s linear infinite',
        rotateReverse: 'rotateReverse 60s linear infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
}
export default config
