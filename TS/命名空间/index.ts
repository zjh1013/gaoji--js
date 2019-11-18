// interface StringValid {
//   isAcc(val: string): boolean;
// }
// let mail = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;

// class MobilValid implements StringValid {
//   isAcc(val: string): boolean {
//     return mail.test(val);
//   }
// }
// let m = new MobilValid();
// console.log(m.isAcc("2681731956@qq.com"));
// //

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj);
}

// let myObj = { label: "123" };
printLabel({ label: "123" });
