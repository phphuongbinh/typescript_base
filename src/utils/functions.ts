/* eslint-disable @typescript-eslint/no-explicit-any */
// Function Overloading

// export function total(a: number, b:number) :number;

// export function total(a: string, b:string) : string;

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function total(a: any, b: any) :any {
//     return a + b
// }
// total(5, 7)
// total("ErauQs" , "Developer")

// interface Coordinate {
//     x: number,
//     y: number
// }

// // function parseCoordinateFromObject(obj: Coordinate) :Coordinate {
// //     return {
// //         ... obj,
// //     }
// // }

// // function parseCoordinateFromNumber(x: number, y:number) : Coordinate {
// //     return {x, y}
// // }

// function parseCoordinate(obj: Coordinate) : Coordinate;
// function parseCoordinate(x: number, y:number) : Coordinate;
// function parseCoordinate(arg1: any, arg2?:any) : Coordinate {
//     let coord = {
//         x: arg1 as number,
//         y: arg2 as number
//     }
//     if(typeof arg1 === "object") {
//         coord = {
//             ...(arg1 as Coordinate)
//         }
        
//     } else {
//         coord = {
//             x: arg1 as number,
//             y: arg2 as number
//         }
//     }
//     return coord
// }


// parseCoordinate({x : 10, y:20})
// parseCoordinate(10, 20)

//? FUNCTION TYPES

//** Normal function  */
function addNumber(a: number, b: number): number {
    return a + b
}
addNumber(1 ,9)

//** Arrow function
const addString = (a:string, b:string): string => {
    return `${a} + ${b}`
}
addString("a", "b")

// ** Default Parameters
const addNumberWithDefaultParameters = (a: number = 10, b:number = 20) :number => {
    return a + b
}
addNumberWithDefaultParameters()

// ** Union types
const format = (title: string, desc: string, amount : string | number) : string => {
    return `${title} ${desc} ${amount}`
}
format("Erauqs", "Developer", 40)
format("Erauqs", "Developer", "40")

// ** Avoid function
function contact(email: string, phone:number) : void {
    console.log(email, phone);
}
contact("Erauqs", 90)

// ** Promise function

const fetchData = (url: string) :Promise<string> =>{
    return Promise.resolve(`get data from ${url}`)
}
fetchData("https://google.com")

// ** Rest parameter
function infomation(id: number, ...names :string[]): string {
    return `${id} ${names.join(" ")}`
}
infomation(1, "Erauqs", "Binh")

// ** With callback
function handleFile(text: string, callback: ()=> void):void {
    console.log(text);
    callback()
}
handleFile("Test", ()=> console.log("test"))

// ** Function params with params
// ** Function as type

type UpdateArray = (n : number)=> number
function handleUpdateArray(numbers: number[], update: UpdateArray) :number[] {
    return numbers.map(item=> update(item))
}
handleUpdateArray([1,2,3,4], (n)=> n * 5)

// ** Function return function
function handleValue(val: number) : (n:number)=> number {
    return (n:number) : number => n * val
}

const value = handleValue(5)
value(10)


