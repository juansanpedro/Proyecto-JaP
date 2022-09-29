document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

let conexion = localStorage.getItem("usuario")
let parrafo = document.getElementById("inicio"); //entrega 4
parrafo.innerHTML = `<div class="btn-group">  
<button type="button" class="btn btn-warning">${conexion} </button>  
<button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
  <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
  <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
  <li><a class="dropdown-item" href="index.html">Cerrar Sesion</a></li>
</ul>
</div>`




