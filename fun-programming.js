function main(a){
    //console.log(a);
    console.log(a());
}
main(function(){
    return "i am calll-back1"
})
main(function(){
    return "i am call-back2"
})