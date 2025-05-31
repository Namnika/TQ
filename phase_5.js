// Task 6: Basic Debugging

function getTotal(items) {
  let total = 0;
  items.forEach(item => {
    total += item.price;
  });
  return total;
}

// const items = [
//   { name: "Book", price: 10 },
//   { name: "Pen", price: "5" } // Bug: price should be a number
// ];

const items = [
  { name: "Book", price: 10 },
  { name: "Pen", price: 5 } // fixed
];


console.log(getTotal(items)); // Debug and fix

// Task 7: Write Unit Tests with Jest

