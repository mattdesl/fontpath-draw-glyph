# fontpath-draw-glyph

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Draws a single [fontpath glyph](https://github.com/mattdesl/fontpath) to the canvas using the native bezier/quadratic functions of HTML5 canvas API. Mostly used internally.

## Usage

[![NPM](https://nodei.co/npm/fontpath-draw-glyph.png)](https://nodei.co/npm/fontpath-draw-glyph/)

```js
var draw = require('fontpath-draw-glyph')

//draws the glyph with the given scale/position to the context
draw(context, glyph, scale, x, y)
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/fontpath-draw-glyph/blob/master/LICENSE.md) for details.
