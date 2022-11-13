const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL =
  "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL =
  "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
};

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
};

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = "ok";
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = "error";
      result.data = error;
      hideSpinner();
      return result;
    });
};



let storage = localStorage.getItem("usuario");
let parrafo = document.getElementById("inicio");

parrafo.innerHTML = `<div class="btn-group">  
<button type="button" class="btn btn-warning">${storage} </button>  
<button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
  <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
  <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
  <li><a id = "removeUsuario" class="dropdown-item" href="index.html" >Cerrar Sesión</a></li>
</ul>
</div>`;


removeUsuario.addEventListener("click", function () {
  //Creo dicha funcion para que al cerrar sesion, desaparezca usuario con el que me logee
  localStorage.removeItem("usuario");
});