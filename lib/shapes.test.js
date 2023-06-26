const Shape = require('./shapes.js');

describe('Shape', () => {
  describe('Circle', () => {
    it('should return an svg file for a circle', () => {
      const answers = {
        text: 'txt',
        textColor: 'blue',
        shape: 'circle',
        shapeColor: 'red'
      }
      const shape = Shape(answers);
      expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" stroke-width="0" fill="red"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">TXT</text></svg>`);
    });
  });

  describe('Triangle', () => {
    it('should return an svg file for a triangle', () => {
      const answers = {
        text: 'txt',
        textColor: 'blue',
        shape: 'triangle',
        shapeColor: 'red'
      }
      const shape = Shape(answers);
      expect(shape.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 260,190 40,190" stroke-width="0" fill="red"/><text x="150" y="140" font-size="60" text-anchor="middle" fill="blue">TXT</text></svg>`);
    });
  });

  describe('Square', () => {
    it('should return an svg file for a square', () => {
      const answers = {
        text: 'txt',
        textColor: 'blue',
        shape: 'square',
        shapeColor: 'red'
      }
      const shape = Shape(answers);
      expect(shape.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25" width="150" height="150" stroke-width="0" fill="red"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">TXT</text></svg>`);
    });
  });
});