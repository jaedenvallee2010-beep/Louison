/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        char: {
          950: "#0B0B0C",
          900: "#111113",
          800: "#18181B",
          700: "#232326",
          600: "#2E2E32",
        },
        steel: {
          400: "#9CA0A6",
          500: "#7B7F86",
          600: "#5C5F65",
        },
        magma: {
          300: "#FFC24D",
          400: "#FF9A3D",
          500: "#FF6A1F",
          600: "#E8460D",
          700: "#C22E0B",
          900: "#5A1204",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        body: ["var(--font-barlow)", "Arial", "sans-serif"],
        mono: ["var(--font-barlow-cond)", "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
