const person={
    name:"abebe",
    age:22,
    cars:["red","white"],
    //or that=this ,so to access person object use that instead of this
    tostring:function(){
        console.log(this.cars).bind(this)
    }
}
person.tostring()//if you loop over this.cars you loss the context of this ,so you can use bind for m
