// == INTRO JS 2 == //

// -- Function --
// umumnya kalo buat variabel function menggunakan const

// anonymous function -> self invoking (tetapi jarang digunakan)
// function yang tidak membutuhkan nama
(() => {
  console.log("Halo funtion ini berjalan!");
})();

// untuk membuktikan bahwa ini benar-benar function
(() => {
  let umur = 12;

  console.log("Halo funtion ini berjalan!");
})();

console.log(umur); // tidak akan muncul karena variabel di dalam function tidak bisa diakses dari luar

// function akan berfungsi dengan baik apabila diubah menjadi seperti ini
(() => {
  let umur = 12;
  console.log(umur);

  console.log("Halo funtion ini berjalan!");
})();

// function ini juga bisa diberi parameter
((fullName) => {
  console.log(`Halo function ini berjalan dengan parameter berisi ${fullName}`);
})("Yongki Satria");

// -- Return --
// berfungsi menghentikan function dan mengembalikan nilai
const hitungAngka = (angka1, angka2, operator) => {
  if (operator == "+") {
    angka1 + angka2;
  } else if (operator == "-") {
    angka1 - angka2;
  } else if (operator == "*") {
    angka1 * angka2;
  }
};

hitungAngka(10, 20, "+"); // tidak akan muncul apapa karena function bertugas untuk menghitung aja, dan tidak perintah untuk menampilkan sesuatu ke layar

// Contoh lain
const hitungAngka = (angka1, angka2, operator) => {
  if (operator == "+") {
    angka1 + angka2;
  } else if (operator == "-") {
    angka1 - angka2;
  } else if (operator == "*") {
    angka1 * angka2;
  }

  return 10; // akan tampil 10
  // untuk memberi nilai pada sebuah function
};

hitungAngka(10, 20, "+");

let hitung;

if (hitung > 30) {
  console.log("data lebih besar dari 30");
} else {
  console.log("data lebih kecil dari 30");
}

if (hitung > 50) {
  console.log("data lebih besar dari 50");
} else {
  console.log("data lebih kecil dari 50");
}

// contoh lain
const hitungAngka = (angka1, angka2, operator) => {
  if (operator == "+") {
    angka1 + angka2;
  } else if (operator == "-") {
    angka1 - angka2;
  } else if (operator == "*") {
    angka1 * angka2;
  }

  return 10; // <-- end
  // kode dibawah return tidak akan tampil

  console.log("data lebih besar dari 30");
  console.log("data lebih besar dari 30");
  console.log("data lebih besar dari 30");
  console.log("data lebih besar dari 30");
  console.log("data lebih besar dari 30");
};

hitungAngka(10, 20, "+");

// contoh lain
const hitungAngka = (angka1, angka2, operator) => {
  if (typeof angka1 != "number") {
    return "angka 1 wajib angka"; // kode dibawahnya tidak dibaca karena angka1 bukan number
    // kode yang dibaca berhenti disini dan akan memunculkan "angka 1 wajib angka"
  }

  if (operator == "+") {
    angka1 + angka2;
  } else if (operator == "-") {
    angka1 - angka2;
  } else if (operator == "*") {
    angka1 * angka2;
  }

  console.log("data lebih besar dari 30");
  console.log("data lebih besar dari 30");
  console.log("data lebih besar dari 30");
  console.log("data lebih besar dari 30");
  console.log("data lebih besar dari 30");
};

console.log(hitungAngka("11", 20, "+")); // kode akan dijalankan jika parameter pertama adalah number

// contoh lain
const hitungAngka = () => {
  let angka1 = 10,
    angka2 = 20,
    angka3 = 30;
};

console.log(hitungAngka()); // akan tampil undefined karena sejatinya funtion adalah sebuah tugas jadi tidak memiliki nilai

// video menit 37
