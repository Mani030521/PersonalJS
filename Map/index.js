
// // const names = "hello"

// // const obj = {
// //     name: 'Manikandan',
// //     dept: 'CSE',
// //     Job: 'Mindtree',
// // }


// // let m1 = new Map();
// // m1.set(names,"Manikandan" )

// // console.log(obj)
// // console.log(m1)


// const privates = new WeakMap();
// function Public(){
//     const privateObj = {
//         name: 'Manikandan',
//         defaultValue: 2,
//     }
//     privates.set(this, privateObj)
//     console.log(privates)
// }

// Public.prototype.method = function(){
//     console.log(privates)
//     const me = privates.get(this);
//     console.log(privates)
//     return me
// }

// Public();
// new Public().method()
// // module.exports  = Public


const obj = {
    name: 'Manikandan',
    stream: 'CSE',
    details: {
        job: 'Mindtree',
        Project: 'P&G'
    }
}


// function objectFinding(obj, propName){
//     let result;
//     for(let i in obj){

//             console.log(propName.i)
//         console.log(obj[i])
//         if(obj.hasOwnProperty)
//         result += `${propName}.${i}` = `${obj[i]}`
//     }
// }

// function objectFinding(obj, objName) {
//     var result = ``;
//     for (var i in obj) {
//       // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//         result += `${objName}.${i} = ${obj[i]}\n`;
//     }
//     return result;
//   }

// console.log(objectFinding(obj,"obj"))

// //Enumerable
// Object.defineProperty(obj, 'newProp',{
//     enumerable: false,
//     value:'hello'
// })

// console.log(Object.getPrototypeOf(obj))
// console.log(Object.getOwnPropertyNames(obj))
// console.log(obj)

function Sample(name, age){
    this.name = name;
    this.age = age;
}

const s1 = new Sample('Mani', 23)
const s2 = new Sample('sample', 20)

console.log(s1)
console.log(s2)

// Sample.prototype.dob = null;

// console.log(s1)
// console.log(s2)



// console.log(s1.dob)
// s1.dob = 21-21-2012;
// console.log(s1)
// // console.log(s2.dob)
// // s2.dob = 1-1-201;
// // console.log(s2.dob)