const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils');

const { expect } = chai;

describe('sendPaymentRequestToApi', function () {
  it('should use Utils.calculateNumber and console.log', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    spy.restore();
  });
});
