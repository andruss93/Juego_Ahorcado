const contenedorDePalabra = document.getElementById ('contenedor-palabras')
const inicio = document.getElementById('inicio')
const palabrasUsadas = document.getElementById('letras-usadas')
const palabras =['alura','web','programacion','javascript','html','canva','diseño','css','oracle','estudiante']
const agregarPalabra = document.getElementById('agregar-palabra')
const inputPalabra = document.getElementById('nuevaPalabra')


let seleccionarPalabra
let usarLetra
let errores
let aciertos


const adiccionarLetra = letter => {
    const letterElement = document.createElement('span')
    letterElement.innerHTML = letter.toUpperCase()
    palabrasUsadas.appendChild(letterElement)
    
}
const letraIncorrecta = () => {
    addBodyPart (bodyParts[errores])
    errores++
    if(errores === bodyParts.length){
    alert ('Haz perdido la palabra era ' + seleccionarPalabra)
    finJuego()
}
}

const finJuego = () => {
    document.removeEventListener('keydown',letraEvento)
    inicio.style.display = 'block'
}


const letraCorrecta = letter => {
    const {children} = contenedorDePalabra
    for (var i = 0; i < children.length;i++){
        if (children[i].innerHTML === letter){ 
            children[i].classList.toggle('hidden')
            aciertos++
        }
    }
    if (aciertos === seleccionarPalabra.length){
        alert('haz ganado la palabra era' + seleccionarPalabra)       
        finJuego()
    }
    
}

const letraInput = letter => {
    if(seleccionarPalabra.includes(letter)){
        letraCorrecta (letter)
    } else {
        letraIncorrecta ()
    }
    adiccionarLetra(letter)
    usarLetra.push(letter)
}

const letraEvento = event=>{
    let nuevaLetra = event.key.toUpperCase()
    if(nuevaLetra.match(/^[a-zñ]$/i) && !usarLetra.includes(nuevaLetra)){
        letraInput(nuevaLetra)
    }
}

const dibujarPalabra = () =>{
    seleccionarPalabra.forEach(letter => {
        const letterElement = document.createElement('span')
        letterElement.innerHTML = letter.toUpperCase()
        letterElement.classList.add('letter')
        letterElement.classList.add('hidden')
        contenedorDePalabra.appendChild(letterElement)
        
    });

}


const palabraAleatoria = ()=>{
    var palabra = palabras [Math.floor((Math.random()*palabras.length))].toUpperCase()
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
    inputPalabra.style.display="none"
    dibujarAhorcado ()
    palabraAleatoria ()
    dibujarPalabra ()
    document.addEventListener('keydown',letraEvento)
}

function agregarPalabras () {
    let palabraCapturar = document.getElementById('nuevaPalabra').value
    palabraCapturar = palabras.push(palabraCapturar)
    inputPalabra.style.display="block"
    inicio.style.display ='none'
    if ( palabraCapturar.length > 1 ){
    alert (palabras[-1])
    }
}

inicio.addEventListener('click',IniciarJuego)

agregarPalabra.addEventListener('click',agregarPalabras)