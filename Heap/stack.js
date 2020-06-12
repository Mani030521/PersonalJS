class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(value){
        let newNode = new Node(value)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }

    pop(){
        if(!this.first) {
            return undefined
        }
        if(this.first === this.last){
            this.last = null
        }

        let temp = this.first.next
        this.first = temp

        return --this.size
    }
}


let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)

console.log(stack)