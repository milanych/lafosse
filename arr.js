//01_sum.js
const sum = (arr) => arr.reduce((a, c) => a + c, 0)

ar = [7, 19, 33, -5, -99, 6, 12];
console.log('01_sum.js');
console.log(sum(ar)) //=> -27

//02_average.js
const avg = (arr) => Number(((arr.reduce((a, c) => a + c, 0)) / arr.length).toFixed(2))

ar = [7, 19, 33, -5, -99, 6, 12];
console.log('02_average.js');
console.log(avg(ar)) // => -3.86 (number)
