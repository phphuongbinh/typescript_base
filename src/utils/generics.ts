// // [number, number] => [100, 120]
// type ThreeDCoordinate = [x: number, y:number, z:number];
// function add3DCoordinate(a: ThreeDCoordinate, b: ThreeDCoordinate) :ThreeDCoordinate {
//     return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
// }

// add3DCoordinate([12, 124, 45], [124, 546, 23])

// // useState with Typescript

// export function simpleUseState<T>(val: T) : [()=> T, (v:T)=> void] {
//     return [
//         ()=> val,
//         (v: T)=> {
//             val = v
//             console.log(val);
            
//         }
//     ]
// }

// const [stringGetter, stringSetter] = simpleUseState("ErauQs")
// console.log(stringGetter)
// stringSetter("Binh")
// const [stringGetter2, stringSetter2] = simpleUseState(100)
// console.log(stringGetter2)
// stringSetter2(124)

interface Rank<RankItem> {
        item: RankItem;
        rank: number;
}

export function ranker<RankItem>(
    items: RankItem[],
    rankCallback: (v: RankItem)=> number
) : RankItem[] {
    const ranks : Rank<RankItem>[] = items.map((item)=> ({
        item,
        rank: rankCallback(item)
    }));
    ranks.sort((a, b)=> a.rank - b.rank)
    
    return ranks.map(r=> r.item)
}

const languages : {
    name: string,
    difficult: number
}[] = [
    {
        name: "react",
        difficult: 60
    },
    {
        name: "Angular",
        difficult: 90
    },
    {
        name: "vue",
        difficult: 70
    },
]

console.log(ranker(languages, ({difficult})=> difficult));



// [1,2,3,4,5] (v)=> v * 5