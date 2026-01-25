// examples of arrays and enums in TypeScript
// Arrays
type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: 'masala', price: 15},
    {name: 'lemon', price: 25}
]

// push nhi kuch ismei error hi aayega kyuki it's a readonly array & hence not editable
const cities: readonly string[] = ['delhi', 'jaipur']
// cities.push('pune')

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]
    
// tuples -> humesha array hi return karenge
// tuple mei value push ho skti hai kyuki hai toh vo bhi ek trh ka array hi yaar
// tuple basically fixed order dekhtaa hai, aage peeche nhi likh skte tum kuch ismei

let chaiTuple: [string, number];
chaiTuple = ['masala', 20]
// chaiTuple = [20, 'masala] -> this thing will give error kyuki order mismatch hogya

let userInfo: [string, number, boolean?]
userInfo = ['shreya', 100]
userInfo = ['shreya', 100, true]

const location: readonly [number, number] = [34.56, 48.89]

// Enums 
// as a good practice, enums ka data type humesha ek rkho don't go for heterogeneous data types 
 
enum cupSize {
    SMALL,
    MEDIUM, 
    LARGE
}

const size = cupSize.LARGE

enum status {
    PENDING = 100,
    SERVED, // 101 automatically agr kuch nhi daaloge toh value increment ho jaayegi
    CANCELLED // 102
}

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