function demo(){
    console.log("HI guys");
    
}

let a= document.getElementById("demo1");
console.log(a);

a.onclick = function(){
    // let res=Math.round(Math.random() * 100);
    // console.log(res);

    let res=Math.round(Math.random() * 10000).toString(16);
    console.log(res);
    document.body.style.backgroundColor=`#${res}`;
    
}
