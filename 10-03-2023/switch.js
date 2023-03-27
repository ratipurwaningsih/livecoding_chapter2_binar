// object
let student = {
    name: "wira",
    gender: "female",
    rank: 5
}

// array of object 
let students = [
    {
        name: "helmy",
        gender: "female"
    },
    {
        name: "rati",
        gender: "female"
    },
    {
        name: "riza",
        gender: "female"
    }
]

// switch statement
// print nama2 student yang gendernya cewe
// student = object nya, rank = key dari objek
switch (student.rank) {
    case 1:
        console.log("Dia mendapatkan mendali emas")
        break;
    case 2:
        console.log("Dia mendapatkan mendali silver")
        break;
    case 3:
        console.log("Dia mendapatkan mendali perak")
        break;
    default:
        console.log("dia tidak dapat medali apa2")
}