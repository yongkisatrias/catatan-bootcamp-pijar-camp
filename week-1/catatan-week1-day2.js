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
