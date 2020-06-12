function PersonalDetails(name, age){
    this.name = name
    this.age = age
}

PersonalDetails.prototype.getName = function(){
    return this.name
}

PersonalDetails.prototype.getAge = function(){
    return this.age
}

function Derived(name, age, job){
    PersonalDetails.call(this, name, age)
    this.job = job
}


Derived.prototype = Object.create(PersonalDetails.prototype)
Derived.prototype.constructor = Derived

Derived.prototype.getJob = function(){
    return this.job
}

const a = new Derived('Manikandan',22,'FSE')
console.log(a)