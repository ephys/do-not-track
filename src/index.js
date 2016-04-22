'use strict';

/**
 * Returns true if the user should be tracked, false otherwise.
 *
 * @param {!boolean} [def = false] The value to return if doNotTrack is unspecified.
 * @returns {!boolean}
 */
export default function (def = false) {
  const doNotTrack = window.doNotTrack || window.navigator.doNotTrack || window.navigator.msDoNotTrack;

  if (doNotTrack != null) {
    if (doNotTrack.charAt(0) === '1' || doNotTrack === 'yes') {
      return true;
    }

    if (doNotTrack.charAt(0) === '0' || doNotTrack === 'no') {
      return false;
    }
  }

  return def;
}
