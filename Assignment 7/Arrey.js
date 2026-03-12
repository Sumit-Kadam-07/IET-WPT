let arr = [12,5,8,21,30,7,14,9,18,3]


console.log("Original Array:", arr)

let even = arr.filter(num => num % 2 === 0)
console.log("Even Numbers:", even)

let odd = arr.filter(num => num % 2 !== 0)
console.log("Odd Numbers:", odd)

let sorted = arr.slice().sort((a,b)=>a-b)
console.log("Sorted Array:", sorted)