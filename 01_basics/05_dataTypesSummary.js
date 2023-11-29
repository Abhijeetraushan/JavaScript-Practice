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



//********************memory**************************
//stack(primitive)
//heap(non-primitive)

let num1 =14562
let num2=num1
num2=654

console.log(num1) 
console.log(num2)
// above code uses stack and get another copy ...so changes made in another won't reflect in previous data types


const myob={
    name:"abhi",
    roll:45,
    class:"X"
}

const myob2=myob
myob2.name="monu"
console.log(myob)
console.log(myob2)
/*in above code when we assign myob to myob2 than it get reference to same heap and 
changes made in second object reflect in first object*/