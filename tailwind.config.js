module.exports = {
  darkMode: 'class',
  content: [
    './index.md',
    './assets/js/**/*.{js,jsx,ts,tsx}',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionProperty: {
        'all': 'all',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #334155, #0ea5e9)',
      },
      colors: {
        primary: '#334155',      // Slate 700
        accent: '#0ea5e9',       // Sky 500
        gold: '#fbbf24',         // Amber 400
        background: '#f8fafc',   // Slate 50
        'background-strong': '#f1f5f9', // Slate 100
        glass: 'rgba(248, 250, 252, 0.7)',
        dark: '#1e293b',         // Slate 800
        purple: '#9333ea',       // Purple 600
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'Inter', 'sans-serif'],
        body: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeIn": "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}; 