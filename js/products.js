const url = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const container = document.getElementById("container")

.then(url)
.then((respuesta)=>respuesta.json())
.then((products)=>{
    console.log(products)
});