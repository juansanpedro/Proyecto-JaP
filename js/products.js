let acceso = localStorage.getItem("catID");
const URL_JS = `${PRODUCTS_URL}${acceso}${EXT_TYPE}`; // realizar peticion 
const container = document.getElementById("container");
const ascendente = document.getElementById("asc");
const descendente = document.getElementById("desc");
const relevancia = document.getElementById("rel");
const ordenando = document.getElementById("ordenando");
let array = [];   

function sub(data){
    let sub = document.getElementById("sub");
    sub.innerHTML = `<p>Veras aqui todos los productos de la categoria ${data.catName}</p>` 
}

fetch(URL_JS)
.then(res=>{
    if (res.ok) {
 return res.json()
    }else{
    console.log("Error")
    }
})
.then(data =>{ 
    array = data.products;
    productos();
    sub(data);
    
}) 

function productos(){
for (const element of array) {
    container.innerHTML += `<div onclick="setCatID(${element.id})" class="list-group-item list-group-item-action cursor-active">
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
</div>`
}
}

 let prueba = document.getElementById("prueba");
 prueba.addEventListener("click",function(){
    console.log("funciona");
  array.sort((a, b) => {
      if (a.cost < b.cost) {return 1;}
      if (a.cost > b.cost) {return -1;}
      return 0;
    });
    productos();
 });
