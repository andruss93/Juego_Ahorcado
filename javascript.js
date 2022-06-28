const contenedorDePalabra = document.getElementById ('contenedor-palabras')
const inicio = document.getElementById('inicio')
const palabrasUsadas = document.getElementById('letras-usadas')
const palabras =['casa','perro','gato','elefante']
const agregarPalabra = document.getElementById('agregar-palabra')



let seleccionarPalabra
let usarLetra
let errores
let aciertos


const adiccionarLetra = letter => {
    const letterElement = document.createElement('span')
    letterElement.innerHTML = letter.toUpperCase()
    palabrasUsadas.appendChild(letterElement)
    
}

const finJuego = () => {
    document.removeEventListener('keydown',LetraEvento)
    inicio.style.display ='block'
}



const letraCorrecta = letter => {
    const {children} = contenedorDePalabra
    for (var i = 0; i<children.length;i++){
        if (children[i].innerHTML === letter){ 
            children[i].classList.toggle('hidden')
            aciertos++
        }
    }
    if (aciertos === seleccionarPalabra.length){        
        finJuego ()
        alert ("Ganaste... felicidades...!!!")
    }
    
}


const letraIncorrecta = () => {
    addBodyPart (bodyParts[errores])
    errores++
    if(errores === bodyParts.length){
    alert ('Haz perdido')
    finJuego()}
}




const letraInput = letter =>{
    if(seleccionarPalabra.includes(letter)){
        letraCorrecta (letter)
    } else {
        letraIncorrecta ()
    }
    adiccionarLetra (letter)
}

const LetraEvento = event=>{
    let nuevaLetra = event.key.toUpperCase()
    if(nuevaLetra.match(/^[a-zñ]$/i)&& !usarLetra.includes(nuevaLetra)){
        letraInput(nuevaLetra)
    }

}

const dibujarPalabra = () =>{
    seleccionarPalabra.forEach(letter=> {
        const letterElement = document.createElement('span')
        letterElement.innerHTML = letter.toUpperCase()
        letterElement.classList.add('letter')
        letterElement.classList.add('hidden')
        contenedorDePalabra.appendChild(letterElement)
        
    });

}


const palabraAleatoria = ()=>{
    const palabra = palabras [Math.floor((Math.random()*palabras.length))].toUpperCase()
    seleccionarPalabra = palabra.split ('')
}







const IniciarJuego = () =>{
    usarLetra = []
    errores = 0
    aciertos = 0
    contenedorDePalabra.innerHTML = ''
    palabrasUsadas.innerHTML = ''
    inicio.style.display ='none'
    agregarPalabra.style.display ='none'
    dibujarAhorcado ()
    palabraAleatoria ()
    dibujarPalabra ()
    document.addEventListener('keydown',LetraEvento)
}

inicio.addEventListener('click',IniciarJuego)