"use strict"

/**
 * @param {Function || Constructor} Parent Provide Parent Class that you need
 * @param {Function || Constructor } callbackConstructor Provide child class Constructor as ur callback
 * @param {Object} props Provide the methods that you want in the class
 */

var klass = function (Parent, callbackConstructor, props) {
	Parent = Parent || Object
	Child.prototype = Object.create(Parent.prototype)
	Child.uber = Parent.prototype
	for (var i in props) {
		if (props.hasOwnProperty(i)) {
			Child.prototype[i] = props[i]
		}
	}
	Child.prototype.constructor = callbackConstructor
	function Child() {
		if (Child.uber && Child.uber.hasOwnProperty("constructor")) {
			Child.uber.constructor.apply(this, arguments)
		}

		if (Child.prototype.hasOwnProperty("constructor")) {
			Child.prototype.constructor.apply(this, arguments)
		}
	}

	return Child
}

/* --------------------> Client */

var Man = klass(
	null,
	function (name) {
		this.name = name
	},
	{
		getName: function () {
			return this.name
		},
	}
)

var SuperMan = klass(
	Man,
	function (name, age) {
		Man.bind(this, name) // Calling Custom Parent Class Constructor(Bind should use since calling another function will cause that function execution context in different environment)
		this.age = age
	},
	{}
)
var SuperMan2 = klass(
	SuperMan,
	function (name, age, className) {
		SuperMan.bind(this, name, age)()
		this.className = className
	},
	{
		getAge: function () {
			return this.age
		},
	}
)

const s = new SuperMan("asd",123, 5)
console.log(s)