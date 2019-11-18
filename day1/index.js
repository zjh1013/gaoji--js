// var arr = ["a", "b", "c"];
// function push(arr) {
//   var arg = arguments;
//   for (var i = 1; i < arg.length; i++) {
//     arr[arr.length] = arg[i];
//   }
//   return arr;
// }
// push(arr, 1, 2, 3);
// console.log(arr);
class List {
  constructor() {
    this.listSize = 0; //初始化元素个数为0
    this.dataStore = [];
  }
  push(val) {
    //向列表最后面添加一个元素
    this.dataStore[this.listSize++] = val;
  }
  pop() {
    //从列表最后一个删除元素
    this.dataStore.splice(this.listSize - 1, 1);
    --this.listSize;
  }
  toString() {
    //显示列表
    return this.dataStore;
  }
  length() {
    //获取长度
    return this.listSize;
  }
}
var nnn = new List();
nnn.push(1);
nnn.push(2);
nnn.push(3);
nnn.push(4);
console.log(nnn.toString());
nnn.pop();
console.log(nnn.toString());
console.log(nnn.length());
