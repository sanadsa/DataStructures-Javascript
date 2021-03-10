class LinkedList {
    #first;
    #last;

    addFirst(node) {
        const nodeToAdd = new LinkedListNode(node);
        if (!this.#last) {
            this.#first = nodeToAdd;
            this.#last = nodeToAdd;
        } else {
            nodeToAdd.next = this.#first;
            this.#first = nodeToAdd;
        }
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
        let temp = this.#first;
        this.#first = this.#first.next;
        temp = null;
    }
    
    // deleteLast() {
    //     let current = this.#first;
    //     let beforeCurrent = this.#first;
    //     if (current) {
    //         while (current.next) {
    //             beforeCurrent = current;
    //             current = current.next;
    //         }
    //         beforeCurrent.next = null;
    //     }
    // }

    isEmpty() {
        return !this.#first;
    }

    deleteLast() {
        if (this.isEmpty()) return null;
    
        if (this.#first === this.#last) this.#first = this.#last = null;
        else {
          const previous = this.#getPrevious(this.#last);
          this.#last = previous;
          this.#last.next = null;
        }
    }
    
    #getPrevious(node) {
        let current = this.#first;
    
        while (current) {
          if (current.next === node) return current;
          current = current.next;
        }
    
        return null;
    }
    

    contains(node) {
        const nodeToFind = new LinkedListNode(node);
    }

    indexOf(node) {
        const nodeToFind = new LinkedListNode(node);
        let temp = this.#first;
        let index = 0;
        if (temp) {
            if (temp.value === nodeToFind.value)
                return index;
            while (temp.next) {
                index++;
                if (nodeToFind.value === temp.next.value) {
                    return index;
                }
                temp = temp.next;
            }
        }
    }

    reverse() {
        let next = this.#first.next;
        let next2;
        
        if (next) {
            next2 = next.next;
            let temp = this.#first;
            this.#first = next;
            next.next = temp;
            this.#first.next.next = null;
        }
        
        while(next2) {
            let doubleNext = next2.next;
            let temp = this.#first;
            this.#first = next2;
            next2.next = temp;

            next2 = doubleNext;
        }
    }

    getFirst() {
        return this.#first.value;
    }
    
    getLast() {
        return this.#last.value;
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

module.exports = LinkedList;

// const linkedList = new LinkedList();
// linkedList.addLast(5);
// linkedList.addLast(3);
// linkedList.addLast(6);
// linkedList.addLast(10);
// linkedList.addFirst(7)
// linkedList.reverse();
// linkedList.print();