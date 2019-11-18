const erchaTree = function(key) {
  this.key = key;
  this.left = null;
  this.right = null;
};
class Tree {
  constructor() {
    this.root = null; //给根节点设置空
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
    if (key.key < root.key) {
      if (root.left == null) {
        root.left = key;
      } else {
        this.insertNode(root.left, key);
      }
    } else {
      if (root.right == null) {
        root.right = key;
      } else {
        this.insertNode(root.right, key);
      }
    }
  }
  min() {
    return this.minNode(this.root);
  }
  minNode(root) {
    if (root == null) return false;
    let current = root;
    if (current != null && current.left != null) {
      current = current.left;
    }
    console.log(current, "小小小");

    return current;
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(root) {
    if (root == null) return false;
    let current = root;
    if (current != null && current.right != null) {
      current = current.right;
    }
    console.log(current, "大大大");

    return current;
  }
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(root, key) {
    if (root == null) return false;
    let current = root;
    if (key < current.key) {
      current = current.left;
      return this.searchNode(current, key);
    } else if (key > current.key) {
      current = current.right;
      return this.searchNode(current, key);
    } else {
      return current;
    }
  }
  del(key) {
    this.root = this.delNode(this.root, key);
    console.log(this.root, "删除成功");
  }
  delNode(root, key) {
    if (root == null) return false;
    if (key < root.key) {
      root.left = this.delNode(root.left, key);
    } else if (key > root.key) {
      root.right = this.delNode(root.right, key);
    } else {
      //找到要删除的节点
      //删除没有叶节点元素，直接将当前节点等于null
      if (root.left === null && root.right === null) {
        root = null;
      }
      //删除没有左叶节点的节点，直接将当前节点，等于右节点
      else if (root.left === null) {
        root = root.right;
      }
      //删除没有右叶节点的节点，直接将当前节 点，等于左节点
      else if (root.right === null) {
        root = root.left;
      } else {
        let prevNode = root.left;
        while (prevNode.right) {
          prevNode = prevNode.right;
        }
        root.key = prevNode.key;
        root.left = this.delNode(root.left, prevNode.key);
      }
    }
    return root;
  }
}
const tree = new Tree();
tree.insert(3);
tree.insert(1);
tree.insert(4);
tree.min();
tree.max();
tree.del(1);
console.log(tree.search(4), "找到的值");
