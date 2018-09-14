let calculator = require('../spaceAgeCalculator.js')
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', () => {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('when a person is 1000000000 seconds old', () => {
  it('', () => {
    const ageRequest = calculator(1000000000);
    const expectedResponse = {
      earth: 31.69,
      jupiter: 2.67,
      mars: 16.85,
      mercury: 131.57,
      neptune: 0.19,
      saturn: 1.08,
      uranus: 0.38,
      venus: 51.51
    };
    expect(ageRequest).to.deep.equal(expectedResponse);
  })
})

describe('when a person is 1827392819 seconds old', () => {
  it('', () => {
    const ageRequest = calculator(1827392819);
    const expectedResponse = {
      earth: 57.91,
      jupiter: 4.88,
      mars: 30.79,
      mercury: 240.43,
      neptune: 0.35,
      saturn: 1.97,
      uranus: 0.69,
      venus: 94.13
    };
    expect(ageRequest).to.deep.equal(expectedResponse);
  })
})

describe('when a person is 999999999.999 seconds old', () => {
  it('', () => {
    const ageRequest = calculator(999999999.999);
    const expectedResponse = {
      earth: 31.69,
      jupiter: 2.67,
      mars: 16.85,
      mercury: 131.57,
      neptune: 0.19,
      saturn: 1.08,
      uranus: 0.38,
      venus: 51.51
    };
    expect(ageRequest).to.deep.equal(expectedResponse);
  })
})
describe('when a person is not a number seconds old', () => {
  it('', () => {
    const ageRequest = calculator("Not a number");
    const expectedResponse = {
      earth: 0,
      jupiter: 0,
      mars: 0,
      mercury: 0,
      neptune: 0,
      saturn: 0,
      uranus: 0,
      venus: 0
    };
    expect(ageRequest).to.deep.equal(expectedResponse);
  })
})
