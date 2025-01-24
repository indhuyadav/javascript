console.log("start");
//global-scope
var a=10;
console.log(a);
//local-scope
let b=90;
console.log(b);

const c=1;
console.log(c);

//block-scope
{
    var m=20;
    console.log(m);

    let n="hii"
    console.log(n);


    const o=30;
    console.log(o);
}
console.log("Stop");