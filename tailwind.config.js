/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#3b82f6", // Blue-500 (untuk aksen UI/UX yang modern)
          dark: "#0f172a",    // Slate-900 (background)
          secondary: "#ec4899", // Pink-500 (untuk aksen kreatif/Figma)
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }