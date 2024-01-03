import {colors} from './src/shared/styles/colors'

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}"
]
export const theme = {
  extend: {
    colors,
    fontFamily: {
      'ibm-plex': ['"IBM Plex Mono"'],
      'caveat': ["Caveat"]
    },
    screens: {
      mob: '480px'
    }
  },
}
export const plugins = []

