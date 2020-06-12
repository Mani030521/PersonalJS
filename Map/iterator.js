// // const obj ={
// //     _iterator : false,
// //     next: function(){
// //         return (function(){
// //             if(this._iterator){
// //                 return {
// //                     done: true,
// //                     value: 'undefined'
// //                 }
// //             } else {
// //                 this._iterator = true;
// //                 return {
// //                     done: false,
// //                     value: 'iterator has happend'
// //                 }
// //             }

// //         })()
// //     },
// //     [Symbol.iterator]: function() { return this }
// // }

// // // for(let j of obj){
// // //     console.log(j)
// // // }

// // console.log(obj.next())
// // console.log(obj.next())
// // console.log(obj.next())
// // console.log(obj.next())


// const sample = function* (){
//     yield 1;
//     yield 2;
//     yield 3;
// }


// for(const o of sample()){
//     console.log(o)
//     break;
// }

// console.log(sample)
// console.log(sample())
// // for(const o of sample){
// //     console.log(o)
// // }


function* firstIterator(){
    yield 1;
    yield 2;
}

const f1 = firstIterator()

console.log(f1[Symbol.iterator]().next())

f1[Symbol.iterator] = function*(){
    console.log(this)
    yield 1
    yield 2
}

console.log(f1[Symbol.iterator]().next())
console.log(f1[Symbol.iterator]().next())
console.log(f1[Symbol.iterator]().next())

export const mani = "Manikandan"