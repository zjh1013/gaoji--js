// var arr: number[] = [7, 8, 5, 4, 1, 2, 3, 6, 9];
// function kuaisu(arr: any) {
//   if (arr.length < 1) {
//     return arr;
//   }
//   var jizhun = Math.floor(arr.length / 2);
//   var qujizhun = arr.splice(jizhun, 1)[0];
//   var left = [];
//   var right = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < qujizhun) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return kuaisu(left).concat([qujizhun], kuaisu(right)); //合并
// }
// console.log(kuaisu(arr));

// var arr: number[] = [2, 1, 4, 5, 6, 3, 9, 8, 7];

// function kuaisu(arr: any) {
//   if (arr.length < 1) {
//     return arr;
//   }
//   var jizhun = Math.floor(arr.length / 2);
//   var qujizhun = arr.splice(jizhun, 1)[0];
//   var left = [];
//   var right = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < qujizhun) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return kuaisu(left).concat([qujizhun], kuaisu(right));
// }
// console.log(kuaisu(arr));
