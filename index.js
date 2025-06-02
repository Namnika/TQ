let arr = [1, 2, 3, 4]

const multiplyArr = arr.map((n) => { return n * 2 })

// console.log(multiplyArr);

const ob = {
    a: 1,
    b: 2,
    c: 3,
    method: (a, b) => {
        return a + b
    }
}

console.log(ob.method(2, 3))



const entries = Object.entries(ob)

entries.forEach(([k, v]) => {
    // console.log(`key: ${k}, value: ${v}`)
})

console.log(entries);

const keys = Object.keys(ob)
// console.log(keys);

const values = Object.values(ob)
// console.log(values);

const obj = {
    a: 1,
    b: {
        c: 2
    }
}

const o = {
    d: 3
}

const copied = { ...obj, ...o } // shallow copy using spread operator
// console.log(copied);

const copy = Object.assign({}, o) // shallow copy using Object.assign()
// console.log(copy);


const ar = [4, 5, 6, 7, 8]
const copar = [...ar, 9, 10]
ar.reverse()

const newar = ['e', 'r', 'g', 'y', 'a', 'b'] // sort treated elements as strings and can get unexpected results
const newnum = [5, 2, 7, 4, 0] // sort numbers using comparator function 
newnum.sort((a, b) => a - b)
console.log(newnum);








