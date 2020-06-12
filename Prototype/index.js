const obj1 = {
    name: "Manikandan",
    getName(){
        return this.name;
    },
}

console.log(obj1.getName())

const obj2 = Object.create(obj1)

obj2.name = "He"
console.log(obj2.getName())