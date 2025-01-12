let score = "33"

// console.log(typeof score);    // number
// console.log(typeof(score));   // number

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  // number
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "rajneesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);          // 33
// console.log(typeof stringNumber);   // string
