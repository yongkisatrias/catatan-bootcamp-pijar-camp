// == INTRO JS 3 == //

//  -- Asynchronous --
// hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses
// perumpamaannya seperti naik eskalator dan depan kita lama, kita bisa nyerobot atau berjalan duluan supaya tidak ada proses tunggu menunggu

// contoh synchronous
console.log("urutan 1");
console.log("urutan 2");
console.log("urutan 3");
console.log("urutan 4");
console.log("urutan 5");
//  maka akan tampil berurutan seperti ini =
// urutan 1
// urutan 2
// urutan 3
// urutan 4
// urutan 5

// contoh asynchronous
console.log("urutan 1");
console.log("urutan 2");

setTimeout(() => {
  console.log("urutan 3");
}, 2000);

console.log("urutan 4");
console.log("urutan 5");
//  maka akan tampil secara asynchronous seperti ini =
// urutan 1
// urutan 2
// urutan 4
// urutan 5
// urutan 3 // ini tampil terakhir karena js mengeksekusi urutan 4 & 5 terlebih dahulu karena urutan 3 harus menunggu selama 2000 ms

// -- Callback Asynchronous --
// adalah salah satu metode yang paling umum yang digunakan untuk menghandle return value dari operasi asynchronous
// callback sendiri adalah sebuah regular function(yang biasanya anonymous) dan ditaruh di argumen paling belakang dari sebuah asynchronous function
// layaknya function biasa, callback juga dapat menerima parameter dan mengembalikan value

// -- Promise --
// merupakan perwakilan dari sebuah nilai yang belum diketahui outputnya, promise memungkinkan pengguna untuk menghubungkan fungsi handler dengan keberhasilan atau kegagalan aksi asynchronous
// simpelnya adalah janji yang mempunyai 2 kemungkinan yaitu bisa ditepati dan janji tidak ditepati
// promise bisa disandingkan dengan function

// contoh buat seperti ini
// senin - jumat = aman, sabtu - minggu = maintenance
const days = ["senin", "selasa", "rabu", "kamis", "jumat"];

const mengambilUang = (hariAmbilUang) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (days.filter((item) => item == hariAmbilUang).length > 0) {
        resolve("Uang berhasil diambil");
      } else {
        reject("Uang gagal diambil, jadwalnya maintenance");
      }
    }, 3000);
  });
};

mengambilUang("sabtu"); // akan error, karena secara deafult promise jika di reject akan error
mengambilUang("senin"); // tidak akan tampil apa-apa, karena di dalam function tidak ada proses untuk menampilkan sesuatu
// jika di console.log
console.log(mengambilUang("senin")); // akan tampil pending
// promise memiliki 3 status yaitu pending, reject, resolve
// pending adalah dimana promise dalam keadaan menunggu

// Promise, .then() & .catch()
const days = ["senin", "selasa", "rabu", "kamis", "jumat"];

const mengambilUang = (hariAmbilUang) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (days.filter((item) => item == hariAmbilUang).length > 0) {
        resolve("Uang berhasil diambil");
      } else {
        reject("Uang gagal diambil, jadwalnya maintenance");
      }
    }, 3000);
  });
};

mengambilUang("senin").then((result) => {
  console.log("Proses tunggu berhasil");
  console.log(result); // result diambil dari resolve
});

console.log("baris paling terakhir");
// akan tampil seperti ini =
// baris paling terakhir
// Proses tunggu berhasil
// Uang berhasil diambil

// bagaimana jika yang dimasukin hari sabtu? maka akan error, dan jika ingin menghandle error maka menggunakan .catch()
const days = ["senin", "selasa", "rabu", "kamis", "jumat"];

const mengambilUang = (hariAmbilUang) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (days.filter((item) => item == hariAmbilUang).length > 0) {
        resolve("Uang berhasil diambil");
      } else {
        reject("Uang gagal diambil, jadwalnya maintenance");
      }
    }, 3000);
  });
};

mengambilUang("sabtu")
  .then((result) => {
    console.log("Proses tunggu berhasil");
    console.log(result); // result diambil dari resolve
  })
  .catch((error) => {
    console.log("Proses ambil uang gagal");
    console.log(error); // error diambil dari reject
  });

// maka akan tampil =
// Proses ambil uang gagal
// Uang gagal diambil, jadwalnya maintenance

// resolve akan nyambung ke .then() dan reject akan nyambung ke .catch()

// bagaimana jika fungsi mengambil uang dimasukin ke dalam variabel?
const days = ["senin", "selasa", "rabu", "kamis", "jumat"];

