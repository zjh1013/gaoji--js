const erchaTree = function(key) {
  this.key = key;
  this.left = null;
  this.right = null;
};
class Tree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    const newNode = new erchaTree(key);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    console.log(this.root);

    return this.root;
  }
  insertNode(root, key) {
    if (root.key > key.key) {
      if (root.left == null) {
        root.left = key;
      } else {
        this.insertNode(this.left, key);
      }
    } else {
      if (root.right == null) {
        root.right = key;
      } else {
        this.insertNode(this.right, key);
      }
    }
  }
  min() {
    return this.minNode(this.root);
  }
  minNode(root) {
    let current = root;
    while (current != null && current.left != null) {
      current = current.left;
    }
    console.log(current, "小小小小");
    return current;
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(root) {
    let current = root;
    while (current != null && current.right != null) {
      current = current.right;
    }
    console.log(current, "大大大大");
    return current;
  }
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(root, key) {
    if (root == null) return false;
    let current = root;
    if (key < current.key) {
      //left
      current = current.left;
      return this.searchNode(current, key);
    } else if (key > current.key) {
      //right
      current = current.right;
      return this.searchNode(current, key);
    } else {
      return current;
    }
  }
}
const tree = new Tree();
tree.insert(3);
tree.insert(1);
tree.insert(4);
tree.min();
tree.max();
console.log(tree.search(4), "找到的值");
