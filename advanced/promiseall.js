const promise1 =new Promise((resolve,reject)=>{//object instantiation
    setTimeout(() => {
    resolve("data back from server"); 
    },1000);
    setTimeout(() => {
        reject("data1 does not return from server");
        },500);
    });
    const promise2 =new Promise((resolve,reject)=>{//object instantiation
        setTimeout(() => {
        resolve("data back from server"); 
        },2000);
        setTimeout(() => {
            reject("data2 does not return from server");
            },500);
        });
        Promise.all([promise1,promise2]).then(response=>{
            console.log(response)
        }).catch(error=>{//function definition
            console.log(error)
        })
        //note for reject only the first one is retuned
        //for resolve array of objects returned even if they are the same things
       //output
/*PS C:\Users\WIN- 10\Desktop\javascript\advanced> node promiseall.js
[ 'data back from server', 'data back from server' ]
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node promiseall.js
data does not return from server
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node promiseall.js
[ 'data back from server', 'data back from server'//this is for 1000ms and 2000ms respectively ]
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node promiseall.js
data1 does not return from server//last output from the above code
*/