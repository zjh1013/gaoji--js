// interface zuo {
//   sum(x: number, y: number): number;
// }

// class Jia implements zuo {
//   sum(x: number, y: number): number {
//     return x + y;
//   }
// }

// const jia = new Jia();
// console.log(jia.sum(1, 2));

// interface banji {
//   name: string;
//   age: number;
// }

// class ClassRoom implements banji {
//   public name: string = null;
//   public age: number = null;
// }

// const classroom = new ClassRoom();
// console.log();

// interface zuo {
//   sum(x: number, y: number): number;
// }
// class Hui implements zuo {
//   sum(x: number, y: number): number {
//     return x + y;
//   }
// }
// const hui = new Hui();
// console.log(hui.sum(1, 2));

// interface zuo {
//   strSum(x, y, z);
// }
// class Hui implements zuo {
//   strSum(x: string, y: string, z: string): string {
//     return x + y + z;
//   }
// }
// const hui = new Hui();
// console.log(hui.strSum("zuo", "jia", "hui"));

//泛型约束必须有length

// interface Test {
//   length: number;
// }
// function Zuo<T extends Test>(num: T): T {
//   // console.log(num.length);
//   return num;
// }
// console.log(Zuo("22"));

//泛型接口
interface Con {
  <T>(val: T): T;
}
var get: Con = function<T>(val: T): T {
  console.log(val);
  return val;
};
get<number>(123);
