function solve (input){
    let catalog = []

    for (const row of input) {
        
        let [name,price] = row.split(" : ")
        let object = {}
        object.name = name,
        object.price = price
        catalog.push(object)
    }

    catalog = catalog.sort((a,b)=>{
        let x = a.name
        let y = b.name
        return x.localeCompare(y)
    })
    
    let firstLetter = ''
    for (const element of catalog) {
        if(firstLetter === element.name.charAt(0)){
            console.log(`  ${element.name}: ${element.price}`)
        }else{
            firstLetter = element.name.charAt(0)
            console.log(firstLetter)
            console.log(`  ${element.name}: ${element.price}`)
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )