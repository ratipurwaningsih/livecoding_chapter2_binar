const levelCharacter = 10

// kalau level 12, maka boleh lanjut babak selanjutnya
if(levelCharacter > 10) {
    console.log("lanjut babak selanjutnya")
}

// boolean = true dan false
console.log(levelCharacter >= 10);
// kurang dari sama dengan 10 === 10 - 9 - 8 - 7 dst
console.log(levelCharacter <= 10);
// kurang dari 10 === 9 - 8 - 7 - dst
console.log(levelCharacter < 10);

// comparison operators

// a sama dengan b ?
console.log("a" === "b")

// a tidak sama dengan b ?
console.log("a" !== "b")

const fsw3Students = [
    {
        "_id": "6409ebc96b1c848ee8ed1a1d",
        "index": 0,
        "age": 24,
        "eyeColor": "green",
        "name": "Mullins Nolan",
        "phone": "+1 (987) 428-3770",
        "address": "794 Vernon Avenue, Columbus, Ohio, 8941",
        "friends": [
            {
                "id": 0,
                "name": "Aguilar Kramer"
            },
            {
                "id": 1,
                "name": "Brooks Garrett"
            },
            {
                "id": 2,
                "name": "Freida Wolfe"
            }
        ],
        "greeting": "Hello, Mullins Nolan! You have 4 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "6409ebc9d2f0b0399f00e753",
        "index": 1,
        "age": 31,
        "eyeColor": "brown",
        "name": "Velez Horne",
        "phone": "+1 (814) 416-3067",
        "address": "840 Lake Street, Berwind, North Dakota, 3073",
        "friends": [
            {
                "id": 0,
                "name": "Ortiz Lester"
            },
            {
                "id": 1,
                "name": "Barton Whitney"
            },
            {
                "id": 2,
                "name": "Carey Snider"
            }
        ],
        "greeting": "Hello, Velez Horne! You have 7 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "6409ebc9e91b3777ab3813b3",
        "index": 2,
        "age": 35,
        "eyeColor": "blue",
        "name": "Herminia Thornton",
        "phone": "+1 (989) 504-3204",
        "address": "700 Stuyvesant Avenue, Boyd, Pennsylvania, 2404",
        "friends": [
            {
                "id": 0,
                "name": "Maynard Parks"
            },
            {
                "id": 1,
                "name": "Claire Branch"
            },
            {
                "id": 2,
                "name": "Brown Mcconnell"
            }
        ],
        "greeting": "Hello, Herminia Thornton! You have 8 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "6409ebc9734fa1718a10f6d0",
        "index": 3,
        "age": 39,
        "eyeColor": "brown",
        "name": "Bailey Salinas",
        "phone": "+1 (912) 455-2692",
        "address": "595 Scholes Street, Oneida, Mississippi, 5929",
        "friends": [
            {
                "id": 0,
                "name": "Conway Sawyer"
            },
            {
                "id": 1,
                "name": "Janelle Jacobson"
            },
            {
                "id": 2,
                "name": "Desiree Kane"
            }
        ],
        "greeting": "Hello, Bailey Salinas! You have 1 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "6409ebc9e253b4d8e0a2586c",
        "index": 4,
        "age": 31,
        "eyeColor": "brown",
        "name": "Gamble Snyder",
        "phone": "+1 (965) 550-2149",
        "address": "161 George Street, Veyo, American Samoa, 7965",
        "friends": [
            {
                "id": 0,
                "name": "Wiggins Pennington"
            },
            {
                "id": 1,
                "name": "Carmela Oneal"
            },
            {
                "id": 2,
                "name": "Cross Battle"
            }
        ],
        "greeting": "Hello, Gamble Snyder! You have 9 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "6409ebc913339a62bd0878c2",
        "index": 5,
        "age": 26,
        "eyeColor": "blue",
        "name": "Julianne Hopper",
        "phone": "+1 (884) 500-3988",
        "address": "844 Waldane Court, Sharon, Vermont, 4149",
        "friends": [
            {
                "id": 0,
                "name": "Hutchinson West"
            },
            {
                "id": 1,
                "name": "Jeannette Britt"
            },
            {
                "id": 2,
                "name": "Thelma Jenkins"
            }
        ],
        "greeting": "Hello, Julianne Hopper! You have 8 unread messages.",
        "favoriteFruit": "strawberry"
    }
]

let arr = []

for(let i = 0; i < fsw3Students.length; i++) {
    // aku mau print display student yang suka apple
    if (fsw3Students[i].favoriteFruit === "apple") {
        arr.push(fsw3Students[i])
        // console.log(fsw3Students[i].name)
    }
}

console.log(arr.length)
    // apakah banyak yang suka apple
    if (arr.length > 2) {
        console.log(`banyak kok, ada student suka apple sebanyak ${arr.length}`)
    } else {
        console.log(`gak banyak kok, ada student suka apple sebanyak ${arr.length} doang`)
    }

// kak bedanya == sama === apa?
let a = 1
let b = "1"
console.log(a == b)
console.log(a === b)