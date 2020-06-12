function Employee(){
    this.name = '';
    this.arr = [1,2];
}


function Worker(){
    Employee.call(this)
    this.projects = [];
}

Worker.prototype = Object.create(Employee.prototype);

Worker.prototype.constructor = Worker;


const s1 = new Worker();

Employee.prototype.name = "Manikandan"

console.log(s1)