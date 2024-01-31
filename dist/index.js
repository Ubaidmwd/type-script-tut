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
getData("name");
