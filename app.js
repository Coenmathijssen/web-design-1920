const express = require('express')
const app = express()
const path = require('path')
const socket = require('socket.io')

const server = app.listen(3000, '192.168.2.5', () => {
  console.log('listening on port: 3000')
})

// // Setting up port for express to use
// const server = app.listen(process.env.PORT || 3000, () => {
//   console.log('listening on port: ', process.env.PORT)
// })

const io = socket(server)

//  Serve html, css and js files in the static directory
app.use(express.static(path.join(__dirname, 'dist')))

// Basic router setup, will seperate later
app.get('/', (req, res) => {
  res.render('index.html')
})

io.on('connection', (socket) => {
  console.log('device connected')
  // Handle chat event
  socket.on('vibrate', () => {
    console.log('joe')
    io.sockets.emit('vibrate')
  })
})
