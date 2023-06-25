class Shape {
  constructor(answers) {
    this.text = String(answers.text).toUpperCase();
    this.textColor = answers.textColor;
    this.shape = answers.shape;
    this.shapeColor = answers.shapeColor;
  }

  getText() {
    return this.text
  }

  getTextColor() {
    return this.textColor;
  }

  getShape() {
    return this.shape;
  }

  getShapeColor() {
    return this.shapeColor
  }
}

class Triangle extends Shape {
  constructor(answers) {
    super(answers);
  }
  render() {
    let r = 
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 260,190 40,190" stroke-width="0" fill="${this.shapeColor}" />
    <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
    return r;
  }
}

class Circle extends Shape {
  constructor(answers) {
    super(answers);
  }
  render() {
    let r = 
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <circle cx="150" cy="100" r="80" stroke-width="0" fill="${this.shapeColor}"/>
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
    return r;
  }
}

class Square extends Shape {
  constructor(answers) {
    super(answers);
  }
  render() {
    let r = 
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="25" width="150" height="150" stroke-width="0" fill="${this.shapeColor}"/>
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;

  return r;
  }
}

const data = (answers) => {
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

  return s;
}

module.exports = data;