const mengambilUang = (hariAmbilUang) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (days.filter((item) => item == hariAmbilUang).length > 0) {
        resolve("Uang berhasil diambil");
      } else {
        reject("Uang gagal diambil, jadwalnya maintenance");
      }
    }, 3000);
  });
};

const percobaan1 = mengambilUang("senin");
const percobaan2 = mengambilUang("jumat");
const percobaan3 = mengambilUang("sabtu");

percobaan1
  .then((result) => {
    console.log("Proses tunggu berhasil");
    console.log(result); // result diambil dari resolve
  })
  .catch((error) => {
    console.log("Proses ambil uang gagal");
    console.log(error); // error diambil dari reject
  });
// maka akan tampil =
// Proses tunggu berhasil
// Uang berhasil diambil

percobaan2
  .then((result) => {
    console.log("Proses tunggu berhasil");
    console.log(result); // result diambil dari resolve
  })
  .catch((error) => {
    console.log("Proses ambil uang gagal");
    console.log(error); // error diambil dari reject
  });
// maka akan tampil =
// Proses tunggu berhasil
// Uang berhasil diambil

percobaan3
  .then((result) => {
    console.log("Proses tunggu berhasil");
    console.log(result); // result diambil dari resolve
  })
  .catch((error) => {
    console.log("Proses ambil uang gagal");
    console.log(error); // error diambil dari reject
  });
// maka akan tampil =
// Proses ambil uang gagal
// Uang gagal diambil, jadwalnya maintenance

// .then() .catch() berfungsi untuk memberitahu javascript untuk nunggu hingga kodenya selesai

// -- Async / Await --
// adalah fitur yang hadir sejak ES 2017, fitur ini mempermudah kita dalam menangani proses asynchronous
// async = mengubah function menjadi asynchronous
// await = menunda eksekusi hingga proses asynchronous selesai
const days = ["senin", "selasa", "rabu", "kamis", "jumat"];

const mengambilUang = (hariAmbilUang) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (days.filter((item) => item == hariAmbilUang).length > 0) {
        resolve("Uang berhasil diambil");
      } else {
        reject("Uang gagal diambil, jadwalnya maintenance");
      }
    }, 3000);
  });
};

// function declaration ES5
async function main() {
  const callPromise1 = await mengambilUang("senin"); // tunggu 3 detik baru muncul hasilnya
  const callPromise2 = await mengambilUang("selasa"); // tunggu 3 detik baru muncul hasilnya
  console.log(callPromise1);
  console.log(callPromise2);
}

main();
// akan tampil =
// Uang berhasil diambil
// Uang berhasil diambil

// function expresion ES5
const main = async function () {
  const callPromise1 = await mengambilUang("senin"); // tunggu 3 detik baru muncul hasilnya
  const callPromise2 = await mengambilUang("selasa"); // tunggu 3 detik baru muncul hasilnya
  console.log(callPromise1);
  console.log(callPromise2);
};

main();
// akan tampil =
// Uang berhasil diambil
// Uang berhasil diambil

// arrow function ES6
const main = async () => {
  const callPromise1 = await mengambilUang("senin"); // tunggu 3 detik baru muncul hasilnya
  const callPromise2 = await mengambilUang("selasa"); // tunggu 3 detik baru muncul hasilnya
  console.log(callPromise1);
  console.log(callPromise2);
};

main();
// akan tampil =
// Uang berhasil diambil
// Uang berhasil diambil

// bagaimana Async / Await menghandle error?

// -- Try Catch & Finally -- (untuk mengatasi error pada async/await bisa menggunakan try catch)
// try = kita sisipkan kode yang mungkin terjadi error
// catch = blok inilah yang akan menangkap error yang terjadi pada blok try
// finallly = optional, baik terjadi error atau tidak. Akan selalu dijalankan

// contoh penggunaan
const days = ["senin", "selasa", "rabu", "kamis", "jumat"];

const mengambilUang = (hariAmbilUang) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (days.filter((item) => item == hariAmbilUang).length > 0) {
        resolve("Uang berhasil diambil");
      } else {
        reject("Uang gagal diambil, jadwalnya maintenance");
      }
    }, 3000);
  });
};

const main = async () => {
  try {
    const callPromise1 = await mengambilUang("senin"); // tunggu 3 detik baru muncul hasilnya
    const callPromise2 = await mengambilUang("selasa"); // tunggu 3 detik baru muncul hasilnya
    console.log(callPromise1);
    console.log(callPromise2);
    console.log("proses selesai");
  } catch (error) {
    console.log("ambil uang gagal");
  }
};

main();
// akan tampil =
// Uang berhasil diambil
// Uang berhasil diambil
// proses selesai

