// var arr = [8, 2, 5, 7, 9, 6, 4, 1, 3];
// function maoPao(arr) {
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// var aaa = maoPao(arr);
// console.log(aaa);
//冒泡

// 煮豆燃豆萁  豆在釜中泣 本是同根生 相煎何太急
// 枯藤老树昏鸦 小桥流水人家  古道西风瘦马    夕阳西下  断肠人在天涯
// 鹅鹅鹅  曲项向天歌  白毛浮绿水 红掌拨清波
// 中华上下5000年
// 曹操  吕布 貂蝉  小乔  大乔  公孙瓒   刘备 关羽  张飞   赵子龙   诸葛亮 庞统  司马懿 孙策  孙权 曹植  曹丕  刘禅

//第一种方法  es6拓展运算符
var arr = [1, 4, 7, 8, 5, 2, 3, 6, 9];
console.log(Math.max(...arr));

//第二种方法 es5----apply
console.log(Math.max.apply(null, arr));


