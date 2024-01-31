/* eslint-disable @typescript-eslint/no-unused-vars */
// Ternary Operator
// condition ? true : false
// someType extends otherType ? trueType : falseType

type someType<T> = T extends string ? string : boolean;

type someValue = someType<string>
type someValue2 = someType<number>

type MyExclude<T, U> = T extends U ? never : T;

type TExclude = MyExclude<"a"| "b"| "c", "a"> 

type OptionalFlag2<Type> = {
    [Property in keyof Type] : Type[Property] extends ()=> void ? Property : never
}[keyof Type]

interface MyStudent {
    name: string;
    age: number;
    updateName: ()=> void
}

type MyStudentConditional = OptionalFlag2<MyStudent>