/*● Create a function to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties :
■ Score
● Highest
● Lowest
● Average
■ Age
● Highest
● Lowest
● Average*/

function calculate(){
  let datasiswa =[{
  Name :"Muhammad Fahri Ramadhan",
  Email : "cessnafahri@gmail.com",
  Age : 25,
  Score: 90
  },
  {
  Name: "Agus Widodo",
  Email: "aguswidodo@hotmail.com",
  Age: 15,
  Score: 85
  },
  {
  Name: "Rina Susanti",
  Email: "rinasusanti@hotmail.com",
  Age: 31,
  Score: 90
  },
  {
  Name: "Budi Setiawan",
  Email: "budisetiawan@hotmail.com",
  Age: 24,
  Score: 80
  },
  {
  Name: "Dewi Kurniawati",
  Email: "dewikurniawati@hotmail.com",
  Age: 23,
  Score: 95
  },
  {
  Name: "Eko Prasetyo",
  Email: "ekoprasetyo@hotmail.com",
  Age: 20,
  Score: 70
  }
  ]
  
let age = {
  highest: Math.max(...datasiswa.map(datasiswa => datasiswa.Age)),
  lowest : Math.min(...datasiswa.map(datasiswa => datasiswa.Age)),
  average : datasiswa.reduce((a,b)=> a+b.Score,0)/ datasiswa.length,
};
   let score = {
  Highest: Math.max(...datasiswa.map(datasiswa => datasiswa.Score)),
  Lowest: Math.min(...datasiswa.map(datasiswa => datasiswa.Score)),
  Average: datasiswa.reduce((a, b) => a + b.Score, 0) / datasiswa.length,

  };
  return {age, score};
  }
 

  let hasil = calculate();

  console.log(hasil.age);
  
  console.log(hasil.score);


 /* Create a program to create transaction
● Product Class
○ Properties
■ Name
■ Price
● Transaction Class
○ Properties
■ Total
■ Product
● All product data
● Qty

○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addToCart(product, qty) {
    this.total += product.price * qty;
    this.products.push({ name: product.name, qty, price: product.price });
  }

  showTotal() {
    return this.total;
  }

  checkout() {
    return { total: this.total, products: this.products };
  }
}
const p = new Product("Product 1", 10);
const t = new Transaction();
t.addToCart(p, 2);
console.log(t.showTotal()); // 20
console.log(t.checkout());
// { total: 20, products: [ { name: 'Product 1', qty: 2, price: 10 } ] }




// Create a function to check if two objects are equal                 


function check(a,b){
  if(a===b){
    console.log("equal")
  }    else if (a != b) 
  {console.log("not equal")}
return check
}


let a = [{nama: 1,
          umur: 23}]

let b = [{nama:1,
          umur: 23}]

          console.log(check(a,b) )
           