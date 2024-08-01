// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#EEEEEE',
        textc: '#393E46',
        sch: '222831',
      },
      backgroundImage: {
        'life-at-springdale': "url('/public/images/lifeofschool.jpg')",
        'achievements': "url('/public/images/achievements.jpg')",
        'student-council': "url('/public/images/studentcouncil.jpg')",
      },
    },
  },
  plugins: [],
}
