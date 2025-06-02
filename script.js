// Section 1: Variables and Data Types
//  Exercise 1: Variable Declarations

let username;
const score = 100; // const value must be initialized.
var message;

// Exercise 2: Data Types
let str = "string";
let num = 10;
let bool = true;
let n = null;
let un = undefined;

const obj = {
    a: 5,
    b: 6
}

const arr = [1, 2, 3];


//Exercise 3: Type Identification

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof bool);
// console.log(typeof n);
// console.log(typeof un);
// console.log(typeof obj);
// console.log(typeof arr);

// Section 2: Functions
// Exercise 4: Create a Regular Function

// function greetUser(username) {
//     return "Hello, " + username;
// }
// console.log(greetUser("user!"))

// Exercise 5: Convert to Arrow Function
const greetUser = (username) => {
    return "Hello, " + username;
}

// console.log(greetUser("user!"))

// Exercise 6: Function with Condition
const evenOrOdd = (num) => {
    if (num % 2 == 0) {
        return "Even number"
    } else {
        return "Odd number"
    }
}

// console.log(evenOrOdd(15))

// Exercise 7: Function Returning an Object
const nameAndAge = (name, age) => {
    return {
        "name": name,
        "age": age
    }
}

// console.log(nameAndAge('Alice', 20))

// Section 3: DOM Manipulation (refer in html_dom_manipulation.html page)

