// class Ba {
//     constructor(name){
//         this.name = name;
//     }

//     getName(){
//         return this.name;
//     }
// }

// class Derive extends Ba{
//     constructor(name, age){
//         super(name);
//         this.age = age;
//     }

//     getAge(){
//         return this.age;
//     }
// }

// const obj1 = new Derive('Mani','Age')
// console.log(obj1)

function Base(name){
    this.name = name;
}

Base.prototype.getName = function(){
    return this.name;
}

function Derived(name, age){
    Base.call(this, name);
    this.age = age;
}


Derived.prototype = Object.create(Base.prototype)
Derived.prototype.constructor = Derived
Derived.prototype.getAge = function getAge(){
        return this.age;
}


const obj = new Derived('Mani', 21)
console.log(obj)