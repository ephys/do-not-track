# do-not-track

Accessing the user's preferences in terms of tracking can be slightly
complicated. This module simplifies that.

[Read the spec](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT)

## Install

`npm install --save donottrack`

## Usage

Browser:

```javascript
import doNotTrack from 'donottrack';

// Returns true if the user does not want to be tracked, false otherwise,
// tracking allowed if nothing specified.
const dnt = doNotTrack();
```

```javascript
// Returns true if the user does not want to be tracked, false otherwise,
// NO TRACKING allowed if nothing specified.
const dnt = doNotTrack(true);
```

Node.js:

```javascript
import doNotTrack from 'donottrack';

// Or alternative CommonJS import
//const donottrack = require('donottrack').default;

// Returns true if the user does not want to be tracked, false otherwise,
// tracking allowed if nothing specified.
const dnt = doNotTrack(req.headers);
```

```javascript
// Returns true if the user does not want to be tracked, false otherwise,
// NO TRACKING allowed if nothing specified.
const dnt = doNotTrack(req.headers, true);
```

