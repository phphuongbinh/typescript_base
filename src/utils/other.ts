// in : Kiểm tra key ở trong obj có tồn tại hay không?

// typeof : Trả ra các type ở trong properties

// keyof : Trả ra các key 


function log(obj : {name: string} | {age: number}){
   if('name' in obj) {
    console.log(obj.name);
   }
}

const myStudent = {
    id: 1,
    name: "binh",
    age: 26
}

type Student = keyof typeof myStudent
