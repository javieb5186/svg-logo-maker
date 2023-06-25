class Shape {
  constructor(answers) {
    this.text = answers.text;
    this.textColor = answers.textColor;
    this.shape = answers.shape;
    this.shapeColor = answers.shapeColor;
  }

  displayData() {
    console.log("The text saved is " + this.text);
  }
}

module.exports = Shape;