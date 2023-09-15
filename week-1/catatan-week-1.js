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
console.log(typeof Number);
