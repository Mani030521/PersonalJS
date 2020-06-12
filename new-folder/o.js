function Sample(name) {
    this.name = name
    this.getName = () => {
        console.log(this)
        return this.name
    }
}

// Sample.prototype.getName =  () => {
// 	console.log(this)
// 	return this.name
// }

class Sample2 {
	constructor(name) {
		this.name = name
        this.getName = () => {
        	console.log(this)
        	return this.name
        }
	}
}

const s1 = new Sample("Manikandan")

const s2 = new Sample2("Hema")

const a = {
	name: "casddads",
}
s1.getName()
s2.getName()
