//use if for continues and discrete,more preferably for continues
//use switch for discrete type
var person={
name:"aderaw",
age:21
}
if(person.age>18&&person.age<19){
   console.log("this person is yong")  
}
else if(person.age<18){
console.log("this person is child")
}
switch(person.age){
case 18:
    console.log("this person is at age 18")
case 21:
    console.log("this person is at age 21")
}
// usage Date class
switch(new Date().getDay()){
case 0:
    console.log("today is sunday")
    break;
case 1:
    console.log("today is monday")  
    break;
case 2:
    console.log("today is tuesday")
    break;
case 3:
    console.log("today is wensday")
    break;
case 4:
    console.log("today is thrsday")
    break;
case 5:
    console.log("today is friday")
    break;
case 6:
    console.log("today saturday")
    break;
default:    
    console.log("today is  in number "+new Date().getDay())
}