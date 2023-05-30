/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  tailwindConfig: "./styles/tailwind.config.js",
  theme: {
    extend: {},
  },
  plugins: [],
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  "css.validate": false,
  "editor.inlineSuggest.enabled": true,
};
