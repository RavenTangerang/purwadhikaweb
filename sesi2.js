// ● Write a code to convert celsius to fahrenheit.


function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  let celsius = 25;
let fahrenheit = convertToFahrenheit(celsius);

console.log(celsius + "°C sama dengan " + fahrenheit + "°F");



// cek ganjil genap

function ganjilgenap(angka){

    if (angka % 2 === 0 ) {

        return "genap";
    }
        
            else { return "ganjil";
        }
        
    
}

let angka = 37;
let hasil = ganjilgenap(angka);
console.log(angka + " adalah " + hasil);

// ● Write a code to check whether the number is prime number or not

function checkPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  let num = 71;
  let result = checkPrime(num);
  console.log(num + " is " + (result ? "" : "not ") + "a prime number");
    


// semua yang diatas adalah contoh