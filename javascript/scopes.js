console.log("hello");
var hello=function(){
    console.log("google");
}
hello();



function outer(){
    inner();
    function inner(){
        console.log(b);
    }
}
var b=10;
outer();
console.log(b);
