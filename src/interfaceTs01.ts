// Interfaces & Types

// Interfaces are best for defining object shapes and are extendable
// Types are more flexible and can represent unions, tuples, primitives, and complex compositions.

// 
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

// 
type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

// Union inside interface is acceptable, but interface as union isn't acceptable.

// This will give error 
// interface cupSizes = "small" | "large";

// This is acceptable
interface CupSize {
    size: 'small' | 'large'
}

// By Default, make interface only while working with classes as it encourages easy code execution.
class Chai implements CupSize {
    size : 'small' | 'large' = 'large';
}

// Union example 
// isko literal types bolte hai
// Union works as a 'or'
type TeaType = 'masala' | 'ginger' | 'lemon'

// tea ki value upr waali 3 values mei se hi hogi, kuch or likhoge so that will give error
function orderChai(tea: TeaType ) {
    console.log(tea)
}
orderChai('masala')

// intersection 
type BaseChai = {teaLeaves: number}
type Extra = {ginger: number}

// intersection works as 'and', i.e BaseChai & Extra both types will be combined to make chai.
type GingerChai = BaseChai & Extra 

const cup: GingerChai = {
    teaLeaves: 2,
    ginger: 1
}
 
// ?: -> optional property 

type User = { 
    username: string;
    bio?: string
}

const u1: User = {username: 'shreya'}
const u2: User = {username: 'shreya', bio: 'shreya.ai'}

// 
type config = {
    readonly appName: string
    version: number
}

const cfg: config = {
    appName: 'masterji',
    version: 1
}

// This gives error coz appName is readonly and I can't edit a readonly value, it only takes value 1 time & can't be edited after that
// cfg.appName = 'chaicode'