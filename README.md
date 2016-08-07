# do-not-track

Accessing the user's preferences in terms of tracking can be slightly complicated. This module simplifies that.

```javascript
import doNotTrack from 'do-not-track';

// Returns true if you can track, false otherwise.
const mayTrack = doNotTrack(/* default, if preferences are not set. */ true);
```
