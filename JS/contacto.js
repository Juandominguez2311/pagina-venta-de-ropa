let nombre = document.getElementById('nombreContacto');
let asunto = document.getElementById('AsuntoContacto');

const form = document.getElementById('form');
let error = document.getElementById('error');

form.addEventListener('submit',(e) =>{
    let mensajeError = [];
    //validacion 
    if(nombre.value === ''|| nombre.value == null ){
        mensajeError.push ("Necesita ingresar un nombre");
        
        nombre.focus();
    }
    if(asunto.value === ''|| asunto.value == null ){
        mensajeError.push ("Necesita ingresar un asunto");
        asunto.focus();
    }
    if(mensajeError.length >0){
        e.preventDefault();
        error.innerText = mensajeError.join(' , ')
        error.style.color="red"
        error.style.fontFamily="Helvetica"
        error.style.fontSize="20px"
    }
})