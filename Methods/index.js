
function S(name){
    this.name = name
}

S.prototype.getName = function(){
    return this.name
}

function Sample(name, age) {
    S.call(this, name)
    this.age = age
}

Sample.prototype = Object.create(S.prototype, {
    constructor: {
        value: Sample
    }
})

Sample.prototype.getAge = function () {
	return this.age
}


function Sample2(name, age, dept) {
    Sample.call(this, name, age)
    this.dept = dept
}
Sample2.prototype = Object.create(Sample.prototype, {
    constructor: {
        value: Sample2
    }
}) // {}, __proto__: {Sample.prototype}
Sample2.prototype.getDept = function(){
    return this.getDept
}

const s1 = new Sample2('Manikandan', 21, 'CSE')
const s2 = new S('CSE')
console.log(s1)
console.log(s2)