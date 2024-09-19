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

describe('GET /cart/:id', function () {
  it('should have the correct status code when id is a number', function (done) {
      request('http://localhost:7865/cart/426', (error, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it('should send the correct message when id is a number', function (done) {
      request('http://localhost:7865/cart/426', (error, res, body) => {
        expect(body).to.equal('Payment methods for cart 426');
        done();
      });
  });

  it('should have the correct status code when id is not a number', function (done) {
      request('http://localhost:7865/cart/5ac', (error, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });

  it('should have correct headers', function (done) {
      request('http://localhost:7865/cart/426', (error, res, body) => {
        expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
        done();
      });
  });

  it('should have no error when id is a number', function (done) {
      request('http://localhost:7865/cart/426', (error, res, body) => {
        expect(error).to.be.null;
        done();
      });
  });
});
