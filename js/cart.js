const usuarioCar = 25801;
const contenido = document.getElementById("car");

document.addEventListener("DOMContentLoaded", function () {
  let URL_cart = CART_INFO_URL + usuarioCar + EXT_TYPE;
  fetch(URL_cart)
    .then(function (response) {
      return response.json();
    })
    .then(function (item) {
      Carrito(item);
    });
});

function Carrito(data) {
  let htmlContentToAppend = "";
  for (const item of data.articles) {
    htmlContentToAppend += `<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Nombre</th>
        <th scope="col">Costo</th>
        <th scope="col">Cantidad</th>
        <th scope="col">SubTotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src="${item.image}"></td>
        <td>${item.name}</td>
        <td>${item.currency} ${item.unitCost}</td>
        <td> <input class="number whi"></td>
        <td><strong>${item.currency} ${item.unitCost}</strong></td>
      </tr>`
    ;
    contenido.innerHTML = htmlContentToAppend;
  }
}

