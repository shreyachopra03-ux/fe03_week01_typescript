// Objects

const chai = {
    name: 'masala chai',
    price: 20,
    isHot: true
}

// {
//     name: string,
//     price: number,
//     isHot: boolean
// }

// Declaring Object Types
let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: 'masala chai',
    price: 25,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: 'adrak chai',
    price: 25,
    ingredients: ['ginger', 'sugar', 'tea leaves']
}

// 
type Cup = {size: string};
let smallcup: Cup = {size: '200ml'}
let bigcup = {size: '500ml', material: 'steel'}
smallcup = bigcup

// 
type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: 'arabica'}
const chaiBrew: Brew = coffee

// agr jitni cheezeim mentioned h usse kam bnaaoge in obj toh error dega, zda mention krdoge toh no dikkat
type User = {
    username: string;
    password: string
}

// const u: User = {
//     username: 'shreya',
    // password: '123'
// }

// splitting out data types
type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}

// interesting example
// Partial makes all the properties in data type optional !
// partial mei empty obj bhi pass kr skte hai jo issue causing hojaata hai sometimes

// type Chai = {
//     name: string;
//     price: number;
//     isHot: boolean
// }

// const updateChai = (updates: Partial<Chai>) => {
//     console.log('updating chai with', updates);
// }

// updateChai({price: 25})
// updateChai({isHot: true})
// updateChai({})

// one more example
// required -> all properties in data type are required

type chaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<chaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: 'masala chai',
    quantity: 2
})
 

// Pick example
type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai, 'name' | 'price'>;

const chaiInfo: BasicChaiInfo = {
    name: 'lemon tea',
    price: 30
}

// omit example
type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

// bs jo secret ingredients h vo nhi dikhenge ab
type PubliChai = Omit<Chai, 'secretIngredients'>;