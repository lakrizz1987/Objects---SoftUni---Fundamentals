function solve(input) {
    let arrObj = []

    for (let line of input) {
        let arrayHero = line.split(" / ")
        let name = arrayHero[0]
        let level = Number(arrayHero[1])
        let inventory = arrayHero[2]
        arrObj.push({
            name: name,
            level: level,
            inventory: inventory
        })

    }

    arrObj = arrObj.sort((a,b)=>a.level-b.level)
    
    for (let hero of arrObj) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.inventory}`)
    }

}
solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    
)