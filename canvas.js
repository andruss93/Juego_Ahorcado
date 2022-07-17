let canvas= document.getElementById('canvas')
let ctx = canvas.getContext('2d')
//ctx.canvas.width = 0
//ctx.canvas.height = 0


const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
]

const addBodyPart = bodyPart => {
    ctx.fillStyle = "red"
    ctx.fillRect(...bodyPart)
}

function dibujarAhorcado (){
    ctx.canvas.width = 400
    ctx.canvas.height = 400
    ctx.scale (40,40)
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle = 'black'
    ctx.fillRect (0,7,4,1)
    ctx.fillRect (1,0,1,8)
    ctx.fillRect (2,0,3,1)
    ctx.fillRect (4,1,1,1)
}

/*function dibujarLineas(){
    canvas.lineWidth = 6
    canvas.lineCap = "round"
    canvas.lineJoin ="round"
    canvas.fillStyle = 'green'
    canvas.beginPath()

    var largo = 5
    var ancho = 600/largo
    for(var i =0; i< seleccionarPalabra.length;i++){
        ctx.canvas.moveTo(500+(ancho*i),640)
        ctx.canvas.lineTo(550+(ancho*i),640)
    }
       ctx.canvas.stroke()
       ctx.canvas.closePath()
       console.log(seleccionarPalabra)
}
dibujarLineas(largo)
*/
