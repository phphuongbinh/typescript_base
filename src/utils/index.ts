// export function total(a :number, b: number) : number {
//     return a + b
// }

// total(5,7)

// const age : number = 25;
// console.log(age);
// const name: string = "Binh"
// console.log(name);
// const isStudent: boolean = true
// console.log(isStudent);

// let aNumber : unknown;
// // eslint-disable-next-line prefer-const
// aNumber = 100
// if (typeof aNumber === 'number') {
//     aNumber.toFixed(2)
// }

function raiseError(err: string) : never {
    throw new Error(err)
}

console.log(raiseError);

const loop = function forever(){
    // eslint-disable-next-line no-constant-condition
    while (true) {
        console.log('Hello');
        
    }
}
console.log(loop);
