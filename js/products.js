let acceso = localStorage.getItem("catID");
const URL = `${PRODUCTS_URL}${acceso}${EXT_TYPE}`; // realizar peticion
const container = document.getElementById("container");
let sortAsc1 = document.getElementById("sortAsc1");
let sortDesc2 = document.getElementById("sortDesc2");
let sortByCount3 = document.getElementById("sortByCount3");

let limpiar = document.getElementById("limpiar");
let filtrar = document.getElementById("filtrar");
let max = document.getElementById("max");
let min = document.getElementById("min");
let array1 = [];

function productos(){
  let htmlContentToAppend = "";
  for (const element of array) {
    htmlContentToAppend += `<div onclick="setCatID(${element.id})" class="list-group-item list-group-item-action cursor-active">
    <div class="row">
        <div class="col-3">
            <img src="${element.image}" alt="${element.description}" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${element.name} ${element.currency} ${element.cost}</h4>
                <small class="text-muted">${element.soldCount} artículos</small>
            </div>
            <p class="mb-1">${element.description}</p>
        </div>
    </div>
</div>`;
container.innerHTML = htmlContentToAppend;
  }
}

function sub(data) {
  let sub = document.getElementById("sub");
  sub.innerHTML = `<p>Veras aqui todos los productos de la categoria ${data.catName}</p>`;
}

fetch(URL)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      console.log("Error");
    }
  })
  .then((data) => {
    sub(data);
    array = data.products;
    productos();
  });

sortAsc1.addEventListener("click", function () {
  array.sort((a, b) => {
    if (a.cost < b.cost) {
      return -1;
    }
    if (a.cost > b.cost) {
      return 1;
    }
    return 0;
  });
  productos();
});

sortDesc2.addEventListener("click", function () {
  array.sort((a, b) => {
    if (a.cost < b.cost) {
      return 1;
    }
    if (a.cost > b.cost) {
      return -1;
    }
    return 0;
  });
  productos();
});

sortByCount3.addEventListener("click", function () {
  array.sort((a, b) => {
    if (a.soldCount > b.soldCount) {
      return -1;
    }
    if (a.soldCount < b.soldCount) {
      return 1;
    }
    return 0;
  });
  productos();
});

filtrar.addEventListener("click" , function(){ 
let min1 = min.value;
let max1 = max.value;
let min3 = undefined;
let max3 = undefined;

if ((min1 != undefined) && (min1 != "") && (parseInt(min1)) >= 0){
    min3 = parseInt(min1);
}
else{
    min3 = undefined;
}

if ((max1 != undefined) && (max1 != "") && (parseInt(max1)) >= 0){
    mix3 = parseInt(max1);
}
else{
    mix3 = undefined;
}
array = array.filter((value)=> (value.cost > min3 && value.cost < max3));
productos();
});

limpiar.addEventListener("click", function(){
    min.value = "";
    max.value = "";

    min = undefined;
    max = undefined;

    productos();
});

function setCatID(id) {
  localStorage.setItem("cat_ID", id);
  window.location = "product-info.html"
}
