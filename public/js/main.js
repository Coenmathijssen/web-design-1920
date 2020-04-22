import { startSubtitles } from './subtitles.js'

// Make connection
const socket = io()

const button = document.getElementById('play-button')

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
  startSubtitles()

  window.setTimeout(() => {
    console.log('jump scare')
    window.navigator.vibrate(1500)
  }, 203000)

  window.setTimeout(() => {
    console.log('alarm')
    window.navigator.vibrate([500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500])
  }, 223500)

  window.setTimeout(() => {
    console.log('alarm 2')
    window.navigator.vibrate([500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500, 500, 1500])
  }, 313000)
})

document.getElementById('laptop').addEventListener('click', () => {
  document.getElementById('laptop').style = 'display: none'
})

document.getElementById('mobile').addEventListener('click', () => {
  document.getElementById('mobile').style = 'display: none'
})
