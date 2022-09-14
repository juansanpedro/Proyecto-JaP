let acceso = localStorage.getItem("cat_ID");
const INFO = PRODUCT_INFO_URL + acceso + EXT_TYPE;
cont = document.getElementById("cont");
let array = [];

function juan() {
  let htmlContentToAppend = "";
  for (let i = 0 ; i < array.length; i++) {
    let element = array[i];
    htmlContentToAppend += `<div>"Hola"</div>` ;
    cont.innerHTML = htmlContentToAppend;
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

