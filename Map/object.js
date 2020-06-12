const obj = {
    a: 1,
    // get c(){
    //     return this.a
    // },
    // set b(value){
    //     this.a = value
    // }
}



// Object.defineProperty(obj, 'c', {
//     get: function() { return this.a},
//     set: function(value) { this.a = value}
// })


// Object.defineProperties(obj, {
//     'b': { get: function(){ return this.a}},
//     'c': { set: function(value) { this.a = value}}
// })
// console.log(obj.b)
// obj.c = 2
// console.log(obj.a)


let object = {}

let foo = { u : 1}, bar = {u: 2}
// let foo = 1;

object[foo] = 'value'

console.log(object)