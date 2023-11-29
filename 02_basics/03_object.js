//singleton
//Object.create

//object literals

const MySymbol=Symbol("(:") //symbol
const JsUsers={
    name:"Abhijeet",
    class:"X",
    [MySymbol]:Symbol("Happy"),//using symbol as key and value
    Roll_No:5,
    ['Programming Language']:"JavaScript",
    e_mail:"abhijeet@gmail.com"
}
/* console.log(JsUsers["Programming Language"])
console.log(JsUsers[MySymbol])
 */
JsUsers.e_mail="monushahi@google.com"
console.log(JsUsers.e_mail)
//Object.freeze(JsUsers)
JsUsers.e_mail="sonushahi@google.com"
//console.log(JsUsers.e_mail)
//console.log(JsUsers)

JsUsers.greeting=function(){
    console.log("hello user")
}
JsUsers.greeting2=function(){
    console.log(`hello ${this.name} ,how are you doing`)
}
console.log(JsUsers.greeting())
console.log(JsUsers.greeting2())
