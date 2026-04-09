
// 1. Scope Example
function scopeExample() {
    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {
        var a = 100; // same variable (function scoped)
        let b = 200; // block scoped
        const c = 300; // block scoped

        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block:", a, b, c);
}

scopeExample();
console.log("--------------------------------------------------");


// 2. Second Fruit
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
    return fruits[1];
}

console.log("Second Fruit:", getSecondFruit());
console.log("--------------------------------------------------");


// 3. Modify Array (push + pop)
function modifyArray(arr) {
    arr.push("Guava");   // add element
    arr.pop();           // remove last element
    return arr;
}

console.log("Modified Array:", modifyArray(["Apple", "Banana", "Mango"]));
console.log("--------------------------------------------------");


// 4. Square Numbers using map
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

console.log("Squared Numbers:", squareNumbers([1, 2, 3, 4, 5]));
console.log("--------------------------------------------------");


// 5. Filter Odd Numbers
function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log("Odd Numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));
console.log("--------------------------------------------------");


// 6. Object Greeting
const person = {
    name: "Rahul",
    age: 22,
    occupation: "Developer"
};

function greetPerson(p) {
    console.log(`Hello my name is ${p.name}. I am a ${p.occupation}.`);
}

greetPerson(person);
console.log("--------------------------------------------------");


// 7. Rectangle Area
function rectangleArea(rect) {
    return rect.width * rect.height;
}

console.log("Rectangle Area:", rectangleArea({ width: 10, height: 5 }));
console.log("--------------------------------------------------");


// 8. Object Keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}

const student = {
    name: "Ram",
    age: 20,
    course: "BCA"
};

console.log("Object Keys:", getObjectKeys(student));
console.log("--------------------------------------------------");


// 9. Merge Objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const obj1 = { name: "Ram" };
const obj2 = { age: 25 };

console.log("Merged Object:", mergeObjects(obj1, obj2));
console.log("--------------------------------------------------");


// 10. Sum using reduce
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

console.log("Sum of Array:", sumArray([1, 2, 3, 4, 5]));
console.log("--------------------------------------------------");