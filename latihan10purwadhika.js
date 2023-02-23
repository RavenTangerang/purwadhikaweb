// Create a function to convert Excel sheet column title to its corresponding column number.

function converexcel(sheet){
    let hasil = 0
for(let i = 0 ; i<sheet.length;i++){
    hasil = hasil * 26 + sheet.charCodeAt(i) - 'A'.charCodeAt(0) +1
}

return hasil
}

console.log(converexcel("AB"))

/* Pseudocode No 1 


1. Buatlah sebuah variabel bernama hasil dengan nilai 0
2. lalu lanjutkan dengan membuat sebuah perulangan atau looping sebanyak panjang string sheet
3. selanjutnya tambahkan hasil dengan (nilai huruf ke-i dari sheet dikurangkan dengan nilai huruf 'A') ditambah 1) 
4. Kali hasil dengan 26 ( 26 Total Alphabet)
5. setelah selesai looping maka return hasil

untuk memanggil fungsi cukup panggil dengan console.log lalu isi dengan function nya

seperti console.log(converexcel"AB") setelah di panggil maka hasil akan muncul 
*/
 
/* Given a non-empty array of integers nums, every element appears twice except for one. Find
that single one. */

function findnumb(number){
 let result = 0 

 for (let i = 0 ; i <number.length; i ++ ){
 result ^= number[i]
}
return result

}


console.log (findnumb([1,2,3,4,5,1,2,3,4] ))


/*

Pseudocode

1. Buatlah sebuah function terlebih dahulu lengkap dengan parameternya
2. buatlah sebuah variabel dengan nilai = 0 

3. buatlah sebuah looping atau perulangan sebanyak array number

4. melakukan operasi XOR antara result dengan number[i] dan hasilnya akan di simpan kedalam result
5. setelah selesai looping maka akan di kembalikan ke result

untuk memanggil fungsi ini cukup dengan memanggil fungsi lalu sertakan isi untuk parameternya

seperti console.log(findnumb(1,2,3,4,5,6,7,1,2,3,4,5,6))

*/

/*You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1
or 2 steps. In how many distinct ways can you climb to the top?*/


function climbing(staircase) {
    if (staircase <= 2) {
      return staircase;
    }
    
    let prev1 = 1;
    let prev2 = 2;
  
    for (let i = 3; i <= staircase; i++) {
      const current = prev1 + prev2;
      prev1 = prev2;
      prev2 = current;
    }
  
    return prev2;
  }
  
  const result = climbing(3);
  console.log(result);
  



//   ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.


function isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    
    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");
    
    return sortedS === sortedT;
  }

  
  console.log(isAnagram("CAR",("RAC")))


 