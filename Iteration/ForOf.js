let arr=[55,44,77,88,444,555,45]
for(let i of arr)
{
    console.log(i)
}

let na="Abhijeet"

for(const value of na)
{
    console.log(value)
}

const mapper= new Map()
mapper.set("Monu","engineer")
mapper.set("papa","businessman")
mapper.set("sonu","junior-engineer")
mapper.set("mummy","house wife")

for(const [key,val] of mapper)
{
    console.log(key,val)
}
