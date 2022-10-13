let cart = localStorage.getItem("user");
const URL_CART = "https://japceibal.github.io/emercado-api/user_cart/" + cart + EXT_TYPE;
carrito = document.getElementById("carrito");


function carr() {
    let htmlContentToAppend = "";
    for (const cart of lista.articles) {
      htmlContentToAppend += `<div> Hola ${cart.name} car</div>`;
      carrito.innerHTML = htmlContentToAppend;
    }
  }   

  document.addEventListener("DOMContentLoaded", function () {
    getJSONData(URL_CART).then(function (resultObj) {
      if (resultObj.status === "ok") {
        lista = resultObj.data;
        carr(lista); 
      }
    });
  });
  