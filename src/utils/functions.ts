// Function Overloading

export function total(a: number, b:number) :number;

export function total(a: string, b:string) : string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function total(a: any, b: any) :any {
    return a + b
}
total(5, 7)
total("ErauQs" , "Developer")