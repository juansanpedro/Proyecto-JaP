const URL_CART =
  "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let contenido = document.getElementById("car");

let costos = document.getElementById("costos"); // Entrega 6

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(URL_CART).then(function (resultObj) {
    if (resultObj.status == "ok") {
      CartObj = resultObj.data;
      Carrito(CartObj.articles);
      
    }
  });
});

function Carrito(array) {
  let htmlContentToAppend = "";
  for (let carts of array) {
    htmlContentToAppend += `<table class="table"> <br>
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
                    <td><img src="${carts.image}" style="width: 65px; height: 40px;" class="img-fluid"</td>
                    <td>${carts.name}</td>
                    <td>${carts.currency}${carts.unitCost}</td>
                    <td><input id="cant" oninput="subTotal(${carts.unitCost})"type="number" style="width:70px"></td>
                    <td><b>${carts.currency}<span id="resultado">${carts.unitCost}</b></td>
                </tr>
            </table>

    `
     costos.innerHTML += ` 
   <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Subtotal del producto (U$D)
    <span class="badge bg-primary rounded-pill" id="costos">${carts.unitCost}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Costo del envio (U$D)
    <span class="badge bg-primary rounded-pill" id="envios"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Total
    <span class="badge bg-primary rounded-pill" id="total"></span>
  </li>
</ul>
<br>
<button type="button" class="btn btn-primary" data-bs-toggle="modal">
    Agregar Metodo de pago
  </button>

   `
    ;
  }
  contenido.innerHTML = htmlContentToAppend;
}

function subTotal(precio) {
  let cant = document.getElementById("cant").value;
  resultado = precio * cant;
  return (document.getElementById("resultado").innerHTML = resultado);
}

