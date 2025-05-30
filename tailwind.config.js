/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'course-primary': '#4f46e5',      // indigo-600
        'course-primary-dark': '#3730a3', // indigo-700
        'course-secondary': '#f8fafc',    // slate-50
        'course-text': '#334155',         // slate-700
        'course-text-dark': '#1e293b',    // slate-800
        'course-border': '#e2e8f0',       // slate-200
        'course-hover': '#f1f5f9',        // slate-100
      },
    },
  },
  plugins: [],
}

