const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
     },
     colors: {
        h1 : '#2C6975',
        h2: '#68B2A0',
        h3: '#CDE0C9',
        h4: '#E0ECDE'
     }
    },
  },
  plugins: [
    require('daisyui'),
  ],
});
  
  
  
  
  
  
  
  
  
  
  
  
 
  
