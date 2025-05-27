console.log("===============================");
console.log("===       Lectia 2     ===");
console.log("===============================");

const nota: number = 8;
if (nota >= 8) {
  console.log("Excelent!");
} else if (nota >= 6) {
  console.log("Admis!");
} else {
  console.log("Respins!");
}
console.log("===============================");
console.log("===       Exercitiul 2     ===");
console.log("===============================");

const esteLogat: boolean = true;
const mesaj = esteLogat ? "Bine ai revenit!" : "Te rog sa te autentifici!";
console.log(mesaj);

console.log("===============================");
console.log("===       Exercitiul 3     ===");
console.log("===============================");

const varsta: number = 20;

if (varsta >= 18) {
  console.log("Esti major!");
} else {
  console.log("Esti minor!");
}

const conectat: boolean = false;
const mesaj1 = conectat
  ? "Esti conectat!Bine ai venit!"
  : "Esti offline. Trebuie sa te conectezi!";
console.log(mesaj1);
