import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "node_modules/**", ".repo*/**", "assets/**", ".npm-cache/**"]
  },
  ...nextVitals
];

export default config;
