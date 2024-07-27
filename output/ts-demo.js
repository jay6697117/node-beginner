"use strict";
var Fruit;
(function (Fruit) {
    Fruit[Fruit["apple"] = 1] = "apple";
    Fruit[Fruit["orange"] = 2] = "orange";
})(Fruit || (Fruit = {}));
const fruit = Fruit.apple;
console.log(fruit);
