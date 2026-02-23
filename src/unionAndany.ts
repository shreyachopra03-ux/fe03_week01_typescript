// Union -> when more than 1 several specified types have to be provided.
// Union can not only be used on default data types, it can also be used on data types that are created by us.

let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'middle'

const orders = ['12', '29', '28', '42']

// optional modifer ( ?: ) can't be used with a varibale it will always give errors, it can only be used with Types, interfaces & fn components.
// let currentOrder?: string -> will give error

let currentOrder: string | undefined;

orders.forEach((order) => {
   if(order === '28') {
   currentOrder = order;
   }
   currentOrder = '11';
})
console.log(currentOrder)