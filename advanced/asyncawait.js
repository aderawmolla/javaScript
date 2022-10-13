//to use of async
//1.yield promise using await
//2.return promise

const generator=async  function(){
        const result=[
            {name:"abebe",
            age:22},
            {
             name:"kebede",
             age:33   
            }
            ]
        
     return result; 

    }
  const res=  generator();
 
  res.then(data=>{
    console.log(data)
  }).catch(error=>{
    console.log(error)
  })

