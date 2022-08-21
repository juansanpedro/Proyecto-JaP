function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validar(){
    let email = document.getElementById("email");
    let contraseña = document.getElementById("contraseña");

    if((email.value.length ===0 )|| (contraseña.value.length ===0)){
        showAlertError();
    }else{
        location.href = ("http://127.0.0.1:5500/index.html");
        showAlertSuccess();
    }
}

let ingresar = document.getElementById("boton")   
ingresar.addEventListener("click",function(){
    validar();
})