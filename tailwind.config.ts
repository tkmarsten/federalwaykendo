import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#4c842c",
            },
            secondary: {
              DEFAULT: "#92bfde",
            },
            background: {
              DEFAULT: "#f4f4f4",
            },
          }
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#4c842c",
            },
            secondary: {
              DEFAULT: "#adc7d9",
            },
            background: {
              DEFAULT: "#262626",
            }
          }
        }
      },
    },
  )],
}
export default config
