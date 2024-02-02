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
// class Student {
//   constructor(
//     public name: string,
//     private age: number,
//     protected marks: number
//   ) {}
//   get getMyage() {
//     // get is used for getter function
//     return this.age;
//   }
//   set setMyage(val: number) {
//     // get is used for getter function
//     this.age = val;
//   }
// }

// const std = new Student("Abdul Wahab", 24, 88);
// console.log(std.getMyage);
// std.setMyage = 55;
// console.log(std.getMyage);

/************** Interface Class  in ts ***************/
// interface StudentType {
//   name: string;
//   age: number;
//   marks: number;
// }
// interface GetIdType {
//   getMyage: () => string;
// }
// class Student implements StudentType, GetIdType {
//   private id: string = String(Math.random() * 1000);
//   constructor(public name: string, public age: number, public marks: number) {}
//   getMyage = () => {
//     return this.id;
//   };
// }

// const std = new Student("Abdul Wahab", 24, 88);
// console.log(std.getMyage());

/************** Type assertion in ts ***************/
// working as a dom in ts
// syntax 1
// const btn = document.getElementById("btn") as HTMLElement;
// btn.onclick;

// syntax 2
// const btn = <HTMLElement>document.getElementById("btn");
// btn.onclick;

// syntax 3
// const btn = document.getElementById("btn")!;
// btn.onclick;

// const img = document.querySelector("img")!;
// img.src = "https://picsum.photos/200/300/?blur=2";

// const myform = document.getElementById("myform")!;

// const myinput = document.querySelector("form > input") as HTMLInputElement;

// myform.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const val = Number(myinput.value);
//   const h2 = document.createElement("h2");
//   h2.textContent = String(val * val);
//   const body = document.querySelector("body")!;
//   body.append(h2);
// };

/************** Index signature in ts ***************/
// interface Obj {
//   [key: string]: string;
// }

// const obj: Obj = {
//   name: "abc",
//   email: "u@gmail.com",
// };
// const getName = () => {
//   console.log(obj["name"]);
// };

// const getData = (key: string) => {
//   console.log(obj[key]);
// };
// console.log(obj);
// getName();
// getData("email");

/************** keyof  in ts ***************/
// interface Obj {
//   name: string;
//   email: string;
// }

// const obj: Obj = {
//   name: "abc",
//   email: "u@gmail.com",
// };

// const getData = (key: keyof Obj) => {
//   console.log(obj[key]);
// };
// console.log(obj);

// // getData("name"); direct value // 1st method

// // let key = "name"; // when we use let method for declarion of variable below method is used
// // getData(key as keyof Obj); // 2nd method

// let key = "email";
// getData(key as keyof typeof obj); // 3rd method wit object type

/************** TypeScript Utility Types ***************/
// Type Utility

// Partial <Type>
// Requried <Type>
// Readonly <Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameter<Type>
// ReturnType<Type>
// InstanceType<Type>

// 1) Partial<type>

// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Partial<User>;

// 2) Required<type> it is oposite of partial

// type User = {
//   name?: string;
//   email?: string;
// };

// const User2: Required<User> = {
//   name: "abd",
//   email: "test@gmail.com",
// };
// console.log(User2);

// 3) Readonly<type> it is used for the only read the data the change was not possible

// type User = {
//   name?: string;
//   email?: string;
// };

// const User2: Readonly<User> = {
//   name: "abd",
//   email: "test@gmail.com",
// };

// console.log(User2);

// 4) Record<type>

// interface UserInfo {
//   age: number;
// }
// type User = "AbdulWahab" | "Hizbullah";
// const User2: Record<User, UserInfo> = {
//   AbdulWahab: {
//     age: 24,
//   },
//   Hizbullah: {
//     age: 24,
//   },
// };

// console.log(User2);

// 5) Pick<type> it is used for the create duplicate properties
// interface OrderInfo {
//   name: string;
//   price: number;
//   city: string;
//   status: string;
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "status">;

// 6) Omit<type> it is used for the remove  properties
// interface OrderInfo {
//   name: string;
//   price: number;
//   city: string;
//   status: string;
// }
// type ShippingInfo = Omit<OrderInfo, "city" | "status">;

// 7) Exclude<Type, ExcludedUnion> to remove the data type

// type MyUnion = string | number | boolean;

// type ex = Exclude<MyUnion, boolean>;

// 8) Extract<Type, Union> to except those data type which is given in a parameter
// type MyUnion = string | number | boolean;

// type ex = Extract<MyUnion, boolean>;

// 9) NonNullable<Type> it doesnot accept the null or undefined datatype
// type MyUnion = string | number | boolean | null | undefined;

// type ex = NonNullable<MyUnion>;

// 10) Parameters<Type>
// const myfunc = (a: number, b: number) => {
//   console.log(a + b);
// };
// type random = Parameters<typeof myfunc>;

// 11) ConstructorParameter<Type>
// class student_data {
//   constructor(name: string, age: number) {}
// }
// type random = ConstructorParameters<typeof student_data>;

// 12) ReturnType<Type>
// const myfunc = (a: number, b: number): number => {
//   return a + b;
// };
// type random = ReturnType<typeof myfunc>;
// 13) InstanceType<Type>
// class student_data {
//   constructor(name: string, age: number) {}
// }
// type Random = InstanceType<typeof student_data>;

// const user: Random = {
//   name: "Jan",
//   age: 24,
// };
// console.log(user);

/************** Genrics TypeScript  ***************/
//example 1
// type Person = {
//   name: string;
//   age: number;
// };

// const func = <t>(n: t): t => {
//   return n;
// };

// const person: Person = {
//   name: "Ubaid Ullah",
//   age: 27,
// };

// const res = func<Person>(person);
// console.log(res);

// example 2

// const func = <T, U>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const res = func<number, string>(24, "lol");
// console.log(res);

//example 3
// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const res = func<number, number>(24, 4);
// console.log(res);

//example 4
type Student = {
  name: string;
  age: number;
};
type Student2 = {
  name: string;
  age: number;
  phone: number;
};
const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};

const student: Student = {
  name: "Ubaid Ullah",
  age: 24,
};
const student2: Student2 = {
  name: "Hizb Ullah",
  age: 22,
  phone: 1314122,
};

const res = func<Student, Student2>(student, student2);
console.log(res);

//example 5
