//https://stackoverflow.com/questions/33017274/find-all-words-with-3-letters-with-regex

const isThreeLetters = (text) => {
  const valid = /^\w{1,3}$/.test(text);
  
  if(valid)
    return true;
  else {
    return "Please enter a valid three letter word";
  }
}

module.exports = isThreeLetters;