// Interfaces
// classes ke saath kaam karte waqt usually interface banaya jata hai taaki class usse implement kar sake

type ChaiOrder = {
    type: string;
    sugar: number;
    amount: boolean;
 };

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}

type TeaRecipe = {
    water: number,
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface CupSize {
    size: 'small' | 'large'
}

class Chai implements CupSize {
    size : 'small' | 'large' = 'large';
}

// Union example 
// isko literal types bolte hai
type TeaType = 'masala' | 'ginger' | 'lemon'

function orderChai(tea: TeaType ) {
    console.log(tea)
}
orderChai('masala')

// intersection example
type BaseChai = {teaLeaves: number}
type Extra = {ginger: number}

type GingerChai = BaseChai & Extra 

const cup: GingerChai = {
    teaLeaves: 2,
    ginger: 1
}

// example agr chaaho toh bio add krdo vrna rehne do, or agr aayega bio toh string hi honi chhaiye fir 
// ? -> optional property hoti hai ye

type User = { 
    username: string;
    bio?: string
}

const u1: User = {username: 'shreya'}
const u2: User = {username: 'shreya', bio: 'shreya.ai'}

// example
type config = {
    readonly appName: string
    version: number
}

const cfg: config = {
    appName: 'masterji',
    version: 1
}

// this is showing error kyuki upr humne bola ha ki appName is read only so ismei ab changes nhi kr skte hum 
cfg.appName = 'chaicode'