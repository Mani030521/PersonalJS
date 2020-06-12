// // class Employee{
// //     constructor(){
// //         this.name = '';
// //         this.dept = 'General'
// //     }
// // }
// // console.log(Employee.prototype)

// function sample(name){
//     this.name = name;
//     // this.newFun = function(){
//     //     console.log(this.name + 'called')
//     // }
// }

// sample.prototype.newFun = function(){
//     console.log(this.name + 'called')
// }

// let s1 = new sample('Mani')
// let s2 = new sample('Aas')
// // s1.newFun();
// console.log(s1)
// // delete s1.newFun()
// console.log(s1)
// console.log(s2.__proto__)


// // function sample2(age){
// //     this.age = age;
// // }

// // sample2.prototype.newFun2 = function(){
// //     console.log(this.age + 'called')
// // }

// // let s2 = new sample2(2)
// // s1.__proto__ = {...s2.__proto__}
// // console.log(s1.__proto__)
// // delete s1.__proto__.newFun2
// // console.log(s2.__proto__)

function Employee(name){
    this.name = name;
}

Employee.prototype.empId = function(empId){
    console.log(this.name + 'and ID' + empId)
}

let e1 = new Employee('Mani')
console.log(e1.__proto__)
// console.log(e1)

function AnotherOrganisation(name){
    this.name = name
}

AnotherOrganisation.prototype.orgId = function(orgId){
    console.log(this.name + 'and ID' + orgId)
}

let a1 = new AnotherOrganisation('Mindtree')
// console.log(a1.__proto__)

// e1.__proto__ = a1.__proto__

// delete e1.__proto__.orgId
console.log(e1 instanceof AnotherOrganisation)
// console.log(e1.orgId.apply(a1));
// console.log(a1)
console.log(e1.__proto__)
console.log(a1.__proto__)

class SuperEmployee extends Employee{
    constructor(name){
        super(name);
        this.firstName = "Mani"
    }

    empId(){
        super.empId();
    }
}

let s2 = new SuperEmployee('Arjunan')

// s2.__proto__ = a1.__proto__;
console.log(s2.empId())
// console.log(s2.__proto__)
// console.log(s2 instanceof AnotherOrganisation)
