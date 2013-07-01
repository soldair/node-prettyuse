prettysize
==========

print bytes for human consumtion

```js

var pretty = require('prettyuse');

var str = pretty();
// rss: 10.3 MB , heapTotal: 6.9 MB , heapUsed: 2.5 MB

str = pretty.size(10000)
// 9.8 kB

```
