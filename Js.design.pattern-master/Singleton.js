/* */

// -------------------> Normal Constructor Pattern using functions
// function Singleton(name, age){
// 	this.name = name
// 	this.age = age
// }

// -------------------> Singleton Constructor Pattern Using functions
// function Singleton(name, age) {
// 	if (Singleton.instance) {
// 		return Singleton.instance
// 	}
// 	const asd = () => {
// 		console.log(this)
// 	}
// 	this.asd = asd
// 	Singleton.instance = this
// 	this.name = name
// 	this.age = age
// }

// -------------------> Normal Constructor Pattern using Class
// class Singleton {
// 	constructor(name, age){
// 		this.name = name
// 		this.age = age
// 	}
// }

// -------------------> Singleton Constructor Pattern Using Class

class Singleton {
	constructor(name, age) {
		if(Singleton.instance){
			return Singleton.instance
		}
		Singleton.instance = this
		this.name = name
		this.age = age
	}
}
const a = new Singleton("Manikandan", 21)
const a2 = new Singleton("Hem", 21)

console.log(a, a2)
