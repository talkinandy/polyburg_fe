import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bloomberg Terminal color scheme - professional financial terminal aesthetic
        terminal: {
          bg: '#000000',
          primary: '#FF8C00', // Bloomberg amber
          secondary: '#00BFFF', // Light blue
          success: '#32CD32', // Lime green for profits
          danger: '#FF4444', // Red for losses
          muted: '#666666', // Gray for secondary info
          border: '#333333', // Dark border
        },
        // Custom background colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#FF8C00',
          foreground: '#000000',
        },
        secondary: {
          DEFAULT: '#00BFFF',
          foreground: '#000000',
        },
        accent: {
          DEFAULT: '#32CD32',
          foreground: '#000000',
        },
      },
      fontFamily: {
        // Typography from PRD
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scanline': 'scanline 2s linear infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #00FF41, 0 0 10px #00FF41, 0 0 15px #00FF41',
          },
          '50%': { 
            boxShadow: '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41',
          },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glow': {
          '0%': { textShadow: '0 0 5px #00FF41' },
          '100%': { textShadow: '0 0 20px #00FF41, 0 0 30px #00FF41' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 