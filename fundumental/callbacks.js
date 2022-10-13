//call backs are functions passed and called in other function
function callbackexample(argument,callback){
console.log(callback(argument))
}
callbackexample(20,function(n){
console.log("hello "+n)  
})
