import { startSubtitles } from './subtitles.js'

// Make connection
const socket = io()

// Listen for events
// Listening for een chat output
socket.on('vibrate', () => {
  console.log('starting')
  document.getElementById('video').play()

  document.getElementById('laptop-2').classList.remove('visible')

  startSubtitles()

  if ('vibrate' in navigator) {
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
  }
})

document.getElementById('laptop-btn').addEventListener('click', () => {
  document.getElementById('laptop-1').style = 'display: none'
  document.getElementById('laptop-2').classList.add('visible')
})

document.getElementById('play-btn').addEventListener('click', () => {
  // Start video and vibration
  socket.emit('vibrate')

  document.getElementById('mobile').style = 'display: none'
})
