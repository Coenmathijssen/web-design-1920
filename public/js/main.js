// Make connection
const socket = io()

const button = document.getElementById('button')
const buttonSec = document.getElementById('button-sec')

function vibrate(ms) {
  navigator.vibrate(ms)
}

function vibratePattern () {
  window.navigator.vibrate([100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100])
}

// Emit events
button.addEventListener('click', () => {
  socket.emit('vibrate')
})

// Listen for events
// Listening for een chat output
socket.on('vibrate', (data, username) => {
  document.getElementById('heading').textContent = 'joe'
  window.navigator.vibrate([100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100])
})

button.addEventListener('click', ()=>{vibrate(1000)})

buttonSec.addEventListener('click', vibratePattern)
