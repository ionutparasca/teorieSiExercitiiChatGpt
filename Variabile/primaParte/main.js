console.log("===============================");
console.log("===       Exercițiul 1     ===");
console.log("===============================");

let nume = "Alex";
const varsta = 25;
let esteStudent = true;

console.log(nume);
console.log(varsta);
console.log(esteStudent);

let mesaj =
  "Salut numele meu este " +
  " " +
  nume +
  " " +
  "si am varsta de " +
  varsta +
  " " +
  "ani !";

console.log(mesaj);

let mesaj2 = `Salut! Numele meu este ${nume}, am ${varsta} ani și ${
  esteStudent ? "sunt" : "nu sunt"
} student.`;
console.log(mesaj2);

console.log("\n===============================");
console.log("===       Exercițiul 2     ===");
console.log("===============================\n");

let a = 28;
let b = 12;

let sum = a + b;
console.log(`Suma celor doua numere este: ${sum}!`);

let dif = a - b;
console.log(`Diferenta celor doua numere este : ${dif}!`);

let prod = a * b;
console.log(`Produsul celor doua numere este: ${prod}!`);

let div = a / b;
console.log(`Rezultatul impartirii celor doua numere este: ${div}`);

let modul = a % b;
console.log(`Restul impartirii celor doua numere este: ${modul}`);

console.log("\n===============================");
console.log("===       Exercițiul 2     ===");
console.log("===============================\n");

let x = 10;
let y = "10";

console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x > 5);
console.log(x <= 10);
