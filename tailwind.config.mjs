/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'wf-black': '#0a0a0a',
        'wf-dark': '#111111',
        'wf-gray': '#1a1a1a',
        'wf-mid': '#2a2a2a',
        'wf-light': '#e0e0e0',
        'wf-white': '#f0f0f0',
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans TC"', '"Helvetica Neue"', 'sans-serif'],
        display: ['"Noto Sans TC"', '"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
