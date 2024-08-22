const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber when type is SUM', function () {
  it('should correctly sum the rounded numbers', function () {
    const sum = calculateNumber('SUM', 1.2, 3.7);
    assert.equal(sum, 5);
  });

  it('should work correctly when both numbers are rounded up', function () {
    const sum = calculateNumber('SUM', 1.5, 3.7);
    assert.equal(sum, 6);
  });

  it('should work correctly when both numbers are rounded down', function () {
    const sum = calculateNumber('SUM', 1.2, 3.4);
    assert.equal(sum, 4);
  });

  it('should handle negative numbers', function () {
    const sum = calculateNumber('SUM', -1.2, -3.7);
    assert.equal(sum, -5);
  });

  it('should handle zero', function () {
    const sum = calculateNumber('SUM', 0, 0);
    assert.equal(sum, 0);
  });

  it('should handle both numbers being the same', function () {
    const sum = calculateNumber('SUM', 1.2, 1.2);
    assert.equal(sum, 2);
  });

  it('should handle large numbers', function () {
    const sum = calculateNumber('SUM', 1000.2, 2000.7);
    assert.equal(sum, 3001);
  });
});

describe('calculateNumber when type is SUBTRACT', function () {
  it('should correctly subtract the rounded numbers', function () {
    const result = calculateNumber('SUBTRACT', 3.7, 1.2);
    assert.equal(result, 3);
  });

  it('should work correctly when both numbers are rounded up', function () {
    const result = calculateNumber('SUBTRACT', 3.7, 1.5);
    assert.equal(result, 2);
  });

  it('should work correctly when both numbers are rounded down', function () {
    const result = calculateNumber('SUBTRACT', 3.4, 1.2);
    assert.equal(result, 2);
  });

  it('should handle negative numbers', function () {
    const result = calculateNumber('SUBTRACT', -3.4, -1.2);
    assert.equal(result, -2);
  });

  it('should handle zero', function () {
    const result = calculateNumber('SUBTRACT', 0, 0);
    assert.equal(result, 0);
  });

  it('should handle both numbers being the same', function () {
    const result = calculateNumber('SUBTRACT', 1.2, 1.2);
    assert.equal(result, 0);
  });

  it('should handle large numbers', function () {
    const result = calculateNumber('SUBTRACT', 2000.7, 1000.2);
    assert.equal(result, 1001);
  });
});

describe('calculateNumber when type is DIVIDE', function () {
  it('should correctly divide the rounded numbers', function () {
    const result = calculateNumber('DIVIDE', 3.7, 2.2);
    assert.equal(result, 2);
  });

  it('should work correctly when both numbers are rounded up', function () {
    const result = calculateNumber('DIVIDE', 7.7, 1.5);
    assert.equal(result, 4);
  });

  it('should work correctly when both numbers are rounded down', function () {
    const result = calculateNumber('DIVIDE', 4.4, 2.2);
    assert.equal(result, 2);
  });

  it('should handle negative numbers', function () {
    const result = calculateNumber('DIVIDE', -4.4, -2.2);
    assert.equal(result, 2);
  });

  it('should handle zero', function () {
    const result = calculateNumber('DIVIDE', 2, 0);
    assert.equal(result, 'Error');
  });

  it('should handle both numbers being the same', function () {
    const result = calculateNumber('DIVIDE', 2.2, 2.2);
    assert.equal(result, 1);
  });

  it('should handle large numbers', function () {
    const result = calculateNumber('DIVIDE', 2000.7, 1000.2);
    assert.equal(result, 2.001);
  });
});
