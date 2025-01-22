let obj={
    name:"indu",
    id:1,
    arr:[10,3,5],
    Boolean:true,
    null:null,
    undefined:undefined,
    fun: function(){
        console.log("hello");
        
    }
       
}
console.log(obj);
console.log(obj.name);
console.log(obj.id);
console.log(obj.arr);

//using constructor function

function obj1(name,id){
    this.name=name;
    this.id=id;
}
let a1=new obj1("indu",1)
console.log(a1);
console.log(a1.name);
console.log(a1.id);


