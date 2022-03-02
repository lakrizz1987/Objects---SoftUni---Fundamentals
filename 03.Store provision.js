function solve(arrayStore, arrayDelivery) {
    let obj = {}

    for (let i = 0; i < arrayStore.length; i+=2){
        let element = arrayStore[i]
        let quantity = Number(arrayStore[i+1])
        obj[element] = quantity
    }
    
    for(let j = 0; j < arrayDelivery.length;j+=2){
        let product = arrayDelivery[j]
        let quantity = Number(arrayDelivery[j+1])

        if(!obj.hasOwnProperty(product)){
            obj[product] = quantity
        }else{
            obj[product] += quantity
        }
    }
    
    let arrKeyValue = Object.entries(obj)

    for (let [key,value] of arrKeyValue) {
        console.log(`${key} -> ${value}`)
    }
    
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)