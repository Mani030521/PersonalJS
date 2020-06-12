// "use strict";

// var _this = void 0;

// function Sample1(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Sample1.prototype.getDetails = function () {
//   console.log(_this, 'inside getDetails for functional');
//   return {
//     name: _this.name,
//     age: _this.age
//   };
// };


function Sample1(name, age) {
	this.name = name
	this.age = age
	this.getDetails = function() {
		console.log(this, "inside getDetails for functional")
		return {
			name: this.name,
			age: this.age,
		}
	}
}


const s1 =  new Sample1()

s1.getDetails.bind({name: 'manikanda'})()