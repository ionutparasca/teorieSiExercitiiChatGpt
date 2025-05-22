console.log("===============================");
console.log("===       Exercițiul 1     ===");
console.log("===============================");

function salut() {
  console.log("Salut lume!");
}
salut();

function salutNume(nume) {
  console.log(`Salut ${nume}!`);
}
salutNume("Ionut");
console.log("===============================");
console.log("===       Exercițiul 2     ===");
console.log("===============================");
function suma(a, b) {
  return a + b;
}
let rezultat = suma(4, 6);
console.log(`Suma celor doua numere este ${rezultat}`);
console.log("===============================");
console.log("===       Exercițiul 3     ===");
console.log("===============================");
function diferenta(a, b) {
  return a - b;
}
let diferentaNr = diferenta(10, 4);
console.log(`Diferenta numerelor este ${diferentaNr}`);

console.log("===============================");
console.log("===       Exercițiul 4     ===");
console.log("===============================");

function salutLume(nume) {
  console.log(`Buna ziua ${nume}! Ce mai faci?`);
}
salutLume("Ionut!");

console.log("===============================");
console.log("===       Exercițiul 5     ===");
console.log("===============================");

// function esteMajor(nume, varsta) {
//   if (varsta >= 18) {
//     console.log(`${nume} este major. Are varsta de ${varsta} ani!`);
//   } else {
//     console.log(`${nume} nu este major. Are varsta de ${varsta} ani!`);
//   }
// }

// esteMajor("Ionut", 21);

console.log("===============================");
console.log("===       Exercițiul 6     ===");
console.log("===============================");

function esteMajor(nume, varsta) {
  if (varsta >= 18) {
    return `${nume} este major. Are ${varsta} ani.`;
  } else {
    return `${nume} nu este major. Are ${varsta} ani.`;
  }
}

let mesaj = esteMajor("Ionut", 21);
console.log(mesaj);

console.log("===============================");
console.log("===       Exercițiul 7     ===");
console.log("===============================");

const aduna = (a, b) => a + b;
const salut = (nume) => `salut,${nume}`;
const esteMajor = (varsta) => varsta >= 18;

const produs = (a, b) => {
  let rezultat = a * b;
  return rezultat;
};
