/* eslint-disable @typescript-eslint/no-unused-vars */
export const devices = [
    {
        name: "Iphone",
        price: 1000
    },
    {
        name: "Ipad",
        price: 2000
    },
    {
        name: "Macbook",
        price: 3000
    },
]

export function getDevicesKeys<A, B extends keyof A>(items: A[], key: B) :A[B][] {
    return items.map(item=> item[key])
}

getDevicesKeys(devices, "name")