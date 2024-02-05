"use strict";
/*************data type************/
const users = [
    {
        name: "Feroz Khan",
        age: 27,
    },
    {
        name: "Abdul Wahab",
        age: 24,
    },
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filterPeopleName = filterByPeoples(users, "name", "Feroz Khan");
const filterPeopleAge = filterByPeoples(users, "age", 24);
console.log(filterPeopleAge);
