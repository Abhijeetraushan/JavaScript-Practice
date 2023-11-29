const marvel_hero=['ironman','superman','captain_america']

const dc_hero=['superman','batman','flash']

//marvel_hero.push(dc_hero)
//console.log(marvel_hero)

const all_hero=marvel_hero.concat(dc_hero)
//console.log(all_hero)

const indian_hero=['shaktiman','hatim','shaurya','juniorG'] //spread operator

const pura_hero=[...marvel_hero,...dc_hero,...indian_hero]
//console.log(pura_hero)

const myArr=[1,2,3,[5,6,],9,10,[11,12,13,[14,15,1]]]

const newArr=myArr.flat(3)
//console.log(newArr)

const name="Abhijeet"

const arr=Array.from(name)
console.log(arr)

virat=100
rohit=200
Kl_rahul=80
console.log(Array.of(virat,rohit,Kl_rahul))




