let table= document.createElement("table")
console.log(table);

//append table-tag to body-tag
document.body.appendChild(table)

//create a tr-tag
let tr1=document.createElement("tr")
console.log(tr1);

//append tr-tag to table-tag
table.appendChild(tr1)

//create td-tag
let td1=document.createElement("td")
console.log(td1);

//append td1-tag to tr1-tag
tr1.appendChild(td1)

//create td-tag
let td2=document.createElement("td")
console.log(td2);

//append td1-tag to tr1-tag
tr1.appendChild(td2)

//create td-tag
let td3=document.createElement("td")
console.log(td3);

//append td1-tag to tr1-tag
tr1.appendChild(td3)

let tr2=document.createElement("tr")
console.log(tr2);

//append tr-tag to table-tag
table.appendChild(tr2)

//create td-tag
let td4=document.createElement("td")
console.log(td4);

//append td1-tag to tr1-tag
tr2.appendChild(td4)

//create td-tag
let td5=document.createElement("td")
console.log(td5);

//append td1-tag to tr1-tag
tr2.appendChild(td5)

//create td-tag
let td6=document.createElement("td")
console.log(td6);

//append td1-tag to tr1-tag
tr2.appendChild(td6)
table.setAttribute("border" , "2px solid")


