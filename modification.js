let a=document.createElement("h1");
console.log(a);

a.textContent="hello-world";
document.body.appendChild(a);

a.style.backgroundColor="pink"

//creating element
let div=document.createElement("div")
console.log(div);

//appending div-tag to body-tag
document.body.appendChild(div)

div.style.border="5px solid"

//creating ol element
let ol=document.createElement("ol")
console.log(ol);

//appending ol-tag to body-tag
document.body.appendChild(ol);

//appending ol-tag to div-tag
div.appendChild(ol)

let li=document.createElement("li");
console.log(li);

li.textContent="react";

ol.appendChild(li);

let li1=document.createElement("li");
console.log(li1);

li1.textContent="node.js";

ol.appendChild(li1);

ol.setAttribute("type","i");