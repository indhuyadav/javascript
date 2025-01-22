//implicit arow function

let a= ()=>console.log("Hai");
console.log(a);
a()

//2nd example



//explicit arrow function
let b=()=>{return "hello"}
console.log(b)
console.log(b());

//2nd example:

let main1=(task)=>{
    console.log(task);
    console.log(task());
}
main1(() =>{
    return "Hii everyone";
})

