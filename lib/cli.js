const inq = require('inquirer');
const writeFile = require('./writeFile.js');
const {Triangle, Circle, Square} = require('./shapes.js');
const isColor = require('./isColor.js');
const isThreeLetters = require('./isThreeLetters.js');

class CLI {

  constructor() {
    this.questions = [
      {
        type: "input",
        message: "Enter a three letter word for your logo name: ",
        name: "text",
        validate: isThreeLetters
          
      },
      {
        type: "input",
        message: "Enter a color for your logo text: ",
        name: "textColor",
        validate: isColor
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
        validate: isColor
      }
  ]
  }
  
  run() {
    inq.prompt(this.questions)
    .then((answers) => {
        for (let d in answers) answers[d] = String(answers[d]).toLowerCase();
        console.log(answers);

        let s;

        switch (answers.shape) {
          case 'triangle':
            s = new Triangle(answers);
            break;
          case 'circle':
            s = new Circle(answers);
            break;
          case 'square':
            s = new Square(answers);
            break;
          default:
            console.log('An error occured');
            s = undefined;
            break;
        }
        return s.toFile();
      })
    .then((data) => {
        writeFile(data);
      });
  }
}

module.exports = CLI;