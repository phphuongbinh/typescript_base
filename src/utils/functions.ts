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


