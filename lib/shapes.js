const isColor = require('./isColor.js');

class Shape {
  constructor(answers) {
    if(answers !== undefined) {
      this.text = String(answers.text).toUpperCase();
      this.textColor = answers.textColor;
      this.shapeColor = answers.shapeColor;
      this.textArea = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    this.rStart = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    this.rEnd = `</svg>`;
  }

  setColor(color) {
    if(isColor(color))
      this.shapeColor = color;
  }
}

class Triangle extends Shape {
  constructor(answers) {
    super(answers);
  }
  render() {
    let r = `<polygon points="150,0 244,164 56,164" fill="${this.shapeColor}"/>`;
    return r;
  }
  toFile() {
    let r = this.render();
    let svg = `${this.rStart}${r}${this.textArea}${this.rEnd}`;
    return svg;
  }
}

class Circle extends Shape {
  constructor(answers) {
    super(answers);
  }
  render() {
    let r = `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`;
    return r;
  }
  toFile() {
    let r = this.render();
    let svg = `${this.rStart}${r}${this.textArea}${this.rEnd}`;
    return svg;
  }
}

class Square extends Shape {
  constructor(answers) {
    super(answers);
  }
  render() {
    let r = `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`;
    return r;
  }
  toFile() {
    let r = this.render();
    let svg = `${this.rStart}${r}${this.textArea}${this.rEnd}`;
    return svg;
  }
}

module.exports = {Triangle, Circle, Square};