// -- Template Literals --
const fullName = "Yongki Satria Sanjaya";
const age = 21;
const job = "Student";

// Hallo nama saya "fullName"
// Umur saya "age" dan pekerjaan saya sebagai "job"

// tidak menggunakan template literals
console.log("Hallo nama saya " + fullName + "\n" + "Umur saya " + age + " dan pekerjaan saya sebagai " + job);
// menggunakan template literals
console.log(`Hallo nama saya ${fullName}
Umur saya ${age} dan pekerjaan saya sebagai ${job}`); // bisa menggunakan enter/spasi baru karena mendukung multi line

// template literals juga bisa dimasukan kedalam variabel
const biodData = `Hallo nama saya ${fullName}
Umur saya ${age} dan pekerjaan saya sebagai ${job}`;
console.log(bioData);

// template literals juga bisa dimasukan kedalam if tetapi harus menggunakan ternary operator
const fullName = "Yongki Satria Sanjaya";
const age = 21;
const job = "Student";

const bioData = `Hallo nama saya ${fullName}
Umur saya ${age} dan pekerjaan saya sebagai ${job}, kalian bisa panggil aku ${age < 30 ? "mas" : "pak"} ${fullName.split(" ")[0]}`;
console.log(bioData);

// template literals dipakai apabila ada sebuah string yang mewajibkan concat data
// concat adalah menggabungkan data
const firstName = "Yongki";
const lastName = "Sanjaya";
const fullName = `${firstName} ${lastName}`;

console.log(`fullname : ${fullName}`); // atau jika tidak menggunakan template literals = console.log("fullname", fullName)

// -- Spread Operator --
// penggunaan memakai simbol tiga titik (...)
// bekerja seperti copy paste
const japanCar = ["honda", "mitsubitshi", "datsun"];
const europeCar = ["volvo", "mercedes", "BMW", "aston martin"];
const allCars = [...japanCar, ...europeCar];

console.log(allCars);

// bisa digunakan untuk mengclone/copy sebuah obejct
const profile = {
  firstName: "Bilkis",
  lastName: "Ismail",
  company: "Arkademy",
};

const job = {
  company: "Pijar Camp",
  exp: 2,
}; // ada 2 company tetapi yang muncul adalah Pijar camp karena indeks terakhir yang diambil

const resume = { ...profile, ...job };
console.log(resume);

// -- Destructuring --
// membagi atau memecah nilai dari sebuah array atau object yang berbeda
const profile = {
  firstName: "Bilkis",
  lastName: "Ismail",
  company: "Arkademy",
};

const job = {
  company: "Pijar Camp",
  exp: 2,
};

const resume = { ...job, ...profile };
const fullName = `${profile.firstName} ${profile.lastName}`;
console.log(fullName);

// lalu bagaimana jika tidak mempunyai last name (null)?
const profile = {
  firstName: "Ean",
  lastName: null,
  company: "Arkademy",
};

const job = {
  company: "Pijar Camp",
  exp: 2,
};

const resume = { ...job, ...profile };

const firstName = profile.firstName != null ? profile.firstName : "";
const lastName = profile.lastName != null ? profile.lastName : "ajah";

const fullName = `${firstName} ${lastName}`;

console.log(fullName); // akan tampil "ean ajah"

// bisa dipersingkat menggunakan destructuring
const profile = {
  firstName: "Ean",
  lastName: null,
  company: "Arkademy",
};

const job = {
  company: "Pijar Camp",
  exp: 2,
};

const resume = { ...job, ...profile };

const { firstName, lastName } = profile; // menggunakan destructuring

const _firstName = firstName != null ? firstName : "";
const _lastName = lastName != null ? lastName : "ajah";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// cara menggunakan alias untuk mengubah
const profile = {
  firstName: "Ean",
  lastName: null,
  company: "Arkademy",
};

const job = {
  company: "Pijar Camp",
  exp: 2,
};

const resume = { ...job, ...profile };

const { firstName: first, lastName: last } = profile; // menggunakan alias

const firstName = first != null ? first : "";
const lastName = last != null ? last : "ajah";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// cara validasi data sebuah object dengan lebih singkat
const firstName = first != null ? first : "";
const lastName = last != null ? last : "ajah";
// dibuah menjadi =
const firstName = first ?? "";
const lastName = last ?? "ajah";

// Jika nama key aneh dan ada spasinya, bisa diganti menggunakan destructuring
const profile = {
  firstName: "Ean",
  lastName: null,
  company: "Arkademy",
  "first name": "ean",
};

