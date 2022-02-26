function solve(input) {
    let allObjects = []
    allObjects.push(JSON.parse(input.shift()))

    for (const element of input) {
        let object = JSON.parse(element)
        let key = Object.keys(object)[0]
        let value = Object.values(object)[0]
        let isHave = false
        for (const curentObj of allObjects) {
            if (curentObj.hasOwnProperty(key)) {
                curentObj[key] = value
                isHave = true
            }
        }
        if (!isHave) {
            allObjects.push(object)
        }
    }

    let sorted = allObjects.sort((a,b)=>{
        let x = Object.keys(a)[0]
        let y = Object.keys(b)[0]
        return x.localeCompare(y)
    })

    sorted.forEach(x=>console.log(`Term: ${Object.keys(x)[0]} => Definition: ${Object.values(x)[0]}`))

}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)