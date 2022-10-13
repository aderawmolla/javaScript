//creating arrays
array=[1,"Aderaw ",{age:23,student:true}]
// console.log(".........meathods of access arrays..........")
console.log(array)
console.log(array[2])
//using of and in
//java script for loop are the same as java for loop
for( num of array){//returns values

    console.log(num)
}
for( num in array){//returns index

    console.log(num)
}
array.forEach((item,index,fullarray)=> {//order of arguments is significant here
   console.log(typeof(index))
    console.log(typeof(item))
    console.log(typeof(then))  
});