function solve(array) {
    let towns = []
    class Town {
        constructor(name, latitude, longitude) {
            this.town = name
            this.latitude = latitude
            this.longitude = longitude
            this.print = function () {
                return `{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`
            }
        }
    }

    for (let string of array) {
        let arr = string.split(" | ")
        towns.push(new Town(arr[0], Number(arr[1]).toFixed(2), Number(arr[2]).toFixed(2)))
    }

    for (let j = 0; j < towns.length; j++) {
        console.log(towns[j].print())
    }
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)