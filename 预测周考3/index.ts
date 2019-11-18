// function selsetSort(arr) {
//   var len = arr.length;
//   var index;
//   for (var i = 0; i < len - 1; i++) {
//     index = i;
//     for (var j = i + 1; j < len; j++) {
//       if (arr[index] > arr[j]) {
//         //寻找最小值
//         index = j; //保存最小值的索引
//       }
//     }
//     if (index != i) {
//       var temp = arr[i];
//       arr[i] = arr[index];
//       arr[index] = temp;
//     }
//   }
//   console.log(arr);
//   return arr;
// }

// let arr = [, 7, 8, 9, 5, 4, 6, 3, 2, 1, 0];

// var arr = [6, 2, 5, 1, 3];

// function quickSort(arr: Number[]): Number[] {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   var pivotIndex = Math.floor(arr.length / 2);
//   var pivot = arr.splice(pivotIndex, 1)[0];
//   var left = [] as Number[];
//   var right = [] as Number[];

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat([pivot], quickSort(right));
// }
// console.log(quickSort(arr));

//ts版本的快速排序
// let arr = [7,8,9,6,5,4,1,2,3]
// let begin = 0
// let end = 0;

// sort(arr: number[], begin: number, end: number): Array<number> {
//     if (end <= begin)
//         return arr;
//     let i = begin;
//     let j = end;
//     let key = arr[begin];
//     while (true) {
//         while (true) {
//             if (i == j) break;
//             if (arr[j] < key) {
//                 let temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//                 break;
//             }
//             j--;
//         }
//         while (true) {
//             if (i == j) break;
//             if (arr[i] > key) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//                 break;
//             }
//             i++;
//         }
//         if (i == j)
//             break;
//     }
//     if (end - j > 1) {
//         arr = this.sort(arr, j + 1, end);
//     }
//     if (i - begin > 1) {
//         arr = this.sort(arr, begin, i);
//     }
//     return arr;

// }
// console.log(sort())

//ts版本的冒泡
// var arr = [7,8,5,2,3,6,4,9,1]
// var num = 0;

// maopao(arr: number[], num: number): number[] {
//     let item = 0;
//     let temp;
//     for (var index = 1; index < arr.length - num; index++) {
//         var element = arr[index];
//         if (arr[index] < arr[index - 1]) {
//             temp = arr[index];
//             arr[index] = arr[index - 1];
//             arr[index - 1] = temp;
//             item++;
//         }
//     }
//     if (item == 0)
//         return arr;
//     else
//         return this.maopao(arr, ++num);
// }
