// Task 3: Practice reduceRight, some, and every

// 1. Use reduceRight to reverse a string
const str = 'hello';
const reversed = [...str].reduceRight((acc, char) => acc + char);
console.log(reversed); // 'olleh'

// 2. Use some to check if any numbers are even
const numbers = [1, 3, 7, 4];
const hasEven = numbers.some(n => n % 2 === 0); // true

// 3. Use every to check if all numbers are positive
const allPositive = numbers.every(n => n > 0); // true

// 4. using reduceRight adding numbers from right to left
let arr = [1, 2, 3, 4, 5]
const revNum = [...arr].reduceRight((prev, curr) => prev + curr) 
console.log(revNum);

const isGreater = numbers.some(n => n>7)
console.log(isGreater);

const isAllGreater = numbers.every(n => n>4)
console.log(isAllGreater);


// Task 4: Deep Clone Practice

const original = {
  user: {
    name: "Alice",
    details: {
      age: 25,
      hobbies: ["reading", "gaming"]
    }
  }
};

// Method 1: JSON clone
const clone1 = JSON.parse(JSON.stringify(original));

// Method 2: Structured clone (modern browsers)
const clone2 = structuredClone(original);


// Modify clone and check original remains unchanged
clone2.user.details.age = 30;
console.log(original.user.details.age); // 25

// using Object.assign() modifies oriignal obj
const shallowCopy = Object.assign({}, original)
shallowCopy.user.details.hobbies[0] = "playing"
console.log(shallowCopy.user.details.hobbies);
console.log(original.user.details.hobbies);

// using (...spread operator) modifies oriignal obj
const spread = {...original}
spread.user.details.hobbies.push("painting")
console.log(spread.user.details.hobbies);
console.log(original.user.details.hobbies);

