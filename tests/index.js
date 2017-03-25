const should = require('should');
const dnt = require('../lib/').default;

// TODO transpile.
// TODO run in real browsers.

describe('do not track', () => {
  beforeEach(() => {
    global.window = {};
    window.navigator = {};
  });

  it('should return false for firefox when disabled', () => {
    window.navigator = {
      doNotTrack: 'no',
    };

    should(dnt()).equal(false);
  });

  it('should return true for firefox when enabled', () => {
    window.navigator = {
      doNotTrack: 'yes',
    };

    should(dnt()).equal(true);
  });

  it('should return false for chrome, IE 11, and safari when disabled', () => {
    window.doNotTrack = '0';
    should(dnt()).equal(false);
  });

  it('should return true for chrome, IE 11, and safari when enabled', () => {
    window.doNotTrack = '1';
    should(dnt()).equal(true);
  });

  it('should return false for IE 8-9 when disabled', () => {
    window.navigator = {
      doNotTrack: '0',
    };

    should(dnt()).equal(false);
  });

  it('should return true for IE 8-9 when enabled', () => {
    window.navigator = {
      doNotTrack: '1',
    };

    should(dnt()).equal(true);
  });

  it('should return true for HTTP Requests when enabled', () => {
    should(dnt('1')).equal(true);
  });

  it('should return false for HTTP Requests when enabled', () => {
    should(dnt('0')).equal(false);
  });
});
