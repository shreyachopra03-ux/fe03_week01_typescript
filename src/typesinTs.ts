// Type inferencing -> jab Ts khud se variable / fn ka type guess krleta hai 

let drink = "chai"
let cups = Math.random() > 0.5 ? 10 : 5

// Type annotation -> khud se Ts ko btaana ki kya type hoga variable / fn ka 

let chaiFlavour : string = "masala chai"
// chaiFlavour can be over-written as well because both the data types are same (string)
chaiFlavour = 'ginger tea'

let chaiOrder : boolean

let chaiPrice: number

