let alertae = document.getElementById("alertae");
let alertac = document.getElementById("alertac");


//Funcion de alerta 
function showAlertError1(){
    alertae.innerHTML = `<p>ingresa el e-mail</p>` 
    
}
function showAlertError2(){
    
    alertac.innerHTML = `<p>ingresa la contraseña</p>` 
}

//Funcion validar email y contraseña 
function validar(){
    let email = document.getElementById("email");
    let contraseña = document.getElementById("contraseña");

    if((email.value.length ===0 )){
        showAlertError1();
    }else if((contraseña.value.length ===0)){
        showAlertError2();
    }else{
        location.href = "e_comerce.html";  // 
        showAlertSuccess();
    }
}

let ingresar = document.getElementById("boton") //Al dar ingresar se validan los campos validar();
ingresar.addEventListener("click",function(){
    validar();
})

  // ¡Desafíate!
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }

// getElementById

const email = document.getElementById("email");
const boton = document.getElementById("boton");


boton.addEventListener("click", (evt) => {
  // Si tenemos texto ingresado en el input, lo guardamos en el localStorage
  if (email.value) localStorage.setItem("usuario", email.value);
});






