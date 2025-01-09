let main=function(){
    let a=Number(prompt("Enter the a value:"));
    let b=Number(prompt("Enter the b value:"));
    let c=Number(prompt("Enter the c value:"));
    let d= a+b+c;
    console.log(d)
    let e=a-b-c;
    console.log(e);
    let f=a*b*c;
    console.log(f);


    if(a>=b && a>=c){
        console.log("a is greatest");
    }else if(b>=a && b>=c){
        console.log("b is greatest");
    }else{
        console.log("c is greatest");
    }
}
console.log(main);
console.log(main());


let b=function(a){
    console.log(a);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
b(10,20,30)