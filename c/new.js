
// // // // // const details = {
// // // // //     name: 'Mani',
// // // // //     cllgDetailsFun: function(){
// // // // //         var temp = this
// // // // //         return function(){
// // // // //             // console.log(temp);
// // // // //             console.log(this)
// // // // //         }
// // // // //     },

// // // // //     officeDetails: function(){
// // // // //         return () => {
// // // // //             console.log(this)
// // // // //         }
// // // // //     }
// // // // // }


// // // // // const detail1 = details.cllgDetailsFun()
// // // // // const detail2 = details.officeDetails()

// // // // // detail1();
// // // // // detail2();



// // // // // const arr = [1,2,3,4];

// // // // // const [  ] = [arr]

// // // // const name = 'mani';

// // // // if(name){
// // // //     console.log('if')
// // // // }else {
// // // //     console.log('else')
// // // // }

// // // function Sample () {

// // // }

// // // Sample.prototype.name = "Mani"
// // // Sample.prototype.arr = [1,2,3,4,5]
// // // Sample.prototype.office = "Mindtree"
// // // Sample.prototype.anotherFun = () => {
// // //     console.log(this.office)
// // // }

// // // let s1 = new Sample();

// // // let s2 = new Sample();

// // // s1.arr.push('Dinesh')
// // // s2.name = 'test'

// // // const obj1 = {
// // //     mani : "Mani"
// // // }
// // // const obj2 = {
// // //     mani : "Mani"
// // // }
// // // console.log(obj1 )
// // // // console.log(s1.__proto__ === Sample.prototype)
// // // // console.log(s1.__proto__ )


// // // // function SampleCounter(value) {
// // // //     this.value = value || 0

// // // //     this.increment = function() {
// // // //         this.value  += 1
// // // //         return this
// // // //     }
    
// // // //     this.decrement = function() {
// // // //         this.value  -= 1
// // // //         return this
// // // //     }

// // // // }


// // // // var counter = new SampleCounter(2)


// // // // console.log(counter.increment().increment().value)



// // function firstFun() {
// //     this.a = 0;
// //     this.b = 0;
// // }

// // firstFun.prototype = function(a,b) {
// //     this.a = a;
// //     this.b = b;
// //     console.log('hello',a,b);
// // }

// // function secondFun() {
// //     firstFun.call(this)
// // }

// // console.log(secondFun.prototype = Object.create(firstFun.prototype));


var first = function() {
    this.firstName = "Mani"
    this.secondName = "Arjunan"
    this.name = function() {
        return this.firstName
    }
    return this
}

var second = function() {
    var private = "private"
    this.firstName = "Manikandan"
    this.second = function() {
        return this.firstName
    }
    return this
}


// console.log(second.prototype = new first())
second.prototype = new first()
second.prototype.extra = "asd"

var s1 = new second();

// var s2 = new s1.second()
console.log("s1 instance of second",s1 instanceof second);
console.log("second instance of first", s1 instanceof first)
console.log (s1.second())
console.log(s1.name())
console.log(s1.private)
console.log(s1.secondName)
// console.log(s1.extra)
console.log(second.prototype)
console.log(s1)
// console.log(s2)

