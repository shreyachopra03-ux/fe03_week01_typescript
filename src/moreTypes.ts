// Type assertion: TypeScript ko explicitly batana ki kisi value ka type kya hai, aur TypeScript bina check kiye maan leta hai.

// Forceful Type Assertion
let response: any = '42';
let numericLength: number = (response as string).length;

//
type Book = {
    name: string
}

// Forceful Type Assertion
let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book
// console.log(bookObject.name);

// Using Ts on DOM elements
// const inputElement = document.getElementById('username') as HTMLInputElement;

// example of any & unknown

let value: any

value = 'chai'
value = [1,2,3];
value =  2.5;
value.toUpperCase();

let newValue: unknown;

newValue = 'chai';
newValue = [1,3,5];
newValue = 2.5;

// Safety ke saath check hoyega ki agr strig hoga tbhi use Upper Case mei TS krega convert.
if(typeof newValue === 'string') {
    newValue.toUpperCase();
}

// try-catch block
try{

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log('Error', error);
}

// 
const data: unknown = 'chai or code'
const strData: string = data as string

//       
type Role = 'admin' | 'user' | 'superadmin';

// void means kuch bhi return nhi hora ya jo return hoga idc about that
function redirectBasedOnRole(role: Role): void {
    if ( role === 'admin') {
    console.log('Redirecting to admin dashboard');
    return;
    }
    if(role === 'user') {
    console.log('Redirecting to user dashboard');
    return;
    }
    role;
}

// Type never
// never is used to indicate that a function will never return normally, such as infinite loops or functions that always throw errors.

function neverReturn():never{
    while(true){
    }
}

