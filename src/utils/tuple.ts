// [number, number] => [100, 120]
type ThreeDCoordinate = [x: number, y:number, z:number];
function add3DCoordinate(a: ThreeDCoordinate, b: ThreeDCoordinate) :ThreeDCoordinate {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
}

add3DCoordinate([12, 124, 45], [124, 546, 23])

// useState with Typescript

export function simpleUseState(val: string) : [string, (v:string)=> void] {
    return [
        val,
        (v: string)=> {
            val = v
            console.log(val);
            
        }
    ]
}

const [valueStr, setValueStr] = simpleUseState("ErauQs")
console.log(valueStr)
setValueStr("Binh")