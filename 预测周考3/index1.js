// function kuaisu(arr) {
//   if (arr.length < 1) {
//     return arr;
//   }
//   var jizhun = Math.floor(arr.length / 2); //找到基准数
//   var qujizhun = arr.splice(jizhun, 1)[0]; //去除基准数
//   var left = [];
//   var right = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < qujizhun) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return kuaisu(left).concat([qujizhun], kuaisu(right)); //合并左边和右边的数组  并返回
// }
// let arr = [7, 8, 5, 4, 1, 2, 3, 6, 9];
// console.log(kuaisu(arr));

// var arr = [7, 4, 1, 2, 5, 8, 9, 6, 3, 0];
// function kuaisu(arr) {
//   if (arr.length < 1) {
//     //判断 如果arr数组的长度小于1的话 就不用排序了
//     return arr;
//   }
//   var jizhun = Math.floor(arr.length / 2); //计算数组的长度一半
//   console.log(jizhun, "------");
//   var qujizhun = arr.splice(jizhun, 1)[0]; //找到那个基准数的下标
//   console.log(qujizhun, "+++++++");
//   var left = [];
//   var right = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < qujizhun) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return kuaisu(left).concat(qujizhun, kuaisu(right));
// }
// console.log(kuaisu(arr));

var arr = [7, 4, 5, 2, 8, 9, 6, 1, 3];
function kuaisu(arr) {
  if (arr.length < 1) return arr;
  var jizhun = Math.floor(arr.length / 2);
  var qujizhun = arr.splice(jizhun, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < qujizhun) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return kuaisu(left).concat(qujizhun, kuaisu(right));
}
console.log(kuaisu(arr));
