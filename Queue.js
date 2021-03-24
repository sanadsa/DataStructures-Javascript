const MyArray = require("./Array/array");
const Stack = require("./Stack")

class ArrayQueue {
    queue;
    front;
    rear;
    constructor(length) {
        this.queue = new MyArray(length);
    }

    enqueue(item) {
        this.queue.insert(item);
    }

    dequeue() {
        // front + 1
        this.queue.removeAt(0);
    }

    peek() {
        console.log(this.queue.length);
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
            if (this.queue[i] !== undefined) {
                return this.queue[i];
            }
        }
    }

    isEmpty() {
        
    }

    isFull() {}

    print() {
        this.queue.print();
    }
}

class StackQueue {
    #stack1;
    #stack2;

    constructor() {
        this.#stack1 = new Stack();
        this.#stack2 = new Stack();
    }

    enqueue(item) {
        this.#stack1.push(item);
    }

    dequeue() {
        while (!this.#stack1.empty()) {
            this.#stack2.push(this.#stack1.pop());
        }

        const firstItem = this.#stack2.pop();

        while (!this.#stack2.empty()) {
            this.#stack1.push(this.#stack2.pop());
        }

        return firstItem;
    }

    peek() {
    }

    isEmpty() {
        
    }

    isFull() {}

    print() {
        this.queue.print();
    }
}

const queueArr = new ArrayQueue(5);
queueArr.print();
queueArr.enqueue(10);
queueArr.enqueue(20);
queueArr.enqueue(30);
queueArr.dequeue();
queueArr.dequeue();
console.log(queueArr.peek());
 queueArr.print();