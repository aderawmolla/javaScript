
//generators are important for pagination when generator function called it returns generator object unlike 
//other functions not excute code.
const generator=function * (){
    yield 1;
    yield "hello";
    yield true;
    yield  "name:Alex"
}
console.log(generator())
console.log(generator().next())
console.log(generator().next().value)
/*output
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node generator.js
Object [Generator] {}
{ value: 1, done: false }
1
*/
