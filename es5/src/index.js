'use strict';

/**
 * Returns true if the user should be tracked, false otherwise.
 *
 * @param {!boolean} [def = false] The value to return if doNotTrack is unspecified.
 * @returns {!boolean}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var def = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

  var doNotTrack = window.doNotTrack || window.navigator.doNotTrack || window.navigator.msDoNotTrack;

  if (doNotTrack != null) {
    if (doNotTrack.charAt(0) === '1' || doNotTrack === 'yes') {
      return true;
    }

    if (doNotTrack.charAt(0) === '0' || doNotTrack === 'no') {
      return false;
    }
  }

  return def;
};