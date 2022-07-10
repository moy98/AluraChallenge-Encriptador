
const botonDesencriptar = document.querySelector('.boton__desencriptar')

botonDesencriptar.addEventListener('click',function(){
    
    const texto = entradaTexto.value;
    
    if ((texto.match(error) == texto.match(error))){
        
        salidaTexto.value = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g, "a").replace(/ober/g,"o").replace(/ufat/g,"u"); 
        

    } else{
        salidaTexto.value = '';
        
        alert('El texto contiene caracteres no permitidos')
    }
  
})