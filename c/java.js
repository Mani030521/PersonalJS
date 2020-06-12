// function CreatePerson(name){
//     this.name = name;
//     this.greeting = function (){
//         console.log('greeting is called',this.name);
//     }
// }

// const per1 = CreatePerson('Mani')

// console.log(per1)
// console.log(name)

//Auto Instantiation;

// function CreatePerson(name){
//     "use strict"
//     if(this instanceof CreatePerson){
//         this.name = name;
//         this.greeting = function (){
//             console.log('greeting is called',this.name);
//         }
//     }
//     else return new CreatePerson(name)
// }

// const per1 = CreatePerson('Mani')
// // const per2 = new CreatePerson('Hema')
// console.log(per1)

// var person = {
//     // firstName: 'Mani',
//     // lastName: 'kandan',
//     fullName: function() {
//         console.log(this)
//       return this.firstName + " " + this.lastName;
//     }
//   }

// //   var x = person.fullName.apply(person1,['1','12']);
//   var x = person.fullName.apply({
//     firstName:"John",
//     lastName: "Doe"
//   });

//   console.log(x)

// function sum(a, b){
//     return a+b;
// }

// const sum1 = addCall(sum);

// sum1(1,3)
// function addCall(func) {
// 	return function() {
// 		console.log.apply(this, arguments)
// 		return func.apply(this, arguments)
// 	}
// }


function Createname (firstName, lastName) {
    // if(this instanceof Createname){
        this.firstName = firstName;
        this.lastName = lastName;
        this.greeting = function(){
            console.log(this.firstName, this.lastName)
        }
    // } else {
    //     console.log(this,arguments)
    // }
    // return '123' + firstName+ lastName;
  }
  Createname.prototype.concatenated = function () {
    return this.firstName + " " + this.lastName;
  } 


// console.log(Createname('Mani','Kandan'));
// console.log(Createname('Mani','Kandan').greeting)
//   const Calling = addCall(Createname);
//   const calling2 = new Calling("Mani","Arjunan")
  
//   console.log(calling2.concatenated());
  
  
