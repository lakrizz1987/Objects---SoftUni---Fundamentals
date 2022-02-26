function solve(input) {
    let cats = []

    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
            this.mew = function () {
                return `${this.name}, age ${this.age} says Meow` 
            }
        }
    }

    for (let index = 0; index < input.length; index++) {
        let catData = input[index].split(" ")
        let name = catData[0]
        let age = catData[1]
        cats.push(new Cat(name, age))

    }
    
    for (let i = 0; i < cats.length; i++){
        console.log(cats[i].mew())
    }
}
solve(['Mellow 2', 'Tom 5'])