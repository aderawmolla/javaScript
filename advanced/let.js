for(i=0;i<=10;i++){
    console.log(i)
}
console.log(i)//works fine
for(let i=0;i<=10;i++){//you can use var nothing changed in this case
    console.log(i)
}
console.log(i)// i is not defined error