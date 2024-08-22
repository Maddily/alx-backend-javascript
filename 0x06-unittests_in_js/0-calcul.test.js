const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should correctly sum the rounded numbers', function () {
    const sum = calculateNumber(1.2, 3.7);
    assert.equal(sum, 5);
  });

  it('should work correctly when both numbers are rounded up', function () {
    const sum = calculateNumber(1.5, 3.7);
    assert.equal(sum, 6);
  });

  it('should work correctly when both numbers are rounded down', function () {
    const sum = calculateNumber(1.2, 3.4);
    assert.equal(sum, 4);
  });

  it('should handle negative numbers', function () {
    const sum = calculateNumber(-1.2, -3.7);
    assert.equal(sum, -5);
  });

  it('should handle zero', function () {
    const sum = calculateNumber(0, 0);
    assert.equal(sum, 0);
  });

  it('should handle both numbers being the same', function () {
    const sum = calculateNumber(1.2, 1.2);
    assert.equal(sum, 2);
  });

  it('should handle large numbers', function () {
    const sum = calculateNumber(1000.2, 2000.7);
    assert.equal(sum, 3001);
  });
});
