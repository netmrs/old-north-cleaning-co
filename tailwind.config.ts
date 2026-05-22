import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#062446",
        harbor: "#2f6f9f",
        brass: "#b88942",
        clean: "#f5f8f9",
        mist: "#dceef7",
        pine: "#2f5f50",
        ink: "#172434"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(6, 36, 70, 0.13)"
      },
      borderRadius: {
        brand: "8px"
      }
    }
  },
  plugins: []
};

export default config;
