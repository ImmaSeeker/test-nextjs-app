const chai = require('chai');
const expect = chai.expect;
const request = require('request');
describe('GET /', () => {
  it('should return Hello World!', (done) => {
    request('http://localhost:3000/', (error, response, body) => {
      expect(body).to.equal('Hello World!');
      done();
    });
  });
});
