function printSomething(){
    console.log("function is invoked ")
    console.log("function is executed")
}

printSomething() // function call
printSomething //return only function reference

function addTwoNumber(num1, num2) //parameters
{ 
    console.log(num1+num2)
}
addTwoNumber(5,6) // arguments

function sum(n,m){
    return m+n
}
 
let r=sum(5,9)
console.log(r)

function IsLoggedIn(username)
{
    if(!username)
    {
        console.log("please enter your username")
        return
    }
    console.log(`${username} just logged in`)
}

IsLoggedIn() // empty argument is passed as undefined

function returnPrice(...num) //rest operator..rest and spread are dependent on where it is used
{
    return num
}
console.log(returnPrice(400,5000,8,7,55))

//passing obeject in function

const ob={
    name:"Abhijeeet",
    reg_No:11715660
}
function obj(anyob)
{
    console.log(`my name is ${anyob.name} and my reg no is ${anyob.reg_No}`)
}

obj(ob)

//passing array in function
const ar=[5,6,9,8,7,8]
function arrayfun(arr){
    console.log(arr[3])
}
arrayfun(ar)