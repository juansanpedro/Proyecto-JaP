const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const container = document.getElementById("container")

function products(array){
for (const auto of array) {
    container.innerHTML += `<div onclick="setCatID(${auto.id})" class="list-group-item list-group-item-action cursor-active">
    <div class="row">
        <div class="col-3">
            <img src="${auto.image}" alt="${auto.description}" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${auto.name}</h4>
                <small class="text-muted">${auto.productCount} artículos</small>
            </div>
            <p class="mb-1">${auto.description}</p>
        </div>
    </div>
</div>`
}
}