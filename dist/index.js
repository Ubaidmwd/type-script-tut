"use strict";
/*************data type************/
class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
        this.id = String(Math.random() * 1000);
        this.getMyage = () => {
            return this.id;
        };
    }
}
const std = new Student("Abdul Wahab", 24, 88);
console.log(std.getMyage());
