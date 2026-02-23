// Type Narrowing = check lagao → TS sure ho jaata hai → error gayab
// typeof check lgaane se ye type narrow bn gyaa kii mei explicitly bta rhi hu kii string ya number mei se bhi konsa type hoga


// Type is narrowed down to one so that further I can check from suggestions which all methods I can apply on that particular data type
function getChai(kind: string | number) {
    if(typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}

// check Truthiness
function serveChai(msg?: string) {
    if(msg) {
        return `serving ${msg}`;
    }
    return `Serving default masala chai`;
}

// exhaustive checks
//This ensures that we handle all the possible cases of union type & if any new type is added in the future that doesn't exist in the union type, then TS gives errors.
function orderChai(size: "small" | "medium" | "large" | number) {
    if(size === "small") {
        return `small chai...`
    }
    if(size === "medium" || size === "large") {
        return `chai size is big`
    }
    return `chai order ${size}`
}

// 
class kulhadChai{
    serve() {
        return `Serving kulhad chai`;
    }
}

class CuttingChai{
    serve() {
        return `Serving cutting chai`;
    }
}

function serve(chai : kulhadChai | CuttingChai) {
    if(chai instanceof kulhadChai) {
        return chai.serve(); 
    } else {
        return chai.serve() // output => serving Cutting Chai
    }
}

//
type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder | string) {
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar}`
    }
    return `Serving custom chai: ${item}`
}

// very good way of writing a code
// Discriminated Union
// "type" is the common literal property here.
type MasalaChai = {type: 'masala'; spicelevel: number};
type GingerChai = {type: 'ginger'; amount: number};
type ElaichiChai = {type: 'elaichi'; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai

// switch case
function MakeChai(order: Chai) {
    switch (order.type) {
        case 'masala':
            return 'Masala chai'
            break;
        case 'elaichi':
            return 'Elaichi Chai';
            break;
        case 'ginger':
            return 'Ginger Chai';
            break;
    }
}

function brew(order: MasalaChai | GingerChai) {
    if ('spicelevel' in order) {
        //
    }
}

// function isStringArray(arr: unknown): arr is string[] {
     
// }

// unknown is more safe as compared to any !! 