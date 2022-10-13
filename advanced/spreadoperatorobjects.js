let name={
    firstname:"aderaw",
    lastname:"molla"
}
address={
    country:"Ethiopia",
    wereda:"quarit"
}
//with out using spread operator
const person={//this is not good way of writing code
  name,
  address

}
const persn={
    firstname:name.firstname,
    lastname:name.lastname,
    country:address.country,
    wereda:address.wereda
}
console.log(person.name.firstname)
console.log(persn)
//output
 /*
 aderaw
{
    firstname: 'aderaw',
    lastname: 'molla',
    country: 'Ethiopia',
    wereda: 'quarit'
  }*/