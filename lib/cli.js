const inq = require('inquirer');
const Color = require('color'); 'https://www.npmjs.com/package/color'
const writeFile = require('./writeFile.js');
const Shape = require('./shapes.js');

class CLI {

  validateColor = (color) => {
    try {
      const c = Color(color);
      return true;
    } 
    catch (error) { 
      return "Please enter a valid color name or value.";
    } 
  }

  constructor() {
    this.questions = [
      {
        type: "input",
        message: "Enter a three letter word for your logo name: ",
        name: "text",
        validate: function(text) { //https://stackoverflow.com/questions/33017274/find-all-words-with-3-letters-with-regex
          const valid = /^\w{1,3}$/.test(text);
  
          if(valid)
            return true;
          else
            return "Please enter a valid three letter word";
        }
      },
      {
        type: "input",
        message: "Enter a color for your logo text: ",
        name: "textColor",
        validate: this.validateColor
      },
      {
        type: "list",
        message: "Select a shape for your logo. ",
        name: "shape",
        choices: [
          "Circle",
          "Triangle",
          "Square",
        ]
      },
      {
        type: "input",
        message: "Enter a color for your logo shape: ",
        name: "shapeColor",
        validate: this.validateColor
      }
  ]
  }
  
  run() {
    inq.prompt(this.questions)
    .then((answers) => {
        for (let d in answers) answers[d] = String(answers[d]).toLowerCase();
        const sha = Shape(answers);
        return sha.render();
      })
    .then((data) => {
        writeFile(data);
      });
  }
}

module.exports = CLI;