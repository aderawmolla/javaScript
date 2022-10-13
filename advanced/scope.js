//function inside function is possible in javascript
//in javascript function can return function
const a=4;
function fun1(){
    b=3;
    function fun2(){
    c=2;
    console.log(a,b,c)
    }
    fun2();
}
fun1();


/*
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node scope.js
4 3 2
*/