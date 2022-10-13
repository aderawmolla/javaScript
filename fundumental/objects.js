//creating objects
var aderaw={
name:"Aderaw Molla",
age:21,
student:true,
job:undefined,
address:{
region:"03",
woreda:"Quarit"
}
}
//accessing objects
console.log(".......meathod 1 ......") 
console.log(JSON.stringify(aderaw))//convert objects to strings
console.log(".......meathod 2......")
console.log(aderaw.name)
console.log(aderaw.age)
console.log(aderaw.student)
console.log(".......meathod 2 ......")
console.log(Object.values(aderaw))//returns values of keys
console.log(Object.keys(aderaw))//returns key of object passed
console.log(".......access data types.....")
console.log(typeof(aderaw))
console.log(typeof(aderaw.age))
console.log(typeof(aderaw.address))