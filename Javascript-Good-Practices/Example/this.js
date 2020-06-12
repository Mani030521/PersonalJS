/* -----------------------------------------*/
// var s = function(){
//     return this
// }
// console.log(s())

// var obj = {
//     fun: s
// }
// var s2 = obj.fun

// console.log(obj.fun())
// console.log(s2())

/* -----------------------------------------*/

// "use strict"

// var obj = {
//     fun: function(){
//         var x = () => this
//         return x
//     }
// }


// var obj = {
//     fun: function(){
//         var _this = this
//         var x = function(){ return _this }
//         return x
//     }
// }

// var c = obj.fun()
// console.dir(c())

// var d = obj.fun
// console.dir(d()())

/* -----------------------------------------*/



// function Sample(age){
//     this.age = age;
//     var _this = this
//     setTimeout(function getDetails() {
//         console.log(_this,'===')
//     },3000)
// }


// var s = new Sample(21);


/* -----------------------------------------*/



// var obj = {
//     a: 1,
//     b: () => console.log(this),
//     c: function() {
//         return () => this
//         // console.log(this)
//     }
// }


// var c = obj.c
// console.log(obj.b())
// console.log(c()())


/* -----------------------------------------*/



function s(){
    console.log(this)
    return function a(){
        console.log(this)
    }
}
s()
s()()