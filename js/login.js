function validar(){
    let email = document.getElementById("email");
    let contraseña = document.getElementById("contraseña");

    if((email.value.length ===0 )|| (contraseña.value.length ===0)){
        console.log("Algunos de los campos estan vacios");
    }else{
        location.href = "index.html";
    }
}

let ingreso = document.getElementById("boton")   
ingreso.addEventListener("click",function(){
    validar();
})