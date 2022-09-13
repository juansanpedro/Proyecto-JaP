let acceso = localStorage.getItem("cat_ID");
container = document.getElementById("container");
const URL_INFO = `${PRODUCT_INFO_URL}${acceso}${EXT_TYPE}`;
let array = [];

function juan() {
  let htmlContentToAppend = "";
  for (i = 0; i< array.length; i++) {
    let element = array[i];
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


fetch(URL_INFO)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      console.log("Error");
    }
  })
  .then((data) => {
    array = data.products;
    juan();
  });

