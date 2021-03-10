const LinkedList = require("./LinkedList/LinkedList");

const openToClose = {
    "<": ">",
    "[": "]",
    "(": ")",
    "{": "}",
  };
  const closeToOpen = {
    ">": "<",
    "]": "[",
    ")": "(",
    "}": "{",
  };
  
  function checkString(string) {
    const stack = new Stack();
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
  
      if (openToClose[char]) {
        stack.push(char);
      } else if (closeToOpen[char]) {
        if (stack.empty()) return false;
  
        const poppedChar = stack.pop();
        if (openToClose[poppedChar] !== char) return false;
      }
    }
  
    return !!stack.empty();
  }

  
class Stack {
    linkedList = new LinkedList();
    push(item) {
        this.linkedList.addLast(item);
    }

    pop() {
        const last = this.linkedList.getLast();
        this.linkedList.deleteLast();
        return last;
    }

    peek() {
        if (!this.empty()) return this.linkedList.getLast();
    }

    empty() {
        return !this.linkedList.getFirst()
    }
}

const stack = new Stack();
stack.push("1");
stack.push("2");
stack.push("3");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());


  