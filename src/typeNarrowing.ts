// Type Narrowing = check lagao → TS sure ho jaata hai → error gayab
// 

function getChai(kind: string | number) {
    if(typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}

function serveChai(msg?: string) {
    if(msg) {
        return `Aserving ${msg}`;
    }
    return `Serving default masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if(size === "small") {
        return `small chai...`
    }
    if(size === "medium" || size === "large") {
        return `make extra chau`
    }
     return `chai order #${size}`
}


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
    }
}

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
    return `Serving custom chai ${item}`
}

// very good way of writing a code
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