/**
 * Returns true if the user does not want to be tracked, false otherwise, def if unspecified.
 *
 * @param {Object} [headers] The request headers, when used on the server-side.
 * @param {boolean} [def=false] The value to return if doNotTrack is unspecified.
 * @returns {boolean} The user agrees to being tracked.
 */
export default function doNotTrack(headers, def = false) {
  // Dealing with optional headers parameter
  if (arguments.length == 1 && typeof arguments[0] == 'boolean') {
    headers = undefined;
    def = arguments[0];
  }

  var dnt;
  if (headers !== undefined) {
    // In Node.js headers keys are lowercased. Values are not modified
    // cf. https://nodejs.org/api/http.html#http_http
    dnt = headers.dnt;
  } else {
    dnt = getBrowserDnt();
  }

  if (dnt) {
    if (dnt.charAt(0) === '1' || dnt === 'yes') {
      return true;
    }

    if (dnt.charAt(0) === '0' || dnt === 'no') {
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
