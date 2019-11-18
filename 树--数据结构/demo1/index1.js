const erchaTree = function(key) {
  this.key = key;
  this.left = null;
  this.right = null;
};
class Tree {
  constructor() {
    this.root = null; //二叉树的根节点 为空（）
  }
  search(node) {
    return this.searchNode(this.root, node);
  }
  searchNode(root, node) {
    if (root == null) return false;
    let current = root;
    if (current.key < node) {
      current = current.right;
      return this.searchNode(current, node);
    } else if (current.key > node) {
      current = current.left;
      return this.searchNode(current, node);
    } else {
      return current;
    }
  }
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (node != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  insert(node) {
    const newNode = new erchaTree(node);
    //newNode 就是传过来的值
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode); //调用insertNode方法  、第一个参数 根节点   第二个参数  传过去的值
    }
    console.log(this.root);
    return this.root;
  }
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

const tree = new Tree();
tree.insert(3);
tree.insert(10);
tree.insert(5);
tree.insert(2);

// console.log(tree.min(), "------------");
// console.log(tree.max(), "++++++++++++");
// console.log(tree.search(3), "---*****");
