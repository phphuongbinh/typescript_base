/* eslint-disable @typescript-eslint/no-explicit-any */
// Không muốn truyền vào mảng ở đây và sẽ xuất ra một lỗi

function deepEqualCompare<T>(a: T extends any[] ? "dont pass array here" : T, b: T extends any[] ? "dont pass array here" : T) :boolean {
    return a === b
}

deepEqualCompare("a", "a")
deepEqualCompare(12, 12)
deepEqualCompare(true, true)
// deepEqualCompare([1,2,3], [1])