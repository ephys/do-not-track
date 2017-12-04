
/**
 * Returns false if the user agrees to being tracked, true if not, def if unspecified.
 *
 * @param {!string} [dntHeader] The DNT header.
 * @param {!boolean} [def = false] The value to return if doNotTrack is unspecified.
 * @returns {!boolean} The user do not agree to being tracked.
 */
export default function mayTrack(dntHeader, def = false) {

  // backward compatibility
  if (typeof dntHeader === 'boolean') {
    def = dntHeader;
  }

  if (typeof dntHeader !== 'string') {
    dntHeader = getBrowserDnt();
  }

  if (dntHeader != null) {
    if (dntHeader.charAt(0) === '1' || dntHeader === 'yes') {
      return true;
    }

    if (dntHeader.charAt(0) === '0' || dntHeader === 'no') {
      return false;
    }
  }

  return def;
}

export function getBrowserDnt() {
  if (typeof window === 'undefined') {
    throw new TypeError('do-not-track: first parameter may only be omitted in a browser env.');
  }

  return window.doNotTrack || window.navigator.doNotTrack || window.navigator.msDoNotTrack;
}

