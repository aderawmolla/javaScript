const names=["Anna","Mariam","John","Malik"]
//with out array destructuring
var anna=names[0]
var  mariam=names[1]
var john=names[2]
//using array destructuring
// const [anna,mariam,john]=names;
console.log(...names)//out puts all names
console.log(anna,"",john)//
//output
/*
PS C:\Users\WIN- 10\Desktop\javascript\advanced> node arraydestructuring.js
Anna Mariam John Malik
Anna  John 
https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/
*/
