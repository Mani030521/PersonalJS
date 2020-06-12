let sample = (superClass) => {
	return class baseClass extends superClass {
		name = "Manikandan"
		getName() {
			return this.name
		}
	}
}

const mixin = {
	age: 21,
	getAge() {
		return this.age
	},
}
class MyClass extends sample(mixin) {
	fullname = "Manikandan Arjunan"
	getFullName() {
		return this.fullname
	}
}

const a = new MyClass()
console.log(a)
