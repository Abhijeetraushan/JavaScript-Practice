/*const mapper= new Map()
mapper.set("Monu","engineer")
mapper.set("papa","businessman")
mapper.set("sonu","junior-engineer")
mapper.set("mummy","house wife")

for(const val in mapper)
{
    console.log(val)
}*/
//for in doesn't work on map and for of doesn't work on object

let ob={
    name:"abhi",
    roll:5,
    age:20,
    hobby:"music"
}

for(const val in ob)
{
    console.log(ob[val])
}

let ar=["abhi","monu","shahi","raushan","kumar"]
for(let i in ar)
{
    console.log(ar[i])
}