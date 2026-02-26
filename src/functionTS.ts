// example of fn's

function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type}`);
}
makeChai('masala', 2)

// Data that will be returned will be a number
function getChaiPrice():number {
    return 25;
}

//
function makeOrder(order: string) {
    if (!order) return null
    return order
}

// void means that nothing will be returned 
function logChai(): void {
    console.log('chai is ready');
}

// optional parameter
function orderChaiii(type?: string) {

}

// default parameter
function orderChai(type: string = 'masala') {
}

// 
function createChai(order: {
    type: string;
    sugar: number;
    size: 'small' | 'large'
}): number {
    return 4
}