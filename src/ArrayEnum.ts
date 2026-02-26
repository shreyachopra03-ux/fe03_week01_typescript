// examples of arrays and enums in TypeScript
// Arrays

// syntax of writing array
const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiprice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number
}

// Array Of objects
const menu: Chai[] = [
    {name: 'masala', price: 15},
    {name: 'lemon', price: 25}
]

// readonly means it's only definable once and not editable after that
const cities: readonly string[] = ['delhi', 'jaipur']
// cities.push('pune')

// 2-d array
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]
    
// tuples -> humesha array hi return karenge
// tuple mei value push ho skti hai kyuki hai toh vo bhi ek trh ka array hi yaar
// tuple basically fixed order dekhtaa hai, aage peeche nhi likh skte tum kuch ismei

let chaiTuple: [string, number];
chaiTuple = ['masala', 20]
// chaiTuple = [20, 'masala'] -> this thing will give error kyuki order mismatch hogya

let userInfo: [string, number, boolean?]
userInfo = ['shreya', 100]
userInfo = ['shreya', 100, true]

// read-only tuple
const location: readonly [number, number] = [34.56, 48.89]

// Named Tuples
const chaiItems: [name: string, price:number] = ["masala", 45]

// Enums 
// An enum (enumeration) is a data type that defines a fixed set of named constant values. It is used when a variable should only have one value from a predefined list of options.
// as a good practice, enums ka data type humesha ek rkho don't go for heterogeneous data types 
 
enum cupSize {
    SMALL,
    MEDIUM, 
    LARGE
}

const size = cupSize.LARGE;

// enum auto increment values
enum status {
    PENDING = 100,
    SERVED, // 101 -> automatically agr kuch nhi daaloge toh value increment ho jaayegi
    CANCELLED // 102
}

// enum values have to be in caps only, its standard practice   
enum chaiType {
    MASALA = 'masala',
    GINGER = 'ginger'
}

function makeChai(type: chaiType) {
    console.log(`making ${type} chai`);
}

makeChai(chaiType.GINGER)

// not a good practice -> heterogeneous data types
enum randomEnum {
    ID = 1,
    NAME = 'chai'
}

// const bhi kisi kisi jghaa dikh skta hai enum se pehle 
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

// ye push ho jaega kyuki t is a tuple jo bhi ek array ka type hi hota hai basically
let t: [string, number] = ['chai', 10]
t.push('extra')