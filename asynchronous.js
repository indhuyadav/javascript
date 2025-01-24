function main(a,b){
   new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(isNaN(a) || isNaN(b)){
            return reject()
        }
        for(let i=a;i<=b;i++){
            console.log(i);
            
        }
        return resolve()
       },5000)
   })
   .then(()=> console.log("Promise is resolved"))
   .catch(()=> console.log("error occured"))
}
main(1,10);
function demo(){
  console.log("numbers printed"); 
 }
 demo()

window.setTimeout(()=>{
    console.log("I am settimeout");
    
},6000);


window.setInterval(()=>{
   console.log("I am setinterval");
    
},10000)