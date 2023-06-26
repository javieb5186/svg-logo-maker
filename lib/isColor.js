const Color = require('color'); 'https://www.npmjs.com/package/color';

const isColor = (color) => {
  try {
    const c = Color(color.toLowerCase());
    return true;
  } 
  catch (error) { 
    return "Please enter a valid color name or value.";
  } 
}

module.exports = isColor;