// data types can  broadly be divided in two types  primitive and non primitive.

// primitive are of 7 types 
// primitive are accessed by call by value
//string 
//symbol
//number
//null
//BigInt
//boolean
//undefined

const Id=Symbol("45f")
console.log(Id)

//const pi=3.14141414n  BigInt cannot store float value

//non primitive (calll by reference)
//array
//function
//object

const arr=["hello","how","are","you"] // aaray

const myObj ={        // object
    name:"hello",
    num:123,
    bigNumber: 1456324n,
}

const myFun=function(){
    console.log("kya baat ha");
}
console.log(typeof myFun)
console.log(typeof myObj)
console.log(typeof arr)
myFun()