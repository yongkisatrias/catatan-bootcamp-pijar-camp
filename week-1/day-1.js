// == INTRO JS 1 == //

// -- Tipe Data --
// Number (hanya berisi angka)
let umur = 21;

// String (bisa berisi abjad, angka, dll)
let namaLengkap = "Yongki Satria Sanjaya";

// Bolean (hanya berisi true/false)
let isMaried = false;

// Function
let sayGreeting = () => {
  console.log("say hai!");
};

// Array (sebuah tipe data yang bisa menampung lebih dari 1 nilai dan bisa berisi number, string bahkan function dll)
let hobby = ["Gaming", "Ngoding", "Learning"];
console.log(hobby[2]); // indeks pertama dihitung dari angka 0 bukan angka 1
console.log(hobby[hobby.length - 1]); // untuk mengambil object terakhir secara otomatis

// Object (sebuah variabel yang bisa menampung data atau nilai lebih dari 1 tetapi object bersifat key value (ada nama penyebutnya ada nama valuenya))
let biodata = {
  firstName: "Yongki",
  lastName: "Sanjaya",
};
console.log(biodata["lastName"]);
console.log(biodata.lastName);

// null (kondisi ketika data sedang kosong)
let catatanKriminal = null;

// undefined (data yang tidak ada value-nya)
let riwayatKeluarNegri = undefined;

// Perbedaan 0, null dan undefined
// 0 = nilainya ada tapi berisi 0
// null = nilainya ga ada tapi kerangka/value-nya masih ada
// undefined = nilainya memang tidak ada dari awal

// Cara melihat tipe data
console.log(typeof umur);

// Kapan kita pake number real dan number string ?
let phoneNumber = 0897654321;
let phoneNumber2 = "0897654321"; // 0 tidak dibaca, jadi tidak cocok menggunakan string

let nilai1 = 10;
let nilai2 = 20;
console.log(nilai1 + nilai2); // benar, akan tampil hasilnya 30

let nilai1 = "10"; // jadinya "10" + "20" = 1020
let nilai2 = 20;
console.log(nilai1 + nilai2); // salah, hasilnya akan tampil 1020

// -- kondisi/percabangan --
// if-else (adalah statement logic yang lebih general)
const days = "kamis";

if (days == "kamis") {
  console.log("Jadwalnya ngantor");
} else if (days == "selasa") {
  // else if digunakan jika if nya lebih dari satu
  console.log("Jadwalnya ngantor");
} else {
  // else akan dijalankan jika if dan else if gagal dijalankan
  console.log("Jadwalnya WFH");
}

const days = new Date().getDay() - 1; // untuk megambil hari ini secara otomatis dan - 1 digunakan untuk membuat yang deafultnya minggu menjadi senin dengan ditambah 1
const dayNames = ["senin", "selasa", "rabu", "kamis", "jumat"];

if (dayNames[days] == "kamis") {
  console.log("Jadwalnya ngantor");
} else if (dayNames[days] == "selasa") {
  console.log("Jadwalnya ngantor");
} else {
  console.log("Jadwalnya WFH");
}

// switch-case (mirip dengan if-else tapi lebih kearah ada yang mirip atau tidak)
const days = new Date().getDay() - 1;
const dayNames = ["senin", "selasa", "rabu", "kamis", "jumat"];

switch (dayNames[days]) {
  case "kamis":
    console.log("jadwalnya ngantor");
    break; // break digunakan untuk berhenti dan agar data tidak bocor
  case "selasa":
    console.log("jadwalnya ngantor");
    break;
  default: // sebagai nilai jika nilai yang diatas tidak sesuai
    console.log("jadwalnya wfh");
}

// ternary operator/short-circuit logic (simpelnya adalah versi dari if-else yang dibikin lebih sederhana)
const days = new Date().getDay() - 1;
const dayNames = ["senin", "selasa", "rabu", "kamis", "jumat"];

// if (dayNames[days] == "kamis") {
//   console.log("Jadwalnya ngantor");
// } else {
//   console.log("Jadwalnya WFH");
// }

