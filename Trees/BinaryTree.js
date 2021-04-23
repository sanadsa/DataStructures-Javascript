class BinaryTree {
    root;

    insert(value) {
        const nodeToAdd = new TreeNode(value);
        if (!this.root)
            this.root = nodeToAdd;
        else {
            let current = this.root;
            while ((value < current.value && current.leftChild) || (value > current.value && current.rightChild)) {
                if (value < current.value)
                    current = current.leftChild;
                else
                    current = current.rightChild;
            }
            if (value >= current.value)
                current.rightChild = nodeToAdd;
            else
                current.leftChild = nodeToAdd;
        }
    }

    find(value) {
        let current = this.root;
        while (value !== current.value && (current.leftChild || current.rightChild)) {
            if (value < current.value)
                current = current.leftChild;
            else
                current = current.rightChild;
        }

        if (current.value === value) {
            return current;
        }
        else {
            return null;
        }
    }
}

class TreeNode {
    value;
    leftChild;
    rightChild;

    constructor (value) {
        this.value = value;
    }
}

module.exports = BinaryTree;

const tree = new BinaryTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.find(85);