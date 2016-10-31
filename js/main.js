
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
    }
    var pass = document.getElementById('input-password').value;
    var contenedorPass =  document.getElementById('input-password').parentNode;
    var errorPass = document.createElement('span');
    if( pass == 0 ){
        passMensaje = document.createTextNode('Hola necesitamos tu contraseña');
        errorPass.appendChild(passMensaje);
        contenedorPass.appendChild(errorPass);
        return false;
    }else if(pass!= 123456 || pass!= 098754){
        errorAlerta = document.createTextNode('Hola no puedes usar 123456 ni 098754');
        errorPass.appendChild(passMensaje);
        contenedorPass.appendChild(errorPass);
        return false;
    } else if(pass.length < 6){
        errorAlerta = document.createTextNode('Revisa que tu contraseña sea mayor de 6 digitos');
        errorPass.appendChild(passMensaje);
        contenedorPass.appendChild(errorPass);            
    }
    var mail = document.getElementById('input-email').value;
    var mailContenedor = document.querySelector('.email-container');
    var malmail = document.createElement('span');
    var cosas = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(mail.length == 0){
        warning = document.createTextNode('ingresa tu email');
        malmail.appendChild(warning);
        mailContenedor.appendChild(malmail);
        return false;
    }else if ( !cosas.test(mail)){
        warning = document.createTextNode('ingresa caracteres validos');
        malmail.appendChild(warning);
        mailContenedor.appendChild(malmail);   
    }
    (function escogerBici(){
      var warningBici = document.createElement('span');
      var alertBici   =  document.getElementById('alertBici');
      var elijeqBici = document.getElementsByClassName('form-group')[1];
      warningBici.setAttribute('id','alertBici');
      if(alertBici != null){
          elijeqBici.removeChild(alertBici);
      }
      if( qbici == null || qbici == 0 ){
          var nodoTexqbici = document.createTextNode('Por favor escoge tu tipo de Bici');
          alertaBici.appendChild(nodoTextqbici);
          elijeqBici.appendChild(warningBici);
      }})();
  };
  

   /* var qbici = document.querySelector('select').value;
   if( qbici == null || qbici == 0 ) {
        alert('Hola elije una bici =)');
        return false;
    }
    return true;
} */









