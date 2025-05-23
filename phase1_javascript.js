// 1. Declare a variable using var and log its value
var a = "variable";
console.log(a);

// 2. 
let b = 10;
b = 20;
console.log(b);

// 3. 
const c = 20;
// c = 2;
// console.log(c); // TypeError: Assignment to constant variable.

// 4.

var greet = "hi";

function greeting() {
    var greet = "hello";
    if (true) {
        console.log(greet) //hello
    }
}

greeting();
console.log(greet); // hi

// 5. 


if (true) {
    let t = 5;
    console.log(t); // 5
}

// console.log(t); //ReferenceError: t is not defined

// 6. 
let str = "string";
console.log(typeof str); //string

// 7. 
let num = 10;
console.log(typeof num); //number

// 8.
let isEdit = false;
console.log(typeof isEdit); //boolean

// 9. 
let sum;
console.log(typeof sum) // undefined

// 10.
let value = null;
console.log(typeof value); // object

// 11. 
const s = Symbol(10);
console.log(s); // ReferenceError: y is not defined

// 12. 
const big = BigInt(10);
console.log(big); // 10n

// 13. 
const obj = {
    a: 1,
    b: 2
}

console.log(obj.a, obj.b); // { a: 1, b: 2 }

// 14.
const arr = [1, 2, 3]
console.log(arr[0], arr[1], arr[2])

// 15.
let d = "value" + 10;
console.log(d);

// 16.
let strToNum = Number("10");
console.log(strToNum); // 10

// 17.
let numToStr = String(10);
console.log(numToStr);

// 18. 
let strs = parseInt("100");
console.log(strs);

let float = parseFloat("123.54");
console.log(float);
