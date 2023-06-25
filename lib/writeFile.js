const {writeFile} = require('fs');

const createFile = (data) => {
  writeFile('logo.txt', data, err => {
    if(err)
      console.log("Error occured");
  });
}

module.exports = createFile;