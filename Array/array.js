class MyArray {
    arr;
    #length;
    constructor(length) {
        this.arr = new Array(length);
        this.#length = length;
    }

    insert(item) {
        // use last instead of for loop
        for (let i = 0; i < this.#length; i++) {
            if (this.arr[this.#length - 1] !== undefined) {
                let newArr = new Array(this.#length * 2);
                for (let ind = 0; ind < this.#length; ind++) {
                    newArr[ind] = this.arr[ind];
                }
                this.arr = newArr;
                this.#length *= 2;
            }
            if (this.arr[i] === undefined) {
                this.arr[i] = item;
                i = this.#length;
            } 
        }
    } 
    
    removeAt(index) {
        let temp = this.arr.splice(index, 1);
    }

    indexOf(item) {
        
    }

    print() {
        console.log(this.arr);
        // this.arr.forEach(element => {
        //     console.log(element);
        // });
    }
}

// let testArr = new MyArray(5);
// testArr.insert(5);
// testArr.insert(7);
// testArr.insert(7);
// testArr.insert(8);
// testArr.removeAt(0);
// testArr.print();

module.exports = MyArray;