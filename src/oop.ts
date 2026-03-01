// OOPS CONCEPTS 

// class Chai {
//     flavour: string;
//     price: number

//     constructor (flavour: string, price: number) {
//         this.flavour = flavour
//         this.price = price
//     }
//     constructor (flavour: string) {
//         this.flavour = flavour
//         console.log(this)
//     }
// }

// const masalaChai = new Chai('ginger', 35)
// masalaChai.flavour = 'masala'

// const masalaChai = new Chai('ginger')
// masalaChai.flavour = 'masala'


// ACCESS MODIFIERS
class chai{
    public flavour: string = 'masala'

    // accessible within the class only
    private secretIngredients = 'cardamom'

    reveal() {
        return this.secretIngredients // ok
    }      
    
    // only accessible within class or if any class is inheriting it 
    protected shopName = "chai corner"
}

class shop {
    protected shopName = 'chai corner'
}

class Branch extends shop {
    getName() {
        return this.shopName // ok
    }
}

// private type field
class Wallet {
    #balance = 100

    getBalance() {
        return this.#balance
    }
}

const w = new Wallet()

class Cup{
    readonly capacity: number = 250

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

// private ke saath underscore use krna hai it's a convention
// private value ko aise hi access nhi kr skte & getters or setters ka use hota hai fir yhaa
// getter value ko get krta hai & setter value ko set krta hai
// getter -> kisi variable ki private value ko read/get krega
// setter -> usi variable ki value change/set krne ke liye hoga use

class modernchai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number) {
        if(value > 5) throw new Error('too sweet')
            this._sugar = value
    }
}

const c = new modernchai()
c.sugar = 3
console.log(c.sugar)


// static members
class ekChai {
    static shopName = 'chaicode cafe'
    constructor(public flavour: string){}
}
console.log(ekChai.shopName);

//
abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(){
        console.log('brewing chai');
    }
}

// composition
class Heater{
    heat(){}
}

class chaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}