/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'wf-black': '#09090b',
        'wf-surface': '#111113',
        'wf-muted': '#1c1c1f',
        'wf-border': '#27272a',
        'wf-text': '#D4D0C8',
        'wf-dim': '#71717a',
        'wf-copper': '#C27853',
        'wf-bone': '#E8E4DE',
        'wf-slate': '#6B7B8D',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
