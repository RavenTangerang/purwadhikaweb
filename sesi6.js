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
  Age : new Date("2000-01-01"),
  Score: 90
  },
  {
  Name: "Agus Widodo",
  Email: "aguswidodo@hotmail.com",
  Age: new Date("2000-01-01"),
  Score: 85
  },
  {
  Name: "Rina Susanti",
  Email: "rinasusanti@hotmail.com",
  Age: new Date("2001-01-01"),
  Score: 90
  },
  {
  Name: "Budi Setiawan",
  Email: "budisetiawan@hotmail.com",
  Age: new Date("2002-01-01"),
  Score: 80
  },
  {
  Name: "Dewi Kurniawati",
  Email: "dewikurniawati@hotmail.com",
  Age: new Date("1999-01-01"),
  Score: 95
  },
  {
  Name: "Eko Prasetyo",
  Email: "ekoprasetyo@hotmail.com",
  Age: new Date("1998-01-01"),
  Score: 70
  }
  ]
  
  let score = {
  Highest: Math.max(...datasiswa.map(datasiswa => datasiswa.Score)),
  Lowest: Math.min(...datasiswa.map(datasiswa => datasiswa.Score)),
  Average: datasiswa.reduce((a, b) => a + b.Score, 0) / datasiswa.length,

  };
  return score;
  }
  let hasil = calculate();
  console.log(hasil);


  