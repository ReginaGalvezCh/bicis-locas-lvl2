
function validateForm(){
    
    var inputname = document.getElementById('name').value;
    var containerName = document.querySelector('.name-container');
    var errorName= document.createElement('span');
    if( inputname == null || inputname.length == 0|| /^\s+$/.test(inputname) ) {
        errorAlerta = document.createTextNode('Parece que no has ingresado tu nombre');
        errorName.appendChild(errorAlerta);
        nameContainer.appendChild(errorName);
        return false;
    }else if (inputname.charAt(0).toUpperCase() !== inputname.charAt(0)){
        errorAlerta = document.createTextNode('La Primera Letra Debe Ser MaYusCuLa');
        errorName.appendChild(errorAlerta);
        nameContainer.appendChild(errorName); 
        return false;
    }else if (inputname.match(/[^a-zA-Z]+/g)){
        errorAlerta = document.createTextNode('Por favor solo ingresa letras');
        errorName.appendChild(errorAlerta);
        nameContainer.appendChild(errorName); 
        return false;
    }
    
    var inputLastName = document.getElementById('lastname').value;
    var containerLastName = document.querySelector('.lastname-container');
    var errorLastName = document.createElement('span');
    if( inputLastName == null || inputLastName.length == 0|| /^\s+$/.test(inputLastName) ) {
        errorAlerta = document.createTextNode('Parece que no has ingresado tu apellido');
        errorLastName.appendChild(errorAlerta);
        containerLastName.appendChild(errorLastName);
        return false;
    }else if(inputLastName.charAt(0).toUpperCase() !== inputLastName.charAt(0)){
        errorAlerta = document.createTextNode('La Primera Letra Debe Ser MaYusCuLa');
        errorLastName.appendChild(errorAlerta);
        containerLastName.appendChild(errorLastName);
        return false;
    }else if (inputLastName.match(/[^a-zA-Z]+/g)){
        errorAlerta = document.createTextNode('Por favor solo ingresa letras');
        errorLastName.appendChild(errorAlerta);
        nameContainer.appendChild(errorLastName); 
        return false;

    var pass = document.getElementById('input-password').value;
    var contenedorPass =  document.getElementById('input-password').parentNode;
    var errorPass = document.createElement('span');
    if( pass == 0 ){
        passMensaje = document.createTextNode('Hola necesitamos tu contraseña');
        errorContraseña.appendChild(passMensaje);
        contenedorPass.appendChild(errorPass);
        return false;
    }
    
    if(pass!= 123456 || pass!= 098754){
        if(pass.length > 6){
            return true;
        }else{
            alert('No puedes usar 123456 ni 098754');
            return false;
        }
    }else{
        alert('No puedes usar 123456 ni 098754');
        return false;
    }

    var mail = document.getElementById('input-email').value;
    if(mail.length == 0){
        alert('ingresa tu email');
        return false;
    }
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
        return false;
    }
    var qbici = document.querySelector('select').value;
    if( qbici == null || qbici == 0 ) {
        alert('Hola elije una bici =)');
        return false;
    }
   return true;
} 









