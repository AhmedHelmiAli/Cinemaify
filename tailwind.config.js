/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      display: {
        "-webkit-box": "-webkit-box",
      },
      webkitBoxOrient: {
        vertical: "vertical",
      },
      webkitLineClamp: {
        2: "2",
      },
      textOverflow: {
        ellipsis: "ellipsis",
      },
    },
  },
  plugins: [],
};
