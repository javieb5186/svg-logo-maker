// Checks if input is 1-3 words.

const isThreeLetters = (text) => {
  const valid = /^\w{1,3}$/.test(text);
  
  if(valid)
    return true;
  else {
    return "Please enter a valid three letter word";
  }
}

module.exports = isThreeLetters;