const { firstName: first, lastName: last, "first name": firstname } = profile;
console.log(firstname);

// cara destructuring object di dalam object (nested object)
const profile = {
  firstName: "Ean",
  lastName: null,
  company: {
    name: "Pijar Camp",
    parent: "Telkom",
    born: "1999",
  },
};

const {
  company: { name },
} = profile;

console.log(name); // akan muncul Pijar Camp

// cara destructuring object di dalam object di dalam obejct
const profile = {
  firstName: "Ean",
  lastName: null,
  company: {
    name: {
      firstName: "Pijar",
      lastName: "Camo",
    },
    parent: "Telkom",
    born: "1999",
  },
};

const {
  company: {
    name: { firstName },
  },
} = profile;

console.log(profile.company.name.firstName); // cara manual
console.log(firstName); // menggunakan destructuring

// destructuring kedalam array
// array berkaitan dengan index dan berurutan
const japanCar = ["honda", "mitsubitshi", "datsun", "nissan"];
const europeCar = ["volvo", "mercedes", "BMW", "aston martin"];
const [firstcar] = japanCar;

console.log(firstcar); // sama dengan console.log(japanCar[0]);

// jika ingin memanggil data yang kedua
const japanCar = ["honda", "mitsubitshi", "datsun", "nissan"];
const europeCar = ["volvo", "mercedes", "BMW", "aston martin"];
const [firstCar, secondCar] = japanCar;

console.log(secondCar); // sama dengan console.log(japanCar[1]);

// jika ingin mengambil data terakhir bisa menggunakan ghost destructuring tetapi jarang dipakai
const japanCar = ["honda", "mitsubitshi", "datsun", "nissan"];
const europeCar = ["volvo", "mercedes", "BMW", "aston martin"];
const [, , , lastCar] = japanCar;

console.log(lastCar); // sama dengan console.log(japanCar[3]);

// -- Function --
// adalah blok kode untuk melakukan tugas tertentu, dimulai dengan kata kunci function dan dicakup oleh tanda kurung. Fungsi akan berhenti jika berakhir atau ada sintaks return
// function biasa menggunaka kata kerja, atau kalimat checking
// ES5 Declaration (jarang digunakan karena lebih berat, lebih sering digunakan ES5 expression atau ES6 Arrow Function)
function getFirstName() {
  console.log("Yongki");
}

// ES5 Expression
const getLastName = function () {
  console.log("Sanjaya");
};

// execute
getFirstName();
getLastName();

// ES6
// Arrow Function (sering digunakan dan lebih ringkas)
const getFullName = (param) => {
  console.log(param);
}; // param adalah parameter

getFullName("Yongki Sanjaya");

// parameter boleh lebih dari satu
const getFullName = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};

getFullName("Zaki", "Maliki"); // akan muncul Zaki Maliki

// bagaimana jika hanya memiliki nama depan dan tidak memiliki nama belakang?
const getFullName = (firstName, lastName = "") => {
  console.log(`${firstName} ${lastName}`);
};

getFullName("Ean");

// contoh lain
const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
}; // return digunakan untuk mengembalikan value

const getLastName = (fullName) => {
  return fullName.split(" ")[fullName.split(" ").length - 1];
}; // ini untuk mengambil indeks terakhir

const firstName = getFirstName("Bilkis Ismail");
const lastName = getLastName("Bilkis Rizki Ismail");

console.log(lastName);

// contoh lain
const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

const getLastName = (fullName) => {
  return fullName.split(" ")[fullName.split(" ").length - 1];
};

const trainers = ["Zaki Maliki", "Ahmad Risano", "Arrum", "Bilkis Ismail"];

for (let index = 0; index < trainers.length; index++) {
  console.log(`Halo nama depan saya ${getFirstName(trainers[length])}`);
} // untuk mengambil nama depan

// contoh lain jika tidak ada nama tengah
const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

const getLastName = (fullName) => {
  return fullName.split(" ")[3];
};

const getFullName = (first, middle, last) => {
  console.log(`${first} ${middle} ${last}`);
};

getFullName("Bilkis", "", "Ismail");

// atau cara lainnya adalah bisa menggunakan destructuring
const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

const getLastName = (fullName) => {
  return fullName.split(" ")[3];
};

const getFullName = ({ first, middle, last }) => {
  console.log(`${first} ${middle ?? ""} ${last}`);
};

getFullName({
  first: "Bilkis",
  last: "Ismail",
});
