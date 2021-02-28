class MyArray {
    arr;
    constructor(length) {
        this.arr = new Array(length);
    }

    insert(item) {
        this.arr.push(item);
    } 
    
    removeAt(index) {
        this.arr.splice(index, 1);
    }

    indexOf(item) {
        
    }

    print() {
        this.arr.forEach(element => {
            console.log(element);
        });
    }
}

let testArr = new MyArray(4);
testArr.insert(5);
testArr.insert(7);
testArr.print();