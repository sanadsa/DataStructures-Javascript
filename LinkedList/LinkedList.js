class LinkedList {
    #first;
    #last;

    addFirst(node) {
        node.next = this.#first;
    }
    
    addLast(node) {
        const nodeToAdd = new LinkedListNode(node);
        if (!this.#last) {
            this.#first = nodeToAdd;
            this.#last = nodeToAdd;
        } else {
            this.#last.next = nodeToAdd;
            this.#last = this.#last.next;
        }
    }

    deleteFirst() {
        this.#first.next = this.#first;
        this.#first = null;
    }
    
    deleteLast() {
        let current = this.#first;
        let beforeCurrent = this.#first;
        while (current.next) {
            beforeCurrent = current;
            current = current.next;
        }

        beforeCurrent.next = null;
    }

    print() {
        let current = this.#first;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

class LinkedListNode {
    value;
    next;

    constructor (value) {
        this.value = value;
    }
}

const linkedList = new LinkedList();
linkedList.addLast(5);
linkedList.addLast(3);
linkedList.addLast(63);
linkedList.addLast(6);
linkedList.print();