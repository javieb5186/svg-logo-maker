// Checks input if it is an acceptable color by name or hex value
const Color = require('color');

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