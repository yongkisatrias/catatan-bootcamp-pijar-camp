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

// apakah dalam 1 file bisa menjalankan 2 anonymous function? jawabannya adalah bisa
((fullName) => {
  console.log(`Halo function ini berjalan dengan parameter berisi ${fullName}`);
})("Yongki Satria");

((fullName) => {
  console.log(`Halo function ini berjalan dengan parameter berisi ${fullName}`);
})("Bilkis Ismail");

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

hitungAngka(10, 20, "+"); // tidak akan muncul apa-apa karena function bertugas untuk menghitung aja, dan tidak perintah untuk menampilkan sesuatu ke layar

// Contoh lain
const hitungAngka = (angka1, angka2, operator) => {
  if (operator == "+") {
    angka1 + angka2;
  } else if (operator == "-") {
    angka1 - angka2;
  } else if (operator == "*") {
    angka1 * angka2;
  }
  return 10; // function return (bisa berisi tipe data bebas)
  // return akan menghentikan nilai apapun, yang dibawah return tidak akan dibaca
};

hitungAngka(10, 20, "+");
// console.log(hitungAngka(10, 20, "+"));
// jika di console hanya akan undefined karena function hanya sebuah tugas bukan sebuah nilai, maka harus ditambahkan function return

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

// contoh lain jika return dimatikan
const hitungAngka = (angka1, angka2, operator) => {
  if (typeof angka1 != "number") {
    // return "angka 1 wajib angka"
  }

  if (operator == "+") {
    console.log(angka1 + angka2);
  } else if (operator == "-") {
    angka1 - angka2;
  } else if (operator == "*") {
    angka1 * angka2;
  }
};

console.log(hitungAngka("11", 20, "+"));
// maka akan tampil 1120

// contoh lain jika return dihidupkan
const hitungAngka = (angka1, angka2, operator) => {
  if (typeof angka1 != "number") {
    return "angka 1 wajib angka";
  }

  if (operator == "+") {
    console.log(angka1 + angka2);
  } else if (operator == "-") {
    angka1 - angka2;
  } else if (operator == "*") {
    angka1 * angka2;
  }
};

console.log(hitungAngka("11", 20, "+"));
// maka akan "tampil angka 1 wajib angka", dan kode dibawahnya tidak dijalankan

// contoh lain
const hitungAngka = () => {
  let angka1 = 10,
    angka2 = 20,
    angka3 = 30;
};

console.log(hitungAngka()); // akan tampil undefined karena sejatinya funtion adalah sebuah tugas jadi tidak memiliki nilai

// jika kita ingin memberi sebuah nilai di dalam function kita bisa memberikan return
const hitungAngka = () => {
  let angka1 = 10,
    angka2 = 20,
    angka3 = 30;
  return angka1; // menghentikan function dan memberikan sebuah nilai
};

console.log(hitungAngka());
// karena diatas kita memberikan return ke angka 1 maka jika di console log akan tampil = 10

// contoh lain secara simpel
const hobiEan = ["tidur", "ngobrol", "jalan-jalan"];
const hobiBilkis = ["ngobrol", "jalan-jalan", "motoran", "sepedahan"];

const hitungPanjangArray = (array) => {
  return array.length; // jika return dinonaktifkan maka akan muncul undefined
};

console.log(hitungPanjangArray(hobiEan) + hitungPanjangArray(hobiBilkis));
// maka akan tampil = 7

// contoh jika datanya rusak
const hobiEan = ["tidur", "ngobrol", "jalan-jalan", 1, 2, 3, 4, 5];
const hobiBilkis = ["ngobrol", "jalan-jalan", "motoran", "sepedahan", 1, 2, 3, 4, 5];

const hitungPanjangArray = (array) => {
  return array.length;
};

console.log(hitungPanjangArray(hobiEan) + hitungPanjangArray(hobiBilkis));
// maka akan tampil = 17

// lalu bagaimana jika yang di inginkan hanya menghitung data string nya saja?
const hobiEan = ["tidur", "ngobrol", "jalan-jalan", 1, 2, 3, 4, 5];
const hobiBilkis = ["ngobrol", "jalan-jalan", "motoran", "sepedahan", 1, 2, 3, 4, 5];

