function a(x,y){
    return x*y;
}   

// a.prototype.multiply = function(){
//     return this.x * this.y;
// }


// let a1 = a.apply({x: 10, y: 2});
let a1 = new a(1,2);
// console.log(a1.__proto__.constructor === a.prototype.constructor && a.prototype.constructor === a && a1.__proto__.constructor === a)
// console.log()
console.log(a.prototype)
console.log(Object.prototype)
console.log(a.__proto__.__proto__ === Object.prototype)
function instanceOf(Func){
    console.log(this.__proto__)
    while(this !== null){
      if(this.__proto__ === Func.prototype)
        return true;
        else{

            return false;
        }
    }
  } 

//   console.log(instanceOf.call({a: 'nam'},a))

const samp = {
    a: 'nasd'
}
// console.log(a.prototype)
// console.log(Function.__proto__ === Function.prototype)
// console.log(instanceOf.__proto__.constructor === Function)
var fn = function () {};
// fn.prototype.myname = function () {
//     console.log('myname');
// };

var ob = new fn()
var obj = {
    __proto__: fn.prototype
};

// console.log(ob.__proto__.myname === fn.prototype.myname)
// obj.myname(); // myname
// ob.__proto__ = function ga(){
//     return 2
// }

ob.__proto__= {...obj.__proto__}
// console.log(obj instanceof Object)
// console.log(ob instanceof Object)
// console.log(Function.__proto__ === Function.prototype)
// console.log(Object.__proto__ )
// console.log(Function.__proto__ )

// console.log(fn.__proto__ === Function.prototype)
console.log(Function.prototype )
console.log((new Function).__proto__ )
console.log(Object.prototype)
console.log((new Object).__proto__ )
// console.log(Function.prototype)

// console.log((new Object).__proto__ === Object.prototype)
// console.log((new Function).__proto__)
// console.log(Function.prototype.constructor === Function)


// const arr = ['1','5','2','02']

// console.log('02'.charCodeAt())
// console.log(arr[0].charCodeAt())
// console.log(arr[2].charCodeAt())
// console.log(arr[1].charCodeAt())

