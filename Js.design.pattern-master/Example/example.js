function Sample1(name, age) {
	this.name = name
	this.age = age
	this.getDetails = () => {
		console.log(this, "inside getDetails for functional")
		return {
			name: this.name,
			age: this.age,
		}
	}
}

// Sample1.prototype.getDetails = () => {
//     console.log(this, 'inside getDetails for functional')
//     return {
//         name: this.name,
//         age: this.age,
//     }
// }

class Sample2 {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	getDetails = () => {
		console.log(this, "inside getDetails for Class")
		return {
			name: this.name,
			age: this.age,
		}
	}
}

const sFunc = new Sample1("Mani", 23)
const sClass = new Sample2("Hema", 22)

sFunc.getDetails()
sClass.getDetails()
