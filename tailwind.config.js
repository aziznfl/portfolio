module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "text-900": "var(--text-900)",
        "text-800": "var(--text-800)",
        "text-700": "var(--text-700)",
        "text-600": "var(--text-600)",
        "text-500": "var(--text-500)",
        bg: "var(--bg)"
      }
    }
  },
  plugins: []
};
