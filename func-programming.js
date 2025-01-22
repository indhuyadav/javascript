function main(task){
    console.log(task(29,45));
}
main(function(a,b){
    return a+b;
})
main(function(a,b){
    return a-b;
})
main(function(a,b){
    return a*b;
})
main(function(a,b){
    return a%b;
})

