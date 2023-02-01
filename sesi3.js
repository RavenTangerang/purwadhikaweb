// code to display the multiplication table of a given integer.

let bilangan = 75

for ( i = 1 ; i <= 10; i++){
    
    console.log(bilangan + "x" + i + "=" + bilangan * i)
}

// Write a code to check whether a string is a palindrome or not.


let palindrome = "CIVIc";
let ubah = palindrome.toLowerCase();

for (let i = 0; i < ubah.length / 2; i++) {

        if (ubah[i] !== ubah[ubah.length - i - 1]) 
        {
            console.log(palindrome + "bukan palindrome")

        
        }
        else console.log( palindrome + "palindrome")
}
// Write a code to convert centimeter to kilometer.

let cm = 100000

km = cm / 100000

console.log(km)

// Write a code to format number as currency (IDR)

let rupiah = 90000


let hasil = rupiah.toLocaleString("id-Id", {style:"currency", currency : "IDR"})
   
console.log(hasil)

// Write a code to reverse a string.

let kata_dibalik = "Romusha";
let hasilkata=  kata_dibalik.split('').reverse().join('');
let baru = kata_dibalik.split('')

console.log(baru)
console.log(hasilkata)



 