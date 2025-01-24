//ex1
function parent(){
    function child1(){
        console.log("I am chikd 1");
        function child_1(){
            console.log("i am child 3");
            
        }
        return child_1
    }
    function child2(){
        console.log("I am child 2");
        function child_2(){
            console.log("I am child 4");
            
        }
        return child_2
    }
    return [child1,child2]
}
parent()[0]()()
parent()[1]()()

