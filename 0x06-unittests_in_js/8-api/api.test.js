const { expect } = require('chai');
const request = require('request');

describe('GET /', function () {
  it('should have the correct status code', function (done) {
      request('http://localhost:7865', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should send the correct message', function (done) {
      request('http://localhost:7865', (error, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have correct headers', function (done) {
      request('http://localhost:7865', (error, res, body) => {
        expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('should have no error', function (done) {
      request('http://localhost:7865', (error, res, body) => {
        expect(error).to.be.null;
      done();
    });
  });
});
