
function validateForm(){
    
    var inputname = document.getElementById('name').value;
    var containerName = document.querySelector('.name-container');
    var errorName= document.createElement('span');
    if( inputname == null || inputname.length == 0|| /^\s+$/.test(inputname) ) {
        errorAlerta = document.createTextNode('Debe ingresar su nombre');
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
    


    var inputlastname = document.getElementById('lastname').value;
    if( inputlastname == null || inputlastname.length == 0|| /^\s+$/.test(inputlastname) ) {
        alert('Parece que no has ingresado tu apellido');
        return false;
    }else if(inputlastname.charAt(0).toUpperCase() !== inputlastname.charAt(0)){
        alert('La primera letra de tu apellido debe de ser mayuscula');
        return false;
    }

    var pass = document.getElementById('input-password').value;
    if( pass == 0 ){
        alert('ingresa una contraseña');
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









