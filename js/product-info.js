let info = localStorage.getItem("productID");
const INFO = PRODUCT_INFO_URL + info + EXT_TYPE;
const COMENT = PRODUCT_INFO_COMMENTS_URL + info + EXT_TYPE;
let cont = document.getElementById("cont");
let coment = document.getElementById("coment");
let lista = [];

function juan(elemento) {
  let htmlContentToAppend = "";
  htmlContentToAppend += `<div><br><h3>${elemento.name}<br></h3> <hr>
    <p> <strong> Precio </strong> <br>${elemento.currency} ${elemento.cost}</p>
    <p> <strong> Descripción </strong> <br>${elemento.description}</p>
    <p> <strong> Categoria </strong> <br>${elemento.category}</p>
    <p> <strong> Cantidad Vendidos </strong> <br>${elemento.soldCount}</p>
    <p> <strong> Imagenes Ilustrativas </strong><br></p>
    <div class="col-3 d-flex">
    <img src="${elemento.images[0]}" alt="${elemento.description}" class="img-thumbnail img">
    <img src="${elemento.images[1]}" alt="${elemento.description}" class="img-thumbnail img">
    <img src="${elemento.images[2]}" alt="${elemento.description}" class="img-thumbnail img">
    <img src="${elemento.images[3]}" alt="${elemento.description}" class="img-thumbnail img">
    </div>`;
  cont.innerHTML = htmlContentToAppend;
}

// Entrega 4
function cargarRelacionados(id){
  localStorage.setItem("productID", id);
  window.location = "product-info.html"
}

// Entrega 4
let relacion = document.getElementById("relacion");


// Entrega 4
function rel() {
  let htmlContentToAppend = "";
  for (const rela of lista.relatedProducts) {
    htmlContentToAppend += `<div onclick="cargarRelacionados(${rela.id})" class="col-md-4">
    <div class="card mb-4 list-group-item-action cursor-active">
    <img class="bd-placeholder-img card-img-top" src="${rela.image}" class="img-thumbnail">
    <p class="m-3">${rela.name}</p>
     </div>
    </div>`;
    relacion.innerHTML = htmlContentToAppend;
  }
}    

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(INFO).then(function (resultObj) {
    if (resultObj.status === "ok") {
      lista = resultObj.data;
      juan(lista);
      rel(lista); // Entrega 4
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(COMENT).then(function (resultObj) {
    if (resultObj.status === "ok") {
      lista = resultObj.data;
      for (const comentario of lista) {
        coment.innerHTML += `<li class="list-group-item comments-list">
        <p class = "comments-list-head"><b>${comentario.user}</b> - ${
          comentario.dateTime
        }  
        <span class="fa fa-star ${
          comentario.score >= 1 ? "checked" : ""
        }"></span>
        <span class="fa fa-star ${
          comentario.score >= 2 ? "checked" : ""
        }"></span>
        <span class="fa fa-star ${
          comentario.score >= 3 ? "checked" : ""
        }"></span>
        <span class="fa fa-star ${
          comentario.score >= 4 ? "checked" : ""
        }"></span>
        <span class="fa fa-star ${
          comentario.score >= 5 ? "checked" : ""
        }"></span>
        <p class = "comments-list-data">${comentario.description}</p>
    </li>`;
      }
    }
  });
});








const botoninfo = document.getElementById("botonInfo"); //desafiate
let cuerpo = document.getElementById("cuerpo"); //desafiate

let usuario = localStorage.getItem("usuario"); //desafiate

const fecha = new Date().toLocaleString(); //desafiate

botoninfo.addEventListener("click", (evt) => {
  if (cuerpo.value) localStorage.setItem("com", cuerpo.value); //desafiate
  if (puntaje.value) localStorage.setItem("punt", cuerpo.value); //desafiate
});
let puntaje = document.getElementById("puntaje"); //desafiate

let conexionComentario = localStorage.getItem("com"); //desafiate
let listacoment = document.getElementById("coment"); //desafiate

//desafiate
listacoment.innerHTML = `<li class="list-group-item comments-list"> 
  <p class = "comments-list-head"><b>${usuario}</b> - ${fecha} -
    <span class="fa fa-star ${puntaje.score >= 1 ? "checked" : ""}"></span>
      <span class="fa fa-star ${puntaje.score >= 2 ? "checked" : ""}"></span>
        <span class="fa fa-star ${puntaje.score >= 3 ? "checked" : ""}"></span>
          <span class="fa fa-star ${
            puntaje.score >= 4 ? "checked" : ""
          }"></span>
          <span class="fa fa-star ${
            puntaje.score >= 5 ? "checked" : ""
          }"></span>
  <p class = "comments-list-description">${conexionComentario}</p>
    </li>`;
