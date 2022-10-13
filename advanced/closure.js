// return function from another function
//this is important for keep persistent

function fun1(){
    counter=0;
    function fun2(){
    counter++;
    console.log(counter)
    }
    return fun2;
}
const fn=fun1();//returns both the function and variable scope
fn()
fn()

/*
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node closure.js
1
2
*/