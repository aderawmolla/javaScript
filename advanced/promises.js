const promise =new Promise((resolve,reject)=>{//object instantiation
setTimeout(() => {
resolve("data back from server"); 
},2000);
setTimeout(() => {
    reject("data does not return from server");
    },3000);
});
promise.then(response=>{
    console.log(response)
}).catch(error=>{//function definition
    console.log(error)
})
//output
/*
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node promises.js
data back from server
*/
