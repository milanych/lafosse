//01_even.js
const even = num => num % 2 === 0

console.log('01_even.js')
console.log(even(3)) // => false
console.log(even(4)) // => true

//02_odd.js
const odd = num => num % 2 !== 0

console.log('02_odd.js')
console.log(odd(3)) // => true
console.log(odd(4)) // => false

//03_how_many_evens.js
const howManyEvens = arr => arr.filter(even => even % 2 === 0).length;

console.log('03_how_many_evens.js')
ar = [7, 19, 33, -5, -99, 6, 12]
console.log(howManyEvens(ar)) // =? 2

//04_how_many_odds.js
const howManyOdds = arr => arr.filter(even => even % 2 !== 0).length;

console.log('04_how_many_odds.js')
ar = [7, 19, 33, -5, -99, 6, 12]
console.log(howManyOdds(ar)) // => 5
