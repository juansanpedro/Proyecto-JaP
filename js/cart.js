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
    htmlContentToAppend += `<table class="table table-dark"> <br>
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
                    <td><img src="${carts.image}" style="width: 65px; height: 40px;"  class="img-fluid"</td>
                    <td>${carts.name}</td>
                    <td>${carts.currency}${carts.unitCost}</td>
                    <td><input id="cant" oninput="subTotal(${carts.unitCost})"type="number" class="InputCtd"></td>
                    <td><b><p>${carts.currency}<span id="resultado">${carts.unitCost}</p></b></td>
                    <div>
                </tr>
            </table>
    </div>
    `;
  }
  contenido.innerHTML = htmlContentToAppend;
}

function subTotal(precio) {
  let ctd = document.getElementById("cant").value;
  resultado = precio * ctd;
  return (document.getElementById("resultado").innerHTML = resultado);
}
