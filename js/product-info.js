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

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(INFO).then(function (resultObj) {
    if (resultObj.status === "ok") {
      lista = resultObj.data;
      juan(lista);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(COMENT).then(function (resultObj) {
    if (resultObj.status === "ok") {
      lista = resultObj.data;
      for (const comentario of lista) {
        coment.innerHTML += `<li class="list-group-item comments-list">
        <p class = "comments-list-head"><b>${comentario.user}</b> - ${comentario.dateTime} -<span class="fa fa-star checked"> ${comentario.score}</p><span>
        <p class = "comments-list-data">${comentario.description}</p>
    </li>`;
      }
    }
  });
});

/*document.addEventListener("DOMContentLoaded",function(){
    fetch(INFO)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      console.log("Error");
    }
  })
  .then((data) => {
    array = data.res;
    juan();
  });
})

  for (let i = 0; i < imagen.length; i++) {
  let img = imagen[i];

}

*/