// Jika ada yang error (sabtu) maka catch yang akan dijalankan
const main = async () => {
  try {
    const callPromise1 = await mengambilUang("senin"); // tunggu 3 detik baru muncul hasilnya
    const callPromise2 = await mengambilUang("sabtu"); // tunggu 3 detik baru muncul hasilnya
    console.log(callPromise1);
    console.log(callPromise2);
    console.log("proses selesai");
  } catch (error) {
    console.log("ambil uang gagal");
  }
};

main();
// akan tampil =
// ambil uang gagal

// apakah try catch bisa digunakan untuk function synchronous? jawabannya adalah bisa
const profile = {};

const sudahPastiError = () => {
  try {
    console.log(profile.company.name);
  } catch (error) {
    console.log("kamu akses object yang gak ada");
  }
};

sudahPastiError();
// akan tampil = kamu akses object yang gak ada

// -- fetch -- (sebuah function yang berguna untuk mengambil resource dari luar)
// hanya bisa digunakan di node.js versi 18 keatas
fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
  console.log("proses ambil data sudah berhasil");
});
// akan tampil = proses ambil data sudah berhasil

// bagaimana utuk mengatasi error?
fetch("https://jsonplaceholderrrrrrr.typicode.com/todos/1")
  .then(() => {
    console.log("proses ambil data sudah berhasil");
  })
  .catch(() => {
    console.log("proses ambil data gagal");
  });
// akan tampil = proses ambil data gagal

// lalu bagaimana jika data benar?
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => {
    console.log(result);
    console.log("proses ambil data sudah berhasil");
  })
  .catch(() => {
    console.log("proses ambil data gagal");
  });
// jika dicoba run maka akan tampil banyak data karena javascript akan mengirimkan data html dari url website json

// contoh lain jika ingin membuat (todo dengan id 1 berjudul "delectus aut autem" statusnya true ? completed : not completed)
// json = javascript object notation

// mengambil API menggunaan then catch
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => {
    result
      .json() //.json() adalah metode yang digunakan untuk menguraikan respons JSON menjadi objek JavaScript
      .then((jsonData) => console.log(jsonData))
      .catch((error) => console.log(error));
  })
  .catch(() => {
    console.log("proses ambil data gagal");
  });
// maka akan tampil = { userID: 1, id: 1, tittle: 'delectus aut autem', completed: false}

// maka harus membuat seperti ini
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => {
    result
      .json() //.json() adalah metode yang digunakan untuk menguraikan respons JSON menjadi objek JavaScript
      .then((jsonData) => {
        console.log(`todo dengan id ${jsonData.id} berjudul "${jsonData.tittle}" statusnya ${jsonData.completed ? "complete" : "not completed"}`);
      })
      .catch((error) => console.log(error));
  })
  .catch(() => {
    console.log("proses ambil data gagal");
  });
// maka akan tampil = todo dengan id 1 berjudul "delectus aut autem" statusnya not completed

// bisa dibuat menjadi lebih rapi dengan cara seperti ini
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => result.json())
  .then((jsonData) => {
    console.log(`todo dengan id ${jsonData.id} berjudul "${jsonData.tittle}" statusnya ${jsonData.completed ? "complete" : "not completed"}`);
  })
  .catch(() => {
    console.log("proses ambil data gagal");
  });
// maka akan tampil = todo dengan id 1 berjudul "delectus aut autem" statusnya not completed
// hanya beda teknik penulisan

// menggunakan async/await
const main = async () => {
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const jsonData = await request.json();

    console.log(`todo dengan id ${jsonData.id} berjudul "${jsonData.tittle}" statusnya ${jsonData.completed ? "complete" : "not completed"}`);
  } catch (error) {
    console.log("proses ambil data gagal");
  }
};

main();
// maka akan tampil = todo dengan id 1 berjudul "delectus aut autem" statusnya not completed

// kapan harus menggunakan then catch atau async await?
// jika API hanya 1 lebih baik menggunakan then catch
// jika API lebih banyak maka gunakan async await

// contoh
const main = async () => {
  try {
    const request1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const request2 = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const jsonData1 = await request1.json();
    const jsonData2 = await request2.json();

    console.log(`todo dengan id ${jsonData1.id} berjudul "${jsonData1.tittle}" statusnya ${jsonData1.completed ? "complete" : "not completed"}`);
    console.log(`todo dengan id ${jsonData2.id} berjudul "${jsonData2.tittle}" statusnya ${jsonData2.completed ? "complete" : "not completed"}`);
  } catch (error) {
    console.log("proses ambil data gagal");
  }
};

main();
// maka akan tampil =
// todo dengan id 1 berjudul "delectus aut autem" statusnya not completed
// todo dengan id 1 berjudul "quis ut nam facilis et officia qui" statusnya not completed
