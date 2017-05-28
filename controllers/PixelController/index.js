const sense = require('node-sense-hat').Leds
const map = require('lodash/map')
const multiply = require('lodash/multiply')
const flattenDepth = require('lodash/flattenDepth')

function PixelController() {
  var off = [0, 0, 0]
  var pixels = [
    [ off, off, off, off, off, off, off, off ],
    [ off, off, off, off, off, off, off, off ],
    [ off, off, off, off, off, off, off, off ],
    [ off, off, off, off, off, off, off, off ],
    [ off, off, off, off, off, off, off, off ],
    [ off, off, off, off, off, off, off, off ],
    [ off, off, off, off, off, off, off, off ],
    [ off, off, off, off, off, off, off, off ],
  ]

  function resetPixels() {
    sense.setRotation(90);
    sense.setPixels(pixels)
  }

  function setPixels(state, column, row, rgb) {
    console.log({ message: "setPixels", state, column, row, rgb })
    var color = rgb.map(rgbToDecimalRgb)
    pixels[row][column] = color

    var flattenedPixels = flattenDepth(pixels, 1)
    console.log(flattenedPixels)
    sense.setPixels(flattenedPixels)
  }

  function rgbToDecimalRgb(value) {
    return parseInt(multiply(value, 255))
  }

  resetPixels()

  return {
    setPixels,
  }
}

module.exports = PixelController;
