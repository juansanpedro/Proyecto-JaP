let acceso = localStorage.getItem("catID");
const URL = `${PRODUCTS_URL}${acceso}${EXT_TYPE}` // realizar peticion 
const container = document.getElementById("container")


function productos(array){
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

fetch(URL)
.then(res=>{
    if (res.ok) {
 return res.json()
    }else{
    console.log("Error")
    }
})
.then(data =>{productos(data.products)}) 

fetch(URL)
.then(res=>{
    if (res.ok) {
 return res.json()
    }else{
    console.log("Error")
    }
})
.then(data =>{sub(data.catName)})

function sub(data){
    let sub = document.getElementById("sub");
    sub.innerHTML += `<p>Veras aqui todos los productos de la categoria ${data}</p>` 
   
}


