// IIFE immediately invoked function expression

(function show(){
    console.log("this is names immediately invoked function expression")
})();
// we need to use semi colon after using immediately invoked function expression

((name)=>{console.log(`you are executing IIFE function ${name}`)})("Abhijeet");


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Abhijeet')