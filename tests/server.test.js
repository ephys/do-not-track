const should = require('should');
const dnt = require('../lib/').default;

describe('do not track used from the server', () => {

  it('should return true for HTTP Requests when enabled', () => {
    // In Node.js headers keys are lowercased. Values are not modified
    // cf. https://nodejs.org/api/http.html#http_http
    const headers = {dnt: '1'};
    should(dnt(headers)).equal(true);
  });

  it('should return true for HTTP Requests when enabled, with default true', () => {
    const headers = {dnt: '1'};
    should(dnt(headers, true)).equal(true);
  });

  it('should return false for HTTP Requests when disabled', () => {
    const headers = {dnt: '0'};
    should(dnt(headers)).equal(false);
  });

  it('should return false for HTTP Requests when disabled, with default true', () => {
    const headers = {dnt: '0'};
    should(dnt(headers, true)).equal(false);
  });

  it('should return false for HTTP Requests when not set', () => {
    const headers = {};
    should(dnt(headers)).equal(false);
  });

  it('should return true for HTTP Requests when not set, with default true', () => {
    const headers = {};
    should(dnt(headers, true)).equal(true);
  });

});
