const levelCharacter = 10

// kalau level 10, maka boleh lanjut babak selanjutnya
if(levelCharacter > 10) {
    // code yang dibawah/didalam sini akan jalan/run saat kondisi nya TRUE
    console.log("lanjut babak selanjutnya")
} else {
    // code yang dibawah/didalam sini akan jalan/run saat kondisi nya FALSE
    console.log("latihan lagi di babak ini")
}

let student = {
    name: "wira",
    gender: "male"
}

// ELSE IF STATEMENT
// apakah student itu male?
if (student.gender === "male") {
    console.log("yah dia male")
} else if (student.gender === "female") {
    console.log("yah dia female")
} else {
    console.log("tidak diketahui")
}

