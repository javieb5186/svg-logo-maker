// Create/write to a specified file

const {writeFile} = require('fs');

const createFile = (data) => {
  writeFile('logo.svg', data, err => {
    if(err)
      console.log("Error occured");
    else {
      console.log("Generated logo.svg");
    }
  });
}

module.exports = createFile;