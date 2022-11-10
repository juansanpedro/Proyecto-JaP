const carrito = "https://japceibal.github.io/emercado-api/user_cart/25801.json" //Realizar la Peticion 

// getElementById necesarios
const lista = document.getElementById("selector")
const tarjeta = document.getElementById("flexRadioDefault1")
const transferencia = document.getElementById("flexRadioDefault2")
const numero_cuenta = document.getElementById("numero_cuenta")
const numero_tarjeta = document.getElementById("numero_tarjeta")
const codigo_seguridad = document.getElementById("codigo_seguridad")
const vencimiento_tarjeta = document.getElementById("vencimiento_tarjeta")
const boton_guardar = document.getElementById("boton_guardar")


const tabla = document.getElementById("tabla")
const costos = document.getElementById("costos")
document.addEventListener('DOMContentLoaded', async function () {
  let dato = await getJSONData(carrito)

  tabla.innerHTML = ""
  tabla.innerHTML += `
  <thead>
  <tr>
    <th scope="col"></th>
    <th scope="col">Nombre</th>
    <th scope="col">Costo</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Subtotal</th>
  </tr>
</thead>`
  for (let articulos of dato.data.articles) {
    tabla.innerHTML += `
 <tbody>
  <tr>
    <th scope="row"><img style="width: 100px;" src="${articulos.image}" class="img-thumbnail"> </th>
    <td>${articulos.name}</td>
    <td>${articulos.currency} ${articulos.unitCost}</td>
    <td>
    <input oninput="calcular_costo(${articulos.unitCost}, this.value)" type="number" value="${articulos.count}" min="1" max="10" id="input"></td>
    <td><b>${articulos.currency}<span id="subtotal">${articulos.unitCost}</b> </span> </td>
  </tr>
  `
    costos.innerHTML += `
   <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Subtotal del producto (U$D)
   <span class="badge bg-dark " id="costoss">${articulos.unitCost}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Costo del envio (U$D)
    <span class="badge bg-dark " id="envios"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Total
    <span class="badge bg-dark" id="total"></span>
  </li>
</ul>
   `
  }

  const envio = document.getElementById("envios")
  
  // Calculando envio segun el %
   

  function calcular_envio() { 
    let subtotal = Number(document.getElementById("subtotal").textContent)
    let indice = lista.selectedIndex
    if (indice == 1)
      envio.innerHTML = subtotal * 0.15
    else if (indice == 2)
      envio.innerHTML = subtotal * 0.07
    else if (indice == 3)
      envio.innerHTML = subtotal * 0.05
  }

 lista.addEventListener("click", () => {
    calcular_envio();
    sumar_total()
  })

  function sumar_total() { 
    let subtotal = Number(document.getElementById("subtotal").textContent) //
    const total = document.getElementById("total")
    total.innerHTML = subtotal + Number(envio.textContent)
  }

  
});



function calcular_costo(parametro1, parametro2) {
  let costoss = document.getElementById("costoss")
  let subtotal = document.getElementById("subtotal");
  subtotal.innerHTML = parametro1 * parametro2
  costoss.innerHTML = parametro1 * parametro2
}


// funcion chequear utilizada en el cart.html

function chequear() {
  if (tarjeta.checked) {
    transferencia = true
    numero_cuenta= true
  } else if (transferencia.checked) {
    tarjeta = true
    numero_tarjeta= true
    codigo_seguridad = true
    vencimiento_tarjeta= true
  }
}


const calle = document.getElementById("calle")
const numero = document.getElementById("numero")
const esquina = document.getElementById("esquina")
const boton_comprar = document.getElementById("boton_comprar")

function validar (){
  indice = lista.selectedIndex;
  if( indice == null || indice == 0 ) {
    return false;
  }

  boton_comprar.addEventListener ("click", () => {
    validar();
    })

}
  
// funcion de validacion utilizada en la grupal 

(function () {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
        }else{
          showAlertSuccess()
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//MENSAJES DE ERROR Y CONFIRMACIÓN
function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

//FUNCIONES COMPLEMENTARIAS DE 'ENVIAR REGISTRO'

function verificarCampos() {
  return calle.value.trim().length > 1 && esquina.value.trim().length > 1 && numero.value.trim().length > 1;
}

//FUNCIÓN PRINCIPAL A LA CUAL APUNTA CART.HTML
function enviarRegistro() {
  return (verificarCampos && check.checked) ? showAlertSuccess() : showAlertError();
 }