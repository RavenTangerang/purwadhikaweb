// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”] 
// 

const { message } = require("prompt");



let merubahkata = "Hello World"
let rubah = merubahkata.split(" ")
console.log(rubah);


//Write a function to remove all odd numbers in an array and return a new array that contains
// even numbers only


let angka = [1, 2, 3, 4 ,5 ,6 ]

function merubahangka(bilangan){
  let result = [];
  for(i=0; i < bilangan.length ; i++ ) {
    if(bilangan[i] % 2 === 0){
      result.push(bilangan[i]);
    }
  }
  return result;
}

console.log(merubahangka(angka)); 


/*● Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))2
● Parameters : weight & height
*/

let beratbadan = 90
let tinggi = 180
let hasil2 = ""
const tinggi2kemeter = tinggi/100
const formula = beratbadan/tinggi2kemeter**2


if (formula < 18.5)

{hasil2 = "less weight "}

else if (formula >= 18.5 && formula<= 24.9){

  hasil2 = " ideal"
}

else if ( formula >= 25 && formula <= 29.9 ){
hasil2 = "overweight"}

else if (formula >= 30 && formula <= 39.9 ){
  hasil2 = "very overweight"
}

else hasil2 = " obesity "
console.log(hasil2)
 
/*Create a function that can loop the number of times according to the input we provide, and will
replace multiples of ú with "Fizz", multiples of ü with "Buzz", multiples of ú and ü with
"FizzBuzz".
Parameters : n → total looping
*/


function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(10)
// Create a function that can create a triangle pattern according to the height we provide like the
// following : 

function createTriangle(height) {
  let symbol = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += symbol + " ";
      symbol++;
      if (symbol > 10) {
        symbol = 1;
      }
    }
    console.log(row);
  }
}
createTriangle(4);
