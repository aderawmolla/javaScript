//map some how the same with for each
//use filter to change content and filter to return from content based on conditions
array=[1,2,3,4,5]
var map=array.filter((item,index,array)=>
    myFunction(item,index,array))

function myFunction(item){
return item%2==0
// console.log(index)
// console.log(array)
}
reduce=array.reduce((accumulator,current)=>{
return (accumulator+current)
})
console.log(reduce)