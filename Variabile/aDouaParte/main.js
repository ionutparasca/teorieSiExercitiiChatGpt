console.log("===============================");
console.log("===       Exercițiul 1     ===");
console.log("===============================");

let nume = "Ionut";
const varsta = 33;
let esteMajor = true;

let mesaj = `Numele meu este : ${nume} si am varsta de ${varsta} ani. Si ${
  esteMajor ? "sunt major" : "nu sunt "
}!`;

console.log(mesaj);

console.log("===============================");
console.log("===       Exercițiul 2     ===");
console.log("===============================");

let difAni = 2025 - varsta;
console.log(`Diferenta de varsta este  ${difAni}!`);

if (varsta >= 18) {
  console.log(`${nume} este major si poate vota!`);
} else {
  console.log(`${nume} nu este major si nu poate vota!`);
}

let esteStudent = false;

if ((esteStudent = true && varsta < 26)) {
  console.log(`${nume} este student si poate primi reducere!`);
} else {
  console.log(`${nume} nu este student si trebuie sa plateasca pretul intreg!`);
}

console.log(`${varsta === 18}`);
console.log(`${nume === "Andrei"}`);
