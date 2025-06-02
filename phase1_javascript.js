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

for (let i of arr1) {
    console.log(i);
}

// 35.

// for..in used in iterating over objects

console.log("for..in used in iterating over objects");

const objs = {
    a: 1,
    text: "some texts"
}

for (let i in objs) {
    console.log(objs[i]);
}

// 36. Declare a function using function declaration and call it.
function greetings() { // function declaration
    console.log("hello");
}

greetings()

// 37. Create a function expression and invoke it.
// anonymous function expression
const adding = (a, b) => {
    return a + b;
}

console.log(adding(2, 3)); // 6

// named function expression
const sub = function subt(a, b) {
    return a - b;
}

console.log(sub(2, 3)); // -1

// 38. Write an arrow function that multiplies two numbers.
const multiply = (a, b) => {
    return a * b;
}

console.log(multiply(2, 3));

// 39. Create a function with default parameters and test with/without arguments.

const divide = (a = 5, b = 4) => {
    return a / b;
}

console.log(divide()); // without arguments

const divide2 = (b, a = 5) => {
    return a / b;
}

console.log(divide2(4)); // with arguments

// 40. Create a function that accepts any number of arguments using rest parameters.
const arg = (a, b, ...rest) => {
    return [a, b, ...rest] // ...rest => expanding array values, rest => [array values]
}

console.log(arg(1, 2, 3, 4, 5));

// 41. Write a function that accepts a callback and executes it.
const add1 = (a, b, callback) => { // takes function as arguments
    const greet = `Addition of two number: ${a} and ${b} : ${a + b}`
    callback(greet)
}


add1(2, 3, (m) => console.log(m));

// 42. Write a callback that prints a greeting after a function is called.
const greet1 = (name, callback) => {
    const greeting = `Hello, ${name}!`
    callback(greeting)
}

const anothGreet = (message) => {
    console.log(message);

}

greet1("namnika", anothGreet)

// 43. Use a function to determine if a number is even or odd.
const isEvenOrOdd = (num) => {
    return num % 2 == 0 ? "even" : "odd"
}

console.log(isEvenOrOdd(2));

// 44. Create a function that takes an array and returns the sum of its elements.

let ar = [1, 2, 3, 4, 5]

const sumArray = (arr) => {
    let sum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }

    return sum

}

console.log(sumArray(ar));

// 45. Create a function that returns the factorial of a number.

const fact = (num) => { // 5 * 4 * 3 * 2 * 1

    if (num <= 1) {
        return 1
    } else {
        return num * fact(num - 1)
    }

}

console.log(fact(5));

// 46. Write a function that reverses a string. // olleH

const rev = (str) => {
    let re = "";

    for (let i = str.length - 1; i >= 0; i--) {
        re += str[i];
    }
    return re
}

console.log(rev("Hello"))

// 47. Create a function that finds the largest number in an array.
let arr2 = [1, 2, 40, 5, 10]

const large = (arr2) => {
    let max = 0;
    for (let i = 0; i <= arr2.length - 1; i++) {
        if (max < arr2[i]) {
            max = arr2[i]
        }
    }

    return max
}

console.log(large(arr2))

// 48. Write a function that returns true if a number is prime.

const isPrime = (num) => { // prime number which divisible by itself and 1 that hasn't more than 2 factors

    if (num <= 1) {
        return false
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(18));

// 49. Use a function to filter an array using a callback.

let list = [1, 2, 1, 2, 3]

function filter(l) {

    let newar = [] // to add filtered values

    for (let i = 0; i < l.length; i++) {
        if (!newar.includes(l[i])) { // if newar is not included with that value means it is filtered 
            newar.push(l[i])
        }
    }

    return newar

}

console.log(filter(list));

// 50. Create a function that formats a full name from first and last name.
const formatName = (first, last) => {
    return `Hello, ${first} ${last}.`
}

console.log(formatName("Namnika", "Janbandhu"));

