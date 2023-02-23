// Write a code to check whether the date is a weekend.

const { get } = require("prompt");

 
function isit(){
const haridalamminggu = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']
const hariini = new Date()
const indexharidalamminggu = hariini.getDay()


const hariapa = haridalamminggu[indexharidalamminggu]


if (hariapa === 05|| hariapa === 06 ){

    console.log(`Hari ini merupakan hari ${hariapa} dan merupakan hari libur`);
}
else {
console.log(`Hari ini merupakan hari  ${hariapa} dan bukan merupakan hari libur`);
 
}
}

isit()


// Write a code to find GCD of two numbers → use while.

function cariFPB(a, b) {
    if (b == 0) {
      return a;
    } else {
      return cariFPB(b, a % b);
    }
  }
  
  
  console.log(cariFPB(12,14))


//   Write a code to find LCM of two numbers → use do ... while.

  let num1 = 13
  let num2 = 15
  
  let max = (num1 > num2) ? num1 : num2;
  let min = (num1 < num2) ? num1 : num2;
  
  let LCM = max;
  
  do {
    LCM += max;
  } while (LCM % min !== 0);
  
  console.log("LCM dari " + num1 + " dan " + num2 + " adalah " + LCM);



//   Write a code to calculate age

let birthdat