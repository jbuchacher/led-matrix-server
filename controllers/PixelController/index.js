/* const sense = require('node-sense-hat').Leds*/
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

  function setPixels(state, column, row, rgb) {
    console.log({ message: "setPixels", state, column, row, rgb })
    var color = rgb.map(rgbToDecimalRgb)
    pixels[row][column] = color

    console.log(flattenDepth(pixels, 1))
  }

  function rgbToDecimalRgb(value) {
    return multiply(value, 255)
  }

  return {
    setPixels,
  }
}

module.exports = PixelController;
