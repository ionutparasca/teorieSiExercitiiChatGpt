console.log("===============================");
console.log("===       Exercițiul 1     ===");
console.log("===============================");

let nume = "Ionut";
let varsta = 33;
let nota = 9;
let esteStudent = true;

if (varsta >= 18) {
  console.log(`${nume} poate sa voteze!`);
} else {
  console.log(`${nume} este minor si nu are drept de vot!`);
}

if (nota <= 4) {
  console.log(`${nume} este repetent!`);
} else if (nota > 4 && nota < 9) {
  console.log(`${nume} este premiant!`);
} else {
  console.log(`${nume} este olimpic!`);
}
console.log("===============================");
console.log("===       Exercițiul 2    ===");
console.log("===============================");

if (esteStudent && varsta >= 26) {
  console.log(`${nume} poate sa primeasca o reducere de 35%!`);
} else {
  console.log(`${nume} nu indeplineste conditiile, nu primeste reducere!`);
}
