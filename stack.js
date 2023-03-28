class Stack {
    constructor() {
        this.array = []
    }
    add(item) {
        this.array.push(item)
        return this.array;
    }
    remove() {
        this.array.shift()
        return this.array
    }
}

const stack = new Stack();
stack.add('Item')
stack.add('Item2')
console.log(stack.remove())