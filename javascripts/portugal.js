const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Green rectangle
ctx.fillStyle = "green"
ctx.fillRect(0,0,0.4*300,200)

// Red rectangle
ctx.fillStyle = "red"
ctx.fillRect(0.4*300,0,0.6*300,200)

// Circle
const radius = 50
const xCenter = 0.4*300
const yCenter = 100
ctx.strokeStyle = "gold"
ctx.lineWidth = 5
ctx.beginPath()
ctx.arc(xCenter,yCenter,radius,0,2*Math.PI)
ctx.stroke()

// Vertical line
ctx.beginPath()
ctx.moveTo(xCenter, yCenter-radius)
ctx.lineTo(xCenter, yCenter+radius)
ctx.stroke()

// Horizontal line
ctx.beginPath()
ctx.moveTo(xCenter-radius, yCenter)
ctx.lineTo(xCenter+radius, yCenter)
ctx.stroke()

// Diagonal line 1
const angle1 = Math.PI / 4 // 45 degrees
ctx.beginPath()
ctx.moveTo(xCenter-radius*Math.cos(angle1), yCenter-radius*Math.sin(angle1))
ctx.lineTo(xCenter+radius*Math.cos(angle1), yCenter+radius*Math.sin(angle1))
ctx.stroke()

// Diagonal line 2
const angle2 = -Math.PI / 4 // -45 degrees
ctx.beginPath()
ctx.moveTo(xCenter-radius*Math.cos(angle2), yCenter-radius*Math.sin(angle2))
ctx.lineTo(xCenter+radius*Math.cos(angle2), yCenter+radius*Math.sin(angle2))
ctx.stroke()

// Text
ctx.fillStyle = 'black'
ctx.font = '50px Arial'
ctx.textAlign = 'center'
ctx.fillText('Portugal', 150, 200+50+10)

// Image
let blasonImg = new Image() // Creation of a new image
blasonImg.src = "https://upload.wikimedia.org/wikipedia/commons/1/18/Blason_Portugal_1485.svg"
blasonImg.onload = function() {
  ctx.drawImage(blasonImg, 85,68, 70, 70*660/600)
}

