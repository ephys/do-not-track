global.window = {};
var should = require('should');
var dnt = require('../es5/src/').default;

describe('do not track', function () {
  beforeEach(function() {
    window = {};
    window.navigator = {};
  });
  it('should return false for firefox when disabled', function () {
    window.navigator = {
      doNotTrack: 'no'
    };
    should(dnt()).equal(false);
  });
  it('should return true for firefox when enabled', function () {
    window.navigator = {
      doNotTrack: 'yes'
    };
    should(dnt()).equal(true);
  });
  it('should return false for chrome, IE 11, and safari when disabled', function () {
    window.doNotTrack = '0';
    should(dnt()).equal(false);
  });
  it('should return true for chrome, IE 11, and safari when enabled', function () {
    window.doNotTrack = '1';
    should(dnt()).equal(true);
  });
  it('should return false for IE 8-9 when disabled', function () {
    window.navigator = {
      doNotTrack: '0'
    };
    should(dnt()).equal(false);
  });
  it('should return true for IE 8-9 when enabled', function () {
    window.navigator = {
      doNotTrack: '1'
    };
    should(dnt()).equal(true);
  });
});
