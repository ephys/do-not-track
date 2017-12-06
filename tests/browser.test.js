const should = require('should');
const dnt = require('../lib/').default;

// TODO transpile.
// TODO run in real browsers.

describe('do not track used from browsers', () => {
  beforeEach(() => {
    global.window = {};
    window.navigator = {};
  });

  afterEach(() => {
    delete global.window;
  });

  it('should return false when nothing set', () => {
    should(dnt()).equal(false);
  });

  it('should return true when nothing set, with default true', () => {
    should(dnt(true)).equal(true);
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

});
