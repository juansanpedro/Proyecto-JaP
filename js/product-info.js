let acceso = localStorage.getItem("cat_ID");
const INFO = PRODUCT_INFO_URL + acceso + EXT_TYPE;
let array = [];
container = document.getElementById("cont");

function juan() {
  let htmlContentToAppend = "";
  for (let i = 0 ; i < array.length; i++) {
    let element = array[i];
    htmlContentToAppend += `<h3>${element.name}</h3>` 
    container.innerHTML = htmlContentToAppend;
  }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(INFO).then(function(resultObj){
        if (resultObj.status === "ok"){
            array = resultObj.data
            juan()
           }
    });
     })



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

