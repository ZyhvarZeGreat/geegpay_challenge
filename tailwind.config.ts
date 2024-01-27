import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        progress1:{
          DEFAULT: "hsl(var(--progress1)"
        },
        progress2:{
          DEFAULT: "hsl(var(--progress2)"
        },
        progress3:{
          DEFAULT: "hsl(var(--progress3)"
        },
        progress4:{
          DEFAULT: "hsl(var(--progress4)"
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          
        },
        error: {
          DEFAULT: "hsl(var(--error))",
   
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        woodsmoke: {
          '50': 'hsl(0, 0%, 96%)',
          '100': 'hsl(0, 0%, 91%)',
          '200': 'hsl(0, 0%, 82%)',
          '300': 'hsl(0, 0%, 69%)',
          '400': 'hsl(0, 0%, 53%)',
          '500': 'hsl(0, 0%, 43%)',
          '600': 'hsl(0, 0%, 36%)',
          '700': 'hsl(0, 0%, 31%)',
          '800': 'hsl(0, 0%, 27%)',
          '900': 'hsl(0, 0%, 24%)',
          '950': 'hsl(0, 0%, 9%)',
      },
     
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow:{
        'card': ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config