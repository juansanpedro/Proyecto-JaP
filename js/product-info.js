let info = localStorage.getItem("cat_ID");
const INFO = PRODUCT_INFO_URL + info + EXT_TYPE;
let cont = document.getElementById("cont");
let lista = [];

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(INFO).then(function (resultObj) {
    if (resultObj.status === "ok") {
      lista = resultObj.data;
      juan(lista);
    }
  });
});

function juan(elemento) {
  let htmlContentToAppend = "";
  htmlContentToAppend += `<div><br><h3>${elemento.name}<br></h3> <hr>
    <p> <strong> Precio </strong> <br>${elemento.currency} ${elemento.cost}</p>
    <p> <strong> Descripción </strong> <br>${elemento.description}</p>
    <p> <strong> Categoria </strong> <br>${elemento.category}</p>
    <p> <strong> Cantidad Vendidos </strong> <br>${elemento.soldCount}</p>
    </div>`;
  cont.innerHTML = htmlContentToAppend;
}

for (let i = 0; i < imgen.length; i++) {
  let img = imagen[i];
  
}

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
})*/
