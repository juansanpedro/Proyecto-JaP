let info = localStorage.getItem("cat_ID");
const INFO = PRODUCT_INFO_URL + info + EXT_TYPE;
cont = document.getElementById("cont");
let array = [];
let lista = [];

function juan() {
  let htmlContentToAppend = "";
  for (let i = 0; i < lista.length; i++) {
    let elemento = lista[i];

    htmlContentToAppend += `<div>${elemento.name}</div>`;
    cont.innerHTML = htmlContentToAppend;
  }
  
} 


document.addEventListener("DOMContentLoaded", function () {
  getJSONData(INFO).then(function (resultObj) {
    if (resultObj.status === "ok") {
      lista = resultObj.data;
      juan();
    }
    console.log();
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
})*/
