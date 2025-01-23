console.log(window);
console.log(window.document);
console.log(document);
console.log( typeof document);
console.log(document.URL);
console.log(document.head);
console.log(document.title);
document.title="amazon";
console.log(document.body);

let link=document.links
//console.log(link);

for (let i = 0; i< link.length; i++) {
    console.log(link[i]);
    link[i].className="demo";
    link[i].href="https://www.youtube.com/";
    link[i].target="_blank";
    
}

//Indirect access(methods of dom)

//document.getElementById("value")
//document.getElementsByClassName("value")
//document.getElementsByTagName("value")
//document.getElementsByName("value")
//document.querySelector("value")
//document.querySelectorAll("value")

let a=document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent="Epsilon";
console.log(a.textContent);
a.style.backgroundColor="red";
a.style.textAlign="center";


let b=document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[0].textContent);
b[0].style.backgroundColor="orange";
b[0].style.textAlign="center";

console.log(b[1]);
console.log(b[1].textContent);
b[1].style.backgroundColor="green";
b[1].style.textAlign="center";








