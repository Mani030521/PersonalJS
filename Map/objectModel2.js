function First(){
    this.name = "Manikandan"
    this.dept = "Engineering"
}

function Second(){
    this.job = "Mindtree"
    this.work = "Software"
}


function Three(){
    First.call(this)
    Second.call(this)
    this.region = "Chennai"
}

Three.prototype = Object.create(Second.prototype)
const t1 = new Three()

console.log(t1)