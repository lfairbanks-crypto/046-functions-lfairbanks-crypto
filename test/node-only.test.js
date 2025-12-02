const { square } = require('../index.js');

describe('square function (Node-only tests)', () => {
  it('should declare a function named square that takes one number and returns that number multiplied by itself', () => {
    expect(square(5)).toBe(25);
    expect(square(0)).toBe(0);
    expect(square(-3)).toBe(9);
    expect(square(10)).toBe(100);
  });

  it('should export square for CommonJS', () => {
    expect(typeof square).toBe('function');
  });
});
