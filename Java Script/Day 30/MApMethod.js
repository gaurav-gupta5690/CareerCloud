const fruits = new Map([
    ["Apple",200],
    ["Banana",40],
    ["Orange",40],
]);
let cost = fruits.get("Banana")

document.getElementById("aa").innerHTML="Price of 1kg Banana is = " + cost;








const fruit = new Map();

fruit.set("Apple", 200);
fruit.set("Banana", 40);
fruit.set("Orange", 40);

fruit.delete("Banana");

let costs = fruits.get("Apple")

document.getElementById("bb").innerHTML="Price of 1kg Apple is = " + costs;

document.getElementById("cc").innerHTML= typeof fruit;

document.getElementById("dd").innerHTML= fruit instanceof Set;

document.getElementById("ee").innerHTML= fruit.size;

document.getElementById("ff").innerHTML= fruit.has("Orange");

