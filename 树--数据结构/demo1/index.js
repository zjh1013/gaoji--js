const BinarySearchTree = function(node) {
  this.node = node;
  this.left = null;
  this.right = null;
};

class Tree {
  constructor() {
    this.root = null;
  }
  insert(node) {
    const newNode = new BinarySearchTree(node);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    console.log(this.root);
  }
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
const tree = new Tree();

// tree.insert(7);
// tree.insert(3);
// tree.insert(9);
// tree.search();
