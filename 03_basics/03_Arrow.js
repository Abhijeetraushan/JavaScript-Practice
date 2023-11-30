const obj={
      name:"Abhijeet",
      msg:function()
      {
        console.log(`${this.name}, keep learning`)
        console.log(this)
      }
}

obj.msg()
obj.name="Monu Shahi"
obj.msg()

function sum(num1,num2)
{
    return num1+num2
}
console.log(sum(5,6))

const fun=function(a,b)
{
    return a+b
}
console.log(fun(9,6))

const arrow=(a,b) => {
    return a+b
}
console.log(arrow(5,6))

const jod= (a,b)=> a+b
console.log(jod(10,20))

const jodu= (a,b)=> (a+b)
console.log(jodu(11,22))


const ob=()=>({name:"abhijeet"})

console.log(ob())