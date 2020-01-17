const sum = (p1, p2) => {
    // console.log(p1)
    // console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
// console.log(result)

const square = p => p * p

const t = [1, 2, 3]
const tSquared = t.map(p => p * p)

function product(a, b) {
    return a * b
}

const result2 = product(2, 6)

const average = function(a, b) {
    return (a + b) / 2
}

const result3 = average(2, 5)

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('hello, my name is', this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)
    },
}

arto.growOlder = function() {
    this.age += 1
}

// console.log(arto.age)
// arto.growOlder()
// console.log(arto.age)

// arto.doAddition(1, 4)

// const referenceToAddition = arto.doAddition
// referenceToAddition(10, 15)

// arto.greet()

// const referenceToGreet = arto.greet
// referenceToGreet()

// setTimeout(arto.greet.bind(arto), 1000)

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is', this.name)
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()

console.log('test')
