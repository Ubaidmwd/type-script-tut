/*************data type************/

// let a: string = "abc";
// console.log(a);

// let b: number = 1;
// console.log(b);

// let c: boolean = true;
// console.log(c);

// let check: any;
// console.log(check);
// let surname: string | number = "abc1234";
// console.log(surname);

/*************type aliases************/

// type userName = string | number; //union
// let a: userName = "abc";
// console.log(a);

/*************function************/
// const func = (name: string, rollNO: number) => {
//   console.log(name, rollNO);
// };

// func("testName", 1);

/*************function with reutrn type************/

// const func = (name: string, rollNO: number): number => {
//   // console.log(name, rollNO);
//   return rollNO;
// };

// console.log(func("testName", 50));

/************* function with type aliases************/

// type student_data = (
//   studentName: string,
//   rollNO: number,
//   marks: number
// ) => number;

// const func: student_data = (studentName, rollNO, marks) => {
//   console.log(studentName, rollNO, marks);
//   return marks;
// };
// console.log(func("testName", 11, 90));

/************* 1st method of array in ts ************/

// const arr: number[] = [1, 2, 3];
// console.log(arr);

/************* 2nd method of array in ts ************/

// const arr: Array<string> = ["abc", "def"];
// const arr: Array<string | number> = ["abc", "def", 1]; // union in arrray
// console.log(arr);

/************** Tuple in ts ***************/
// const arr: [number, number] = [1, 2];
// console.log(arr);

/************** object in ts ***************/
// type Obj = {
//   student_name?: string;
//   height: number;
//   weight: number;
// };
// const obj: Obj = {
//   height: 6.0,
//   weight: 14.0,
// };
// const obj2: Obj = {
//   student_name: "FKHAN",
//   height: 6.0,
//   weight: 14.0,
// };
// console.log(obj2);

// /************** Interface  in ts ***************/
// interface Obj {
//   student_name?: string; // ? is used for optional parameter
//   height: number;
//   weight: number;
// }
// const obj: Obj = {
//   height: 6.0,
//   weight: 14.0,
// };

// in interface the extends property is working and in type aliases extent property doens exist
// type FuncType = (n: number, m: number) => void;
// interface newObj extends Obj {
//   student_marks: number;
//   func: FuncType;
// }
// const obj2: Obj = {
//   student_name: "FKHAN",
//   height: 6.0,
//   weight: 14.0,
// };
// const obj3: newObj = {
//   student_name: "FKHAN",
//   height: 6.0,
//   weight: 14.0,
//   student_marks: 50,
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };
// obj3.func(21, 2);
// console.log(obj3);

// /************** optional parameter in func in ts ***************/

// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;
//   return n * m * l;
// };

// console.log(func(2, 4, 5));

// /************** default parameter in func in ts ***************/

// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (n, m, l = 20) => {
//   return n * m * l;
// };

// console.log(func(2, 4));

// /************** rest operator in ts ***************/
// type FuncType = (...n: number[]) => number[];
// const func: FuncType = (...n) => {
//   return n;
// };

// console.log(func(2, 4, 3, 4, 5, 6, 7));

// /************** object in function  in ts ***************/
// interface Product {
//   name: string;
//   price: number;
//   stock: number;
//   icon: string;
//   readonly id: string;
// }

// type ProductType = (product: Product) => object;

// const getProduct: ProductType = (product) => {
//   return product;
// };

// const product1: Product = {
//   name: "mack book",
//   price: 12,
//   stock: 333,
//   icon: "test.url",
//   id: "1",
// };

// const product2: Product = {
//   name: "mack book",
//   price: 12,
//   stock: 333,
//   icon: "test.url",
//   id: "2",
// };

// console.log(getProduct(product1));
// console.log(getProduct(product2));

/************** Never type  in ts ***************/

// const errorHandler = (): never => {
//   throw new Error();
// };

/************** to handle the option  in ts ***************/

// type themeMode = "light" | "dark";
// const theme: themeMode = "dark";
// console.log(theme);

/************** Class  in ts ***************/
// class Student {
//   constructor(
//     public name: string,
//     private age: number,
//     protected marks: number
//   ) {}
//   getMyage = () => {
//     return this.age;
//   };
// }

// const std = new Student("Abdul Wahab", 24, 88);
// console.log(std.getMyage());

// /************** inheritance  in ts ***************/
// class Student {
//   constructor(
//     public name: string,
//     private age: number,
//     protected marks: number
//   ) {}
//   getMyage = () => {
//     return [this.age, this.marks, this.name];
//   };
// }
// class Student2 extends Student {
//   address: string;
//   constructor(name: string, age: number, marks: number, address: string) {
//     super(name, age, marks);
//     this.address = address;
//   }
//   getMyage = () => {
//     return [this.marks, this.name, this.address];
//   };
// }

// const std = new Student("Abdul Wahab", 24, 88);
// const std2 = new Student2("Hizb Ullah", 24, 88, "Marwandi");

// console.log(std2.getMyage());

/************** getter & setter function in oop  in ts ***************/
class Student {
  constructor(
    public name: string,
    private age: number,
    protected marks: number
  ) {}
  get getMyage() {
    // get is used for getter function
    return this.age;
  }
  set setMyage(val: number) {
    // get is used for getter function
    this.age = val;
  }
}

const std = new Student("Abdul Wahab", 24, 88);
console.log(std.getMyage);
std.setMyage = 55;
console.log(std.getMyage);
