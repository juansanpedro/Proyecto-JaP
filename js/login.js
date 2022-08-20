function validar(){
    let email = document.getElementById("email");
    let contraseña = document.getElementById("contraseña");

    if((email.value.length ===0 )|| (contraseña.value.length ===0)){
        console.log("Algunos de los campos estan vacios")
    }else{
        location.href = "http://127.0.0.1:5500/index.html";
    }
}

let ingreso = document.getElementById("Ingresar")   
ingreso.addEventListener("click",function(){
    validar();
})