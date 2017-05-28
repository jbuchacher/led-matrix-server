var PixelController = require('../PixelController')

function SocketController(io) {
  var pixelController = PixelController()

  io.on('connection', function(socket){
    console.log('Socket opened: ', socket)

    socket.on('disconnect', function(){
      console.log('Socket disconnected:')
    })

    socket.on('setPixel', function({ state, column, row, rgb }) {
      pixelController.setPixels(state, column, row, rgb)
    })
  })
}

module.exports = SocketController;
