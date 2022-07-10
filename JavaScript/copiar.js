
const botonCopiar = document.querySelector('.boton__copiar');

botonCopiar.addEventListener('click',function(){
    
    const texto = salidaTexto.value
    navigator.clipboard.writeText(texto)
})


