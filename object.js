//01_about_you.js
const aboutMe = {
  name: 'Vadim Zotov',
  age: 35,
  city: 'Sheffield'
}

console.log('01_about_you.js')
console.log(aboutMe)

//02_array_info.js
const info = arr => {
  const summary = arr.reduce((a, c) => a + c, 0)
  const length = arr.length
  return {
    array: arr,
    elements: length,
    avg: summary / length,
    sum: summary,
    howManyEvenNumbers: arr.filter(el => el % 2 === 0).length,
    howManyOddNumbers: arr.filter(el => el % 2 !== 0).length
  }
}
console.log('02_array_info.js');
console.log(info([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//03_bonus.js
function diffTypes(arr) {
  return {
    string: arr.filter(el => typeof el === 'string').length,
    array: arr.filter(el => Array.isArray(el)).length,
    boolean: arr.filter(el => typeof el === 'boolean').length,
    object: arr.filter(el => typeof el === 'object' && !Array.isArray(el)).length,
    number: arr.filter(el => typeof el === 'number').length
  }
}

const ar = [
  1,
  "str",
  false,
  { name: 'Romeo', age: 77 },
  ["a", "e", "i", "o", "u"],
  true
]
console.log('03_bonus.js');
console.log(diffTypes(ar))
// => { string: 1, array: 1, boolean: 2, object: 1, number: 1 }
