// 1. Declare a variable using var and log its value
var a = "variable";
console.log(a);

// 2. Create a variable with let and try updating its value.
let b = 10;
b = 20;
console.log(b);

// 3. Create a constant using const and attempt to reassign it (observe the error).
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

console.log(obj.a, obj.b); // 1 2

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
console.log(typeof numToStr);

// 18. 
let strs = parseInt("100");
console.log(strs);

let float = parseFloat("123.54");
console.log(float);

// 2. Operators

// 19. 
let n1 = 2, n2 = 3;

const add = n1 + n2;
const subtract = n1 - n2;
const multi = n1 * n2;
const div = n1 / n2;
const modulus = n1 % n2;

console.log(add, subtract, multi, div, modulus);

// 20.
const pow = n1 ** n2;
console.log(pow);

// 21.
console.log(n1 += 1)
console.log(n1 -= 1)
console.log(n1 *= 2)
console.log(n2 /= 3)
console.log(n1 %= 2)

// 22.
console.log("1" == "1") // true, checking if value is equal or not
console.log("1" === 1) // false, checking if data type and value both are equal or not

// 23.

console.log(10 != 10); // because 10 is equal to 10 = true, so !true means false
console.log(10 !== "10");// here checking data type, so it is not equal. so, !false means true

// 24. comparisons operator:  ==, ===, !=, !==, <, >, <=, >=
console.log(n1 >= n2);

// 25.
if (n1 >= n2 && n1 <= n2) {
    console.log("check both condition if true, it will return"); // not execute
}

if (n1 >= n2 || n1 <= n2) {
    console.log("|| checks if any one condition is true, will return"); // execute
}

// 26.
console.log(!false);

// 27.
console.log(n1 >= n2 ? "greater value" : "smaller value");

// 3. Control Flow

// 28. 
let n = -2;
if (n > 0) {
    console.log("positive number");
} else {
    console.log("negative number");
}

// 29.
let marks = 83;
if (marks >= 70 && marks <= 90) {
    console.log("Grade A");
} else if (marks >= 65 && marks <= 70) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// 30.
let message = "";
let day = "Tues";

switch (day) {
    case "Mon":
        message = "Today is Monday";
        break;
    case "Tues":
        message = "Today is Tuesday";
        break;
    case "Wed":
        message = "Today is Wednesday";
        break;
    case "Thurs":
        message = "Today is Thursday";
        break;
    case "Fri":
        message = "Today is Friday";
        break;
    case "Sat":
        message = "Today is Saturday";
        break;
    case "Sun":
        message = "Today is Sunday!";
        break;
}

console.log(message);

// 31.
console.log("for loop printing value from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 32.
let i = 5;

console.log("while loop count down");

while (i >= 1) {
    console.log(i);
    i -= 1
}

// 33.
console.log("do-while loop");

let r = 5;
do {
    console.log(r);
    r -= 1
} while (r >= 1) {

}

// 34.

// for...of used in iterating over array
console.log("for...of loop iterating over an array");

let arr1 = [1, 2, 3, 4, 5]

for(let i of arr1){
    console.log(i);
}

// 35.

// for..in used in iterating over objects

console.log("for..in used in iterating over objects");

const objs = {
    a: 1,
    text: "some texts"
}

for (let i in objs){
   console.log(objs[i]);
}