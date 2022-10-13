//in others it is also called lambda function
//with out lambda expression or arrow function
const add=function(n1,n2){
    return n1+n2;
}
function add(n1,n2){
    return n1+n2;
}
//using lambda expression
const add=(n1,n2)=>{
    return n1+n2
}
//const add=(n1,n2)=>return {n1+n2}; don't use return here
const add=(n1,n2)=>n1+n2;
 console.log(add(2,3))// all outputs 5
 /*
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node arrowfunction.js
5
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node arrowfunction.js
5
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node arrowfunction.js
5

*/