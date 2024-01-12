/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sail: {
          50: "#f0f7fe",
          100: "#ddedfc",
          200: "#c3e0fa",
          300: "#abd6f8",
          400: "#69b2f1",
          500: "#4693eb",
          600: "#3177df",
          700: "#2861cd",
          800: "#2750a6",
          900: "#254583",
          950: "#1b2c50"
        },
        midnight: {
          50: "#e4f0ff",
          100: "#cfe3ff",
          200: "#a8c9ff",
          300: "#74a4ff",
          400: "#3e6bff",
          500: "#1334ff",
          600: "#001dff",
          700: "#001dff",
          800: "#001ae4",
          900: "#000eb0",
          950: "#000226"
        }
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"]
      },
      boxShadow: {
        astro: "var(--box-shadow)"
      },
      screens: {
        xs: "475px"
      }
    }
  },
  plugins: []
}
