//window.onload = function(){
    //validar();
    function validar(){

        /*cambiará a falso cnd no se cumpla*/
        var correcto = true;
        var nombre = document.getElementById('contacto-nombre').value;
        var mail = document.getElementById('contacto-email').value;
        var cuerpo = document.getElementById('contacto-cuerpo').value;
        
        /*validar campos*/
        
        if(nombre.length == 0 ){
            correcto = false;
        }
        
        if(mail.length == " " ){
            correcto = false;
        }
        
        if(cuerpo.length == " " ){
            correcto = false;
        }
        
        /*si no está todo bien generaremos una alerta advirtiendo al usuario de que algunos datos no son los que esperamos.*/
        if(!correcto){
        alert('Algunos campos no están correctos, vuelva a revisarlos');
        }
        
        return correcto;
        }
    
    //document.getElementById("btn-enviar").onclick = validar;
//}








  