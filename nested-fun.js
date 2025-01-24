//example1
function parent(){
    function child(){
        console.log("Hello everyone");
    }
    child()
}
parent()


//example2
var a=112;
let b=908;
function parent1(){
    var a="hello"
    let b="MRU"
    console.log(a);
    console.log(b);
    console.log(this.a);
    console.log(this.b); 
}
parent1()


