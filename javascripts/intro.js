// Select the DOM element <canvas>
const canvas = document.querySelector('canvas')
// Context variable
const ctx = canvas.getContext('2d')


// // Filled T with rectangles
// ctx.fillRect(10, 10, 280, 20) // Horizontal line
// ctx.fillRect(140, 30, 20, 460) // Vertical line


// Stroked T with a path
ctx.beginPath()
ctx.moveTo(10,10)
ctx.lineTo(10,30)
ctx.lineTo(140,30)
ctx.lineTo(140,490)
ctx.lineTo(160,490)
ctx.lineTo(160,30)
ctx.lineTo(290,30)
ctx.lineTo(290,10)
ctx.closePath()
ctx.stroke()

// Circle (O)
ctx.beginPath()
ctx.arc(75, 100, 50, 0, 2*Math.PI, false)
ctx.stroke()

// D
ctx.beginPath()
ctx.moveTo(200, 50)
ctx.lineTo(200, 150)
ctx.arc(200, 100, 50, Math.PI/2, -Math.PI/2, true)
ctx.stroke()



function drawHeart(x,y,width,height,color="red",strokeColor="black") {
  ctx.fillStyle = color
  ctx.strokeStyle = strokeColor
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.arc(0.25*width+x, 0.25*height+y, 0.25*width, Math.PI-0.6, -0.1, false)
  ctx.arc(0.75*width+x, 0.25*height+y, 0.25*width, Math.PI+0.1, 0.6, false)
  ctx.lineTo(0.5*width+x,height+y)
  ctx.closePath()
  ctx.stroke()
  ctx.fill()
}

drawHeart(10,200,100,100, "yellow")
drawHeart(100,200,100,100, "orange", "rgba(0,0,0,0)")
drawHeart(200,200,100,100, "red")
