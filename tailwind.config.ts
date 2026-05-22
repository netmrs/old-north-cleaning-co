import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#06192f",
        harbor: "#2b6f91",
        brass: "#c99a52",
        clean: "#f5f7f4",
        mist: "#d9e8ee",
        pine: "#2b5b50",
        ink: "#142234",
        fog: "#eef3f1",
        steel: "#647484"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(6, 25, 47, 0.13)",
        lift: "0 30px 80px rgba(6, 25, 47, 0.18)"
      },
      borderRadius: {
        brand: "8px"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(120deg, rgba(6,25,47,.96), rgba(8,39,63,.9) 48%, rgba(43,91,80,.82)), radial-gradient(circle at 82% 18%, rgba(201,154,82,.28), transparent 30%), linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
