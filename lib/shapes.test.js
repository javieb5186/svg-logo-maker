// A test for the shapes.js
const {Triangle, Circle, Square} = require('./shapes.js');

// -------------------------- Test the shape and color of each new shape --------------------------
describe('Shape', () => {
  describe('Circle', () => {
    it('should return a circle element with red fill', () => {
      const shape = new Circle();
      shape.setColor('red');
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="red"/>`);
    });
  });

  describe('Triangle', () => {
    it('should return a polygon element with blue fill', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual(`<polygon points="150,0 244,164 56,164" fill="blue"/>`);
    });
  });

  describe('Square', () => {
    it('should return a square element with black fill', () => {
      const shape = new Square();
      shape.setColor('black');
      expect(shape.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="black"/>`);
    });
  });
});
// -------------------------------------------------------------------------------------------------