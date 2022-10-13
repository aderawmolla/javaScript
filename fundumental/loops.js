//loop over int ,loop over string,loop over object
 var person=
[{"name":'Aderaw',"age":22},
{
"name":"Ademe","age":23
},
]
person[2]=5//add dynamically
console.log(person)//returns all array of objects
for(var i=0;i<=person.length;i++){
console.log(person[i].age)

} 
i=person.length;
do {
console.log(i)
i--
} while(i>=0)
//break and continue
var i=5;
while(i>=0){
    i--
    if(i=1|3|5)
    continue;
  console.log(i);
}
