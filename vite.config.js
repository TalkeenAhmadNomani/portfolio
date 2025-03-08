import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

export default defineConfig( {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        typewriter: 'typewriter 2s steps(20) forwards',
        blink: 'blink 0.75s infinite',
        fadeIn: 'fadeIn 1s ease-out',
      },
    },
  },
 plugins: [react(),
     tailwindcss(),

  ],
});

