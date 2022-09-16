let info = localStorage.getItem("productID");
const INFO = PRODUCT_INFO_URL + info + EXT_TYPE;
let cont = document.getElementById("cont");
let lista = [];

function juan(elemento) {
  let htmlContentToAppend = "";
  htmlContentToAppend += `<div><br><h3>${elemento.name}<br></h3> <hr>
    <p> <strong> Precio </strong> <br>${elemento.currency} ${elemento.cost}</p>
    <p> <strong> Descripción </strong> <br>${elemento.description}</p>
    <p> <strong> Categoria </strong> <br>${elemento.category}</p>
    <p> <strong> Cantidad Vendidos </strong> <br>${elemento.soldCount}</p>
    <div id="produimg"> <img src="${elemento.images[0]}"> <img src="${elemento.images[1]}"> <img src="${elemento.images[2]}"> <img src="${elemento.images[4]}"> </div> 
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
