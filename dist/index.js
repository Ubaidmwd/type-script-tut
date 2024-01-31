"use strict";
/*************data type************/
const obj = {
    name: "abc",
    email: "u@gmail.com",
};
const getData = (key) => {
    console.log(obj[key]);
};
console.log(obj);
// getData("name"); direct value // 1st method
// let key = "name"; // when we use let method for declarion of variable below method is used
// getData(key as keyof Obj); // 2nd method
let key = "email";
getData(key); // 3rd method wit object type
