module.exports = {
  content: [
    './index.md',
    './assets/js/**/*.{js,jsx,ts,tsx}',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#132047', // Deeper blue for strong title contrast
        accent: '#06b6d4',  // Cyan
        gold: '#fbbf24',    // Gold for awards
        background: '#f9fafb', // Lighter background
        'background-strong': '#f1f5f9', // For section backgrounds
        glass: 'rgba(255,255,255,0.7)',
        dark: '#0f172a',    // For dark text
        purple: '#9333ea',  // For education badges
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'Inter', 'sans-serif'],
        body: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        'card': '0 4px 24px 0 rgba(30, 58, 138, 0.10)',
        'nav': '0 2px 8px 0 rgba(30, 58, 138, 0.08)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      transitionProperty: {
        'bg': 'background-color',
      },
    },
  },
  plugins: [],
}; 