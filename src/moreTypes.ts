// Type assertion: TypeScript ko forcefully batana ki kisi value ka type kya hai, aur TypeScript bina check kiye maan leta hai.

////
let response: any = '42';

//
let numericLength: number = (response as string).length;

//
type Book = {
    name: string
}

// ye bta rha haii ki jab 
let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject.name);

//
const inputElement = document.getElementById('username') as HTMLInputElement;

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

if(typeof newValue === 'string') {
    newValue.toUpperCase();
}

// try & catch
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
function neverReturn():never{
    while(true){

    }
}

