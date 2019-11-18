//字符串枚举
// enum Sex {
//   nan = "男",
//   nv = "女",
//   yao = "人妖"
// }
// const gender: Sex = Sex.nan;
// console.log(gender);

// enum Sex {}
//字符串
// const str: string = "12";
// console.log(str);
//数字
// const num: number = 456;
// console.log(num);

//泛型
// function getName<T>(name: T): T {
//   console.log(name);
//   return name;
// }
// getName("左家辉");

//泛型数组
// function getArray<T>(arr: T[]) {
//   console.log(arr.length);
//   return arr;
// }
// console.log(getArray([1, 2, 3]));

//interface   函数型接口

// interface qiuhe {
//   a: number;
//   b: number;
// }

// //定义一个函数
// function qiuheArr() {}

// const arr: number[] = [1, 2, 3]; //定义数组即使number类型又是数组类型的

//-------------------------------------------

// interface Sea {
//   (aa: string, bb: string): boolean;
// }
// let mysea: Sea;

// mysea = function(a: string, b: string): boolean {
//   return a.search(b) > -1;
// };
// let res = mysea("aa", "b123");
// console.log(res);

interface Phone {
  model: string;
  price: number;
}
let newPhone: Phone = {
  model: "iphone7",
  price: 10000
};
