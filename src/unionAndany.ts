let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'middle'

const orders = ['12', '29', '28', '42']
let currentorder: string | undefined;

for(let order of orders) {
    if(order === '28') {
        currentorder = order;
        break;
    }
    currentorder = '11';
}
console.log(currentorder);

