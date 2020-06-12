"use strict"

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
            value: value,
			enumerable: true,
			configurable: true,
			writable: true,
		})
	} else {
		obj[key] = value
	}
	return obj
}

var Sample2 = function Sample2(name, age) {
    console.log(this,'===')
	// var _this = this

	// _defineProperty(this, "getDetails", function () {
	// 	console.log(_this, "inside getDetails for Class")
	// 	return {
	// 		name: _this.name,
	// 		age: _this.age,
	// 	}
	// })

	// this.name = name
	// this.age = age
}



Sample2('Manikandan', 21)

// console.log(s1.getDetails())