// contoh penggunakan ternary operator if-else biasa
console.log(dayNames[days] == "kamis" ? "jadwalnya ngantor" : "jadwalnya WFH");
// statement ? handling if true : handling if false
// ternary operator digunakan untuk mengecek if yang sifatnya lebih sederhana

// if (dayNames[days] == "kamis") {
//   console.log("Jadwalnya ngantor");
// } else if (dayNames[days] == "selasa") {
//   console.log("Jadwalnya ngantor");
// } else {
//   console.log("Jadwalnya WFH");
// }

// contoh penggunakan ternary operator else if
console.log(dayNames[days] == "kamis" ? "jadwalnya ngantor" : dayNames[days] == "selasa" ? "jadwalnya ngantor" : "jadwalnya WFH");
// statement ? handling if true : statement ? handling if true : handling if false
// tetapi ternary operator didesain tidak menggunakan else-if tetapi memungkinkan untuk menggunakan else-if

// -- Operator Perbandingan --
// Equal value, == (untuk membandingkan dari 2 buah nilai apakah nilai-nya sama atau tidak)
const angka1 = 100;
const angka2 = "100";
const isEquals = angka1 == angka2;
console.log(isEquals); // jawabannya true karena hanya membandingkan value-nya, value-nya sama sama 100

// Equal value and type, === (selain membandingkan nilai-nya, juga membandingkan tipe data-nya)
const angka1 = 100;
const angka2 = 100;
const isEquals = angka1 === angka2;
console.log(isEquals); // jawabannya true karena value dan tipe data-nya sama

// Not equal, != (kebalikan dari equal, kalau nilainya tidak sama akan bernilai true)
const angka1 = 100;
const angka2 = 100;
const isEquals = angka1 != angka2;
console.log(isEquals); // jawabannya false, karena kedua nilai sama

// Not equal value & type, !== (kalau nilai dan tipe data-nya tidak sama akan bernilai true)
const angka1 = 100;
const angka2 = "100";
const isEquals = angka1 !== angka2; //jawabannya true, karena tipe datanya berbeda

// Less and greater than, < and >
const angka1 = 10;
const angka2 = 15;
const isGreater = angka1 > angka2;
console.log(isGreater); // jawabannya false, karena 10 tidak lebih besar dari 15

const angka1 = 10;
const angka2 = 10;
const isGreater = angka1 > angka2;
console.log(isGreater); // jawabannya false, karena 10 sama dengan 10, tidak kurang dan tidak lebih

// Greater than or equal, >= (jika nilainya lebih besar dari 10 atau sama dengan 10)
const angka1 = 10;
const angka2 = 10;
const isGreater = angka1 >= angka2;
console.log(isGreater); // jawabannya true, karena 10 sama dengan 10

// Less than or equal, <= (jika nilainya kurang dari 10 atau sama dengan 10)
const angka1 = 10;
const angka2 = 10;
const isGreater = angka1 >= angka2;
console.log(isGreater); // jawabannya true, karena 10 sama dengan 10

// -- Perulangan --
// Adalah kondisi yang melakukan perulangan sampe kondisi yang ditentukan menjadi false
// For (Biasanya berhubungan dengan angka)
const carBrands = ["BMW", "Acurra", "Infinite", "Lexus", "Lotus", "Aston Martin"];
for (let index = 0; index < carBrands.length; index++) {
  console.log(carBrands[index]);
}
// (let index = 0; index < carBrands.length; index++) looping dimulai dari indeks 0 hingga indeks terakhir car brand lalu increment

// While dan do while (Bentuk looping yang lebih general)
// While
let isAlive = true;
let age = 21;
while (isAlive) {
  age++;
  console.log(age);
  if (age == 95) {
    isAlive = false;
  }
}

// do While (operasi dijalankan terlebih dahulu 1x jika statusnya bisa dilooping maka dilanjutkan jika tidak maka akan berhenti)
let isAlive = false;
let age = 21;
do {
  age++;
  console.log(age);
  if (age == 95) {
    isAlive = false;
  }
} while (isAlive);
