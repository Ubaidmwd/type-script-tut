"use strict";
/*************data type************/
const getProduct = (product) => {
    return product;
};
const product1 = {
    name: "mack book",
    price: 12,
    stock: 333,
    icon: "test.url",
    id: "1",
};
const product2 = {
    name: "mack book",
    price: 12,
    stock: 333,
    icon: "test.url",
    id: "2",
};
console.log(getProduct(product1));
console.log(getProduct(product2));
