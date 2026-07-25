
const params = new URLSearchParams(window.location.search);

const slug = params.get("id");

fetch("data/products.json")
.then(r=>r.json())
.then(data=>{

const p=data.find(x=>x.slug===slug);

if(!p){

document.getElementById("product").innerHTML="<h2>Không tìm thấy sản phẩm</h2>";

return;

}

document.getElementById("product").innerHTML=`

<h1>${p.name}</h1>

<img src="${p.image}" style="width:400px">

<h2>${p.price}</h2>

<p><b>Pin:</b> ${p.battery}</p>

<p><b>Quãng đường:</b> ${p.distance}</p>

<p><b>Tốc độ:</b> ${p.speed}</p>

<p><b>Bảo hành:</b> ${p.warranty}</p>

<p>${p.description}</p>

`;

});
