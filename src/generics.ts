// generics templates hote hai jo code ko thoda sa reusable bnaa dete hai
// generics usecase -> API responses & state management mei use hote hai
// generics examples 

// 1st ex
function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray('masala')
wrapInArray(42)
wrapInArray({flavour: 'masala'})

// 2nd ex
function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair('masala', 20)
pair('masala', {flavour: 'ginger'})

// generic se interface bhi bnaa skte ho
interface Box<T> {
    content: T
}

const numerBox: Box<number> = {content: 10}
const numerBoxCup: Box<string> = {content: '10'}


interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data: {flavour: 'masala'}
}