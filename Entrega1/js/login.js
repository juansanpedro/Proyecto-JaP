

let alertae = document.getElementById("alertae");
let alertac = document.getElementById("alertac");

function showAlertError1(){
    alertae.innerHTML = `<p>ingresa el e-mail</p>` 
    
}
function showAlertError2(){
    
    alertac.innerHTML = `<p>ingresa la contraseña</p>` 
}


function validar(){
    let email = document.getElementById("email");
    let contraseña = document.getElementById("contraseña");

    if((email.value.length ===0 )){
        showAlertError1();
    }else if((contraseña.value.length ===0)){
        showAlertError2();
    }else{
        location.href = "index.html";  //si no le funciona prode pone index.html
        showAlertSuccess();
    }
}

let ingresar = document.getElementById("boton")   
ingresar.addEventListener("click",function(){
    validar();
})

const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", (evt) => {
  // Si tenemos texto ingresado en el input, lo guardamos en el localStorage
  if (inputText.value) localStorage.setItem("text", inputText.value);
});