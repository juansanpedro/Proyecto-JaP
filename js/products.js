const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const container = document.getElementById("container")

function productos(array){
for (const auto of array) {
    container.innerHTML += `<div onclick="setCatID(${auto.id})" class="list-group-item list-group-item-action cursor-active">
    <div class="row">
        <div class="col-3">
            <img src="${auto.image}" alt="${auto.description}" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${auto.name} ${auto.currency} ${auto.cost}</h4>
                <small class="text-muted">${auto.soldCount} artículos</small>
            </div>
            <p class="mb-1">${auto.description}</p>
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

/*

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
*/