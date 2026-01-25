// interface -> ka main goal hota hai object ko shape/structure dena
// interfaces gives the rules that are followed by the classes
// 

interface Chai{
    flavor: string;
    price: number;
    milk?: boolean
}

const masala:Chai = {
    flavor: 'masala',
    price: 30
}

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {id: 1, name: 'chaicode cafe'}
// s.id = 2  ->  error degi ye cheez kyuki readonly data type ko change nhi kra jaa skta

interface DiscountCalculator{
    (price: number):number
}

const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine{
    start(): void
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log('start')
    },
    stop(){
        console.log('stop')
    }
}

interface ChaiRatings {
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 5
}

// 
interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name: 'shreya',
    age: 22
}

// same thing as above in diff manner but above one is more easier
interface A {a: string}
interface B {b: string}

interface C extends A,B {}