const hitungPanjangHobi = (array) => {
  return array.filter((item) => typeof item == "string").length;
};

// bisa juga menggunakan cara dibawah tetapi lebih sulit dipahami
// console.log(
//   hobiEan.filter((item) => typeof item == "string").length +
//   hobiBilkis.filter((item) => typeof item == "string").length);

console.log(hitungPanjangHobi(hobiEan) + hitungPanjangHobi(hobiBilkis));
// maka akan tampil 7

// -- Method --
// method adalah function di dalam objek
const profile = {
  firstName: "Bilkis",
  lastName: "Ismail",
  age: 22,
  job: "technical trainer",
  sayGreeting: function () {
    // console.log(`halo nama saya ${profile.firstName} ${profile.lastName} umur saya ${profile.age}, saat ini saya bekerja sebagai ${profile.job}`);
    // bisa diubah menjadi seperti dibawah
    console.log(`halo nama saya ${this.firstName} ${this.lastName} umur saya ${this.age}, saat ini saya bekerja sebagai ${this.job}`);
    // this & profile sama-sama mengakses dirinya sendiri tetapi memiliki perbedaan yaitu this kalo objeknya berubah dia akan mengikuti obejknya, tetapi kalau profile akan mengikuti parent-nya
  },
};

profile.sayGreeting();
// akan tampil = halo nama saya Bilkis Ismail umur saya 22, saat ini saya bekerja sebagai technical trainer

// karena method adalah sebuah function maka kita bisa mengirimkan parameter dan menggunakan return
const profile = {
  firstName: "Bilkis",
  lastName: "Ismail",
  age: 22,
  job: "technical trainer",
  sayGreeting: function (fullName) {
    console.log(`halo nama saya ${fullName} umur saya ${this.age}, saat ini saya bekerja sebagai ${this.job}`);
  }, // this tidak akan berjalan di arrow function
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

profile.sayGreeting(profile.getFullName());
// akan tampil = halo nama saya Bilkis Ismail umur saya 22, saat ini saya bekerja sebagai technical trainer

// bisa ngga sih sebuah method dipanggil di method lain? bisa, syaratnya adalah dia di dalam sebuah objek yg sama
const profile = {
  firstName: "Bilkis",
  lastName: "Ismail",
  age: 22,
  job: "technical trainer",
  sayGreeting: function () {
    console.log(`halo nama saya ${this.getFullName} umur saya ${this.age}, saat ini saya bekerja sebagai ${this.job}`);
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

profile.sayGreeting();
// akan tampil = halo nama saya Bilkis Ismail umur saya 22, saat ini saya bekerja sebagai technical trainer

// contoh lain
const profile = {
  firstName: "Bilkis",
  lastName: "Ismail",
  age: 22,
  job: {
    company: "",
    name: "technical trainer",
  },
  sayGreeting: function () {
    console.log(`halo nama saya ${this.getFullName} umur saya ${this.age}, saat ini saya bekerja sebagai ${this.job.name}`);
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

profile.sayGreeting();
// akan tampil = halo nama saya Bilkis Ismail umur saya 22, saat ini saya bekerja sebagai technical trainer

// -- Callback Function --
// adalah sebuah function biasa, yang dikirimkan sebagai parameter ke function lain, kemudian di eksekusi di function tersebut
const profile = {
  firstName: "Bilkis",
  lastName: "Ismail",
  age: 22,
};

const getFullName = () => {
  return `${profile.firstName} ${profile.lastName}`;
};

const sayHello = (callback) => {
  console.log(`Halo nama aku ${callback()} umur aku ${profile.age}`);
};

sayHello(getFullName);
// akan tampil = Halo nama aku Bilkis Ismail umur aku 22

// contoh callback function jika ada data yang gagal
const profile = {
  firstName: "Bilkis",
  lastName: "Ismail",
  age: 22,
};

const getFullName = () => {
  return null;
};

const getFullName2 = () => {
  return "data not found";
};

const sayHello = (callback, callback2) => {
  console.log(callback2() ? `Halo nama aku ${callback()} umur aku ${profile.age}` : callback2());
};

sayHello(getFullName, getFullName2);
// akan tampil = data not found

// secara simpelnya callback adalah sebuah function yang menjalankan function lain tapi dia dikirimkannya melalui parameter
