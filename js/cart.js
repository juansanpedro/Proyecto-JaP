const usuarioId = 25801;
const contenido = document.getElementById("car");

document.addEventListener("DOMContentLoaded", function () {
  let URL_CART = CART_INFO_URL + usuarioId + EXT_TYPE;
  fetch(URL_CART)
    .then(function (response) {
      return response.json();
    })
    .then(function (item) {
      hola(item);
    });
});

function hola(data) {
  let htmlContentToAppend = "";
  for (const item of data.articles) {
    htmlContentToAppend += `<div (${item.id})" class="col-md-4">
    <div class="card mb-4 list-group-item-action cursor-active">
    <img class="bd-placeholder-img card-img-top" src="${cart.image}" class="img-thumbnail">
    <p class="m-3">${item.name}</p>
     </div>
    </div>`
    ;
    contenido.innerHTML = htmlContentToAppend;
  }
}
