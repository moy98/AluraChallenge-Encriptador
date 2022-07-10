
const botonEncriptar = document.querySelector('.boton__encriptar');
const entradaTexto = document.querySelector('.entrada__texto');
const error = /[A-Z0-9~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
const imagen = document.querySelector('.salida__texto')
const salidaTexto = document.querySelector('.salida__texto');

botonEncriptar.addEventListener('click',function(){
    
    const texto = entradaTexto.value;
    
    if ((texto.match(error) == texto.match(error))){
        
        salidaTexto.value = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g, "ai").replace(/o/g,"ober").replace(/u/g,"ufat"); 
        imagen.style.backgroundImage = 'none'

    } else{
        salidaTexto.value = '';
        alert('El texto contiene caracteres no permitidos')
        
    }
  
})
