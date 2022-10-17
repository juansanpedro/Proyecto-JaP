const URL_CART =
  "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let contenido = document.getElementById("car");

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
    `;
  }
  contenido.innerHTML = htmlContentToAppend;
}

function subTotal(precio) {
  let cant = document.getElementById("cant").value;
  resultado = precio * cant;
  return (document.getElementById("resultado").innerHTML = resultado);
}
