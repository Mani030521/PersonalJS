// /*mixin - mixing property from different objects */

// var mix = function(){
// 	var child = {};

// 	for(var i=0, max=arguments.length; i<max; i++){
// 		for(var prop in arguments[i]){
// 			if(arguments[i].hasOwnProperty(prop)){
// 				child[prop] = arguments[i][prop];
// 			}
// 		}
// 	}
// 	return child;
// };

// var cake = mix(
// 	{eggs: 3, large: true},
// 	{butter: 1, salted: true},
// 	{sugar: "sure"}
// );

// console.log(cake);

/**
 * Mixins 2nd version
 */

function mixin(dest, sour) {
	for (let i in sour) {
		if (sour.hasOwnProperty(i)) {
			dest[i] = sour[i]
		}
	}

	return dest
}

function EmpDetails(name, age) {
	this.name = name
	this.age = age
}

const mixinObject = {
	getName() {
		return this.name
	},
	getAge() {
		return this.age
	},
}

mixin(EmpDetails.prototype, mixinObject)
const e = new EmpDetails()

console.log(e)
