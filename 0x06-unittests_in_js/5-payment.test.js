const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');

const { expect } = chai;
let spy;

beforeEach(function () {
  spy = sinon.spy(console, 'log');
});

afterEach(function () {
  spy.restore();
});

describe('sendPaymentRequestToApi', function () {
  it('should call console.log with the message "The total is: 120" when the function itself is called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should call console.log with the message "The total is: 20" when the function itself is called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
