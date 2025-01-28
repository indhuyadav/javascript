// let obj={
//     "name": "Indu",
//     "Roll NO": "2211CS010665",
//     "Group":6,
// }
// console.log(obj);

// let a=JSON.stringify(obj);
// console.log(a);

// let b=JSON.parse(a);
// console.log(b);

window.fetch("data.json")
.then((data)=>data.json())
.then((res)=>{
    // console.log(res);
    // console.log(res[0]);
    // console.log(res[1]);
    
res.map((x)=>{
    console.log(x);
    console.log(x.Name);
    console.log(x.RollNo);
    console.log(x.Group);

    document.body.innerHTML()
})
    
})