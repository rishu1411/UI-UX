/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/contain/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#040C18',
        'footer': '#031B34',
        'blog': '#042c54',
        'text': '#81AFDD',
        'sub-text':'#FF8A71',
      },

      keyframes: {
        scaleUpCenter: {
          '0%': {
            transform: 'scale(0.5)',
          },
          '100%': {
            transform: 'scale(1)'
          }
  
        },
      },
      animation: {
        scaleUpCenter:'scaleUpCenter 0.6s ease-in-out '
      },
    },
  },
  plugins: [],
}
