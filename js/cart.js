let cart = localStorage.getItem("user");
URL_CART = CART_INFO_URL + cart + EXT_TYPE ;

 function cargarCarrito(id){
    localStorage.setItem("user", id);
    window.location = "cart.html"
  }
  

function rel() {
    let htmlContentToAppend = "";
    for (const rela of lista.articles) {
      htmlContentToAppend += `<div 
      </div>`;
      relacion.innerHTML = htmlContentToAppend;
    }
  }   

 


  document.addEventListener("DOMContentLoaded", function () {
    getJSONData(URL_CART).then(function (resultObj) {
      if (resultObj.status === "ok") {
        lista = resultObj.data;
        }
    });
  });