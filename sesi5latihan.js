// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only

let angka =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function hilangkanganjil(angka){
  let hasil=""
  for(let i=0; i<=angka.length ; i++){
    if(angka[i]%2 ===0 ){
      hasil+=angka[i]+ " "
    }
  }return hasil
}


console.log(hilangkanganjil(angka))




/* Write a function that adds an element to the end of an array. However, the element should only
be added if it is not already in the array.*/
let bilangan = [1,2,3,4,5,6,7,8,9,10]
function menambah(bilangan, value){
  let hasil12 = ''
   if (bilangan.includes(value)){
    return true }
    else {
      hasil12=bilangan.push(value)
    }return bilangan
}


console.log(menambah(bilangan, 11))



// ● Write a function to calculate each element in the same position from two arrays of integer.
// Assume both arrays are of the same length.
// ○ Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

let array1 = [1,2,3,4,5,6,7,8,9,10]
let array2 = [11,12,13,14,15,16,17,18,19,20]

function calculate(array1, array2){
let hasilgan = []
for(i=0 ; i<array1.length;i++){
hasilgan.push(array1[i]+array2[i])
}
return hasilgan
}

let result = calculate(array1, array2);


console.log(array1.splice(''))
console.log(array2)
console.log(result)

// ● Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]


function split(kata){

  let hasil = kata.split(' ')
return hasil
}

let katakata = "Hello World"

 console.log(split(katakata))

// Write a function to get the lowest, highest and average value in the array (with and without sort
// function).


 function arrayStatistics(arr) {
  let lowest = arr[0];
  let highest = arr[0];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
    if (arr[i] > highest) {
      highest = arr[i];
    }
    total += arr[i];
  }
  let average = total / arr.length;
  return [lowest, highest, average];
}


function arrayStatistics(arr) {
  arr.sort((a, b) => a - b);
  let lowest = arr[0];
  let highest = arr[arr.length - 1];
  let total = arr.reduce((acc, curr) => acc + curr, 0);
  let average = total / arr.length;
  return [lowest, highest, average];
}
let arr1 = [5, 1, 4, 2, 8];
console.log(arrayStatistics(arr1));  

let arr2 = [100, 20, 3, 50, 10];
console.log(arrayStatistics(arr2));  

// Write a function that takes an array of words and returns a string by concatenating the words in
// the array, separated by commas and - the last word - by an 'and'.

function joinWords(words) {
  if (words.length === 0) {
    return "";
  } else if (words.length === 1) {
    return words[0];
  } else {
    let joinedWords = "";
    for (let i = 0; i < words.length - 1; i++) {
      joinedWords += words[i] + ", ";
    }
    joinedWords += "and " + words[words.length - 1];
    return joinedWords;
  }
}

console.log(joinWords(["apple", "banana", "cherry"])); // "apple, banana, and cherry"
console.log(joinWords(["apple"])); // "apple"
 