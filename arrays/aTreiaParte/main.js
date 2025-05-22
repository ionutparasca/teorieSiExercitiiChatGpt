console.log("Just checking...");

const nume = ["Ana", "Ionut", "Mihai", "Vasile"];
nume.forEach((nume) => {
  console.log("Salut", nume);
});

console.log("===============================");
console.log("===       Exercițiul 1     ===");
console.log("===============================");

const numere = [1, 2, 3, 4, 5, 6];
const nrDublate = numere.map((n) => n * 2);
console.log(nrDublate);

console.log("===============================");
console.log("===       Exercițiul 2     ===");
console.log("===============================");

const note = [4, 7, 9, 3];
const absolvire = note.filter((n) => n >= 5);
console.log(absolvire);

console.log("===============================");
console.log("===       Exercițiul 3     ===");
console.log("===============================");

const persoane = ["Ana", "Ion", "Maria"];
const gasit = persoane.find((nume) => nume.startsWith("M"));
console.log(gasit);

console.log("===============================");
console.log("===       Exercițiul 4     ===");
console.log("===============================");

const numere1 = [10, 20, 30];
const suma = numere1.reduce((total, valoare) => total + valoare, 0);
console.log(suma); // 60
