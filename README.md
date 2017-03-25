# do-not-track

Accessing the user's preferences in terms of tracking can be slightly complicated. This module simplifies that.

## Install

`npm install --save donottrack`

## Usage

Browser:

```javascript
import doNotTrack from 'donottrack';

// Returns true if the user agrees to being tracked, false otherwise.
const mayTrack = doNotTrack(/* default, if preferences are not set. */ true);
```

Node:

```javascript
import doNotTrack from 'donottrack';

const mayTrack = doNotTrack(req.header('DNT'), true);
```
