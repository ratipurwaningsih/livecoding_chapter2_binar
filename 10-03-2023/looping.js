// while loops = salah satu cara untuk kita melakukan iteration atau perulangan 
// while (condition)
// kondisinya tuh print angka 1-100
let number = 1
while (number <= 10) {
    // code yang di dalam sini, akan terus jalan selama kondisi di atas tidak terpenuhi/true
    // console.log(number)
    number += 1
}


// kondisinya tuh print 1-100 tapi angka perkalian 5
number = 1
while (number <= 100) {
    // code yang di dalam sini, akan terus jalan selama kondisi di atas tidak terpenuhi/true
    if (number % 5 === 0) {
        // console.log(number)
    }
    number += 1
}

// for loops
// for(variable;condition;update)
// i++ === i + 1, i-- === i - 1
let angka = 1
for(let i = 0;i < 100; i++) {
    // console.log(i)
    // print tiap angka kelipatan 3, ini kelipatan 3
    if (i % 3 === 0) {
    //     console.log("ini kelipatan 3")
    // } else {
    //     console.log(i)
    }
}

let person = [
    {
      "_id": "640c264637de8138cfd3c036",
      "isActive": true,
      "age": 39,
      "eyeColor": "brown",
      "name": "Caroline Workman",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640c26467f5f255143c42917",
      "isActive": true,
      "age": 35,
      "eyeColor": "blue",
      "name": "Sondra Blanchard",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640c2646642ca6e33467a787",
      "isActive": false,
      "age": 29,
      "eyeColor": "brown",
      "name": "Sherman Hoffman",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640c264609ab32ca1555185d",
      "isActive": true,
      "age": 33,
      "eyeColor": "brown",
      "name": "Mcleod William",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640c2646f14afa8467a3ae07",
      "isActive": true,
      "age": 27,
      "eyeColor": "blue",
      "name": "Stacey Bush",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640c26468aa9d4089281dcb5",
      "isActive": false,
      "age": 35,
      "eyeColor": "green",
      "name": "Park Vincent",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640c2646c89175caf371c6fe",
      "isActive": false,
      "age": 27,
      "eyeColor": "brown",
      "name": "Henderson Dickerson",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640c2646c2bce1d98d565548",
      "isActive": true,
      "age": 31,
      "eyeColor": "brown",
      "name": "Wilcox Clarke",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640c26463ef9bb6f23f65572",
      "isActive": false,
      "age": 31,
      "eyeColor": "blue",
      "name": "Lolita Frederick",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640c2646a83e54e09466d092",
      "isActive": true,
      "age": 28,
      "eyeColor": "brown",
      "name": "Lynn Weiss",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640c264627c506bd02dfbb5e",
      "isActive": true,
      "age": 32,
      "eyeColor": "blue",
      "name": "Mcdonald Wise",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640c2646bcb09035a96d030c",
      "isActive": true,
      "age": 24,
      "eyeColor": "green",
      "name": "Simpson Cohen",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640c2646053fd08f97859fd0",
      "isActive": false,
      "age": 23,
      "eyeColor": "brown",
      "name": "Mccormick Mack",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640c264666f9162ec4d2ddc9",
      "isActive": true,
      "age": 40,
      "eyeColor": "blue",
      "name": "Jeannette Wilcox",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640c2646f8f7f1bcbe71c8cc",
      "isActive": false,
      "age": 24,
      "eyeColor": "blue",
      "name": "Ashley Kent",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640c2646e56aa7864085a931",
      "isActive": true,
      "age": 29,
      "eyeColor": "brown",
      "name": "Melody Wynn",
      "gender": "female",
      "favoriteFruit": "banana"
    }
]

// 1. print person yang suka buah apple dan warna matanya biru
for(let i = 0; i <person.length; i++) {
    if(person[i].favoriteFruit === "apple" && person[i].eyeColor === "blue") {
        // console.log(person[i])
    } 
}

// 2. print berapa person yang age nya diatas 30
let hitung = 0
for(let i = 0; i <person.length; i++) {
  if(person[i].age > 30) {
    hitung++
  }
}
// console.log(hitung);

// 3. print person yang isActive true and gender nya female
for(let i = 0; i <person.length; i++) {
    if(person[i].isActive === true && person[i].gender === "female") {
        // console.log(person[i])
    }
}

// 4. print person yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue
for(let i = 0; i <person.length; i++) {
    if(person[i].age > 30 || person[i].age < 25) {
        if(person[i].eyeColor === "blue") {
            // console.log(person[i])
        }
    } 
}

// 5. print person yang mengandung huruf W di name nya
for(let i = 0; i <person.length; i++) {
  if(person[i].name.includes("W")) {
    // console.log(person[i])
  }
}

// 6. print person yang isActive false and gender nya male dan age nya diatas 25
for(let i = 0; i <person.length; i++) {
    if(person[i].isActive === false && person[i].gender === "male") {
        if(person[i].age>25) {
            // console.log(person[i])
        }
    } 
}

// 7. print person yang age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana
for(let i = 0; i <person.length; i++) {
    if(person[i].age < 30 || person[i].eyeColor === "brown") {
        if(person[i].favoriteFruit === "banana") {
            // console.log(person[i])
        }
    } 
}

// 8. print person gender male
for(let i = 0; i <person.length; i++) {
    if(person[i].gender === "male") {
        // console.log(person[i])
    } 
}

// 9. print person eyeColor Blue
for(let i = 0; i <person.length; i++) {
    if(person[i].eyeColor === "blue") {
        // console.log(person[i])
    } 
}

// 10. print person age diatas 30
for(let i = 0; i <person.length; i++) {
    if(person[i].age > 30) {
        // console.log(person[i])
    } 
}