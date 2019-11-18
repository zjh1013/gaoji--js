const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//在数组尾部增加元素
//this  ====  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//this.length ==== 9   长度
Array.prototype.add = function(val) {
  this[this.length] = val;
  return this;
};
//在数组尾部删除一个元素
Array.prototype.del = function() {
  --this.length;
  console.log(this);
};
//在数组第一个增加个元素
Array.prototype.addfirst = function(val) {
  for (var i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = val;
  return this;
};
//删除数组第一个元素
Array.prototype.delfirst = function() {};
// console.log(arrs.add(1, 22, 33));

console.log(arrs.addfirst(12));
