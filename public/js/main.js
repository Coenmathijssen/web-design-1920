// Make connection
const socket = io()

const button = document.getElementById('play-button')

function vibrate (ms) {
  navigator.vibrate(ms)
}

// function vibratePattern () {
//   console.log('starting')
//   document.getElementById('play-button').textContent = 'playing'
//   document.getElementById('video').play()
//   window.setTimeout(() => {
//     console.log('joe')
//     window.navigator.vibrate(1500)
//   }, 53500)

//   window.setTimeout(() => {
//     window.navigator.vibrate(500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500)
//   }, 56000)
  window.navigator.vibrate([0, 53500, 1500, 18000, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 56000, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500])
// }

// Emit events
button.addEventListener('click', () => {
  socket.emit('vibrate')
})

// Listen for events
// Listening for een chat output
socket.on('vibrate', () => {
  console.log('starting')
  document.getElementById('play-button').textContent = 'playing'
  document.getElementById('video').play()
  window.setTimeout(() => {
    console.log('joe')
    window.navigator.vibrate(1500)
  }, 53500)

  window.setTimeout(() => {
    console.log('alarm')
    window.navigator.vibrate([500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500])
  }, 73000)

  window.setTimeout(() => {
    console.log('alarm 2')
    window.navigator.vibrate([500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500])
  }, 163000)
})

// button.addEventListener('click', vibratePattern)

// buttonSec.addEventListener('click', vibratePattern)
