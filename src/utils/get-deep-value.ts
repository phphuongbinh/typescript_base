/* eslint-disable @typescript-eslint/no-unused-vars */

function getDeepValue<T , FK extends keyof T, SK extends keyof T[FK]>(obj : T, firsrKey : FK, secondKey: SK) {
    return obj[firsrKey][secondKey]
}

const obj = {
    foo : {
        a: true,
        b: 20
    },
    baz : {
        c: false,
        d: 30
    }
}

// Nested object
getDeepValue(obj, "foo", "a")
