let operation=(a,b,task) =>{
    console.log(task(a,b));
}
operation(a=Number(prompt("Enter the a number for Addition:")),
          b=Number(prompt("Enter the b Num for addition:")),
        (a,b)=> {
            return a+b;
        })

        operation(a=Number(prompt("Enter the a number for Subtarction:")),
        b=Number(prompt("Enter the b Num for Subtraction:")),
      (a,b)=> {
          return a-b;
      })
      operation(a=Number(prompt("Enter the a number for Multiplication:")),
          b=Number(prompt("Enter the b Num for Multiplication:")),
        (a,b)=> {
            return a*b;
        })