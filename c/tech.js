// 'use strict'

// function c(name){
//     if(this instanceof c){
//         this.name = name;

//     } else {
//         throw 'It should be called with new'
//     }
// }

// let call = c.apply({name : 'asd'});

// console.log(call)

const Car = function(color){
    this.color = color;
    this.newFun = function(){
        return this instanceof ToyCar
    }
}

// Car.prototype.getColor = function(hello){
//     return hello;
// }

const ToyCar = function(color){
     new Car(color)
    }
// console.log(new Car())
// ToyCar.prototype =  Car.prototype;
// ToyCar.prototype =  Object.create(Car.prototype);
// ToyCar.prototype =  new Car()

// ToyCar.prototype.getCoslor = function(){
//     return 'hello'
// }
const legoCar = new ToyCar('hello');
console.dir(legoCar)
// console.dir(legoCar.newFun())



//Inheritance using Object literals

// let car1 = {
//     getColor: function(){
//         return 'its blue'
//     }
// }

// let car2 = {
//     getName: function(){
//         return 'its Car2'
//     }
// }

// Object.setPrototypeOf(car2, Car)

// console.log(car2)