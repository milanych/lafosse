//01_capitalise.js
const capitalise = (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();

console.log('01_capitalise.js')
console.log(capitalise("hELLo")) // => Hello
console.log(capitalise("betH")) // => Beth
console.log(capitalise("jaGaN")) // => Jagan
console.log(capitalise("sergI")) // => Sergi

//02_swapcase.js
const swapcase = (word) => word.split('').map(el => ((el.toLowerCase() === el) ? el.toUpperCase() : el.toLowerCase())).join('');
console.log('02_swapcase.js')
console.log(swapcase("hELLo")) // "HellO"
console.log(swapcase("betH")) // "BETh"
console.log(swapcase("jaGaN")) // "JAgAn"
console.log(swapcase("sergI")) // "SERGi"

//03_camelcase.js
const camelCase = str => str.split('_')[0] + `${str.split('_')[1][0].toUpperCase()}${str.split('_')[1].slice(1).toLowerCase()}`;
console.log('03_camelcase.js')
console.log(camelCase("snake_case")); // => snakeCase
console.log(camelCase("a_variable")); // => aVariable

//04_snake_case.js
const snakeCase = str => {
  const uppercaseValue = str.split('').find(el => el === el.toUpperCase());
  const uppercaseValueIndex = str.indexOf(uppercaseValue);
  return str.slice(0, uppercaseValueIndex) + '_' + str.slice(uppercaseValueIndex).toLowerCase()
}
console.log('04_snake_case.js')
console.log(snakeCase("snakeCase")); // => snake_case
console.log(snakeCase("aVariable")); // => a_variable

//05_swap2.js
const swap2 = (word) => {
  const new_word = word.split('').map(el => ((el.toLowerCase() === el) ? el.toUpperCase() : el.toLowerCase())).join('');
  return { original: word, swapcased: new_word }
}
console.log('05_swap2.js')
console.log(swap2("hELLo"))
// => { original: 'hELLo', swapcased: 'HellO' }
console.log(swap2("betH"))
// => { original: 'betH', swapcased: 'BETh' }
console.log(swap2("jaGaN"))
// => { original: 'jaGaN', swapcased: 'JAgAn' }
console.log(swap2("sergI"))
// => { original: 'sergI', swapcased: 'SERGi' }

//06_capit2.js
const capit2 = (word) => {
  const new_word = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  return { original: word, capitalised: new_word }
}
console.log('06_capit2.js')
console.log(capit2("hELLo"))
// => { original: 'hELLo', capitalised: 'Hello' }
console.log(capit2("betH"))
// => { original: 'betH', capitalised: 'Beth' }
console.log(capit2("jaGaN"))
// => { original: 'jaGaN', capitalised: 'Jagan' }
console.log(capit2("sergI"))
// => { original: 'sergI', capitalised: 'Sergi' }
