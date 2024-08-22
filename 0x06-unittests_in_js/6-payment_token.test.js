const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

const expect = chai.expect;

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct data when passed true as argument', function(done) {
    getPaymentTokenFromAPI(true).then((object) => {
      expect(object).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
