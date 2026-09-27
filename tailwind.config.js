/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        card: 'hsl(var(--card))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        gold: 'hsl(var(--gold))',
        'gold-bright': 'hsl(var(--gold-bright))',
        arcane: 'hsl(var(--arcane))',
        'rarity-uncommon': 'hsl(var(--rarity-uncommon))',
        'rarity-rare': 'hsl(var(--rarity-rare))',
        'rarity-epic': 'hsl(var(--rarity-epic))',
        'rarity-legendary': 'hsl(var(--rarity-legendary))',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px -28px rgba(0, 0, 0, 0.65)',
      },
    }
  },
  plugins: []
}
