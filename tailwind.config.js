/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          brand: "rgb(var(--color-text-brand) / <alpha-value>)",
        },
      },
      backgroundColor: {
        skin: {
          brand: "rgb(var(--color-bg-brand) / <alpha-value>)",
          input: "rgb(var(--color-bg-input) / <alpha-value>)",
        },
      },
      borderColor: {
        skin: {
          brand: "rgb(var(--color-border-brand) / <alpha-value>)",
        },
      },
      ringColor: {
        skin: {
          brand: "rgb(var(--color-ring-brand) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
