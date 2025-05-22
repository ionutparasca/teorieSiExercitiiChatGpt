console.log("===============================");
console.log("===       Exercițiul 1     ===");
console.log("===============================");

let fructe = ["mar", "banana", "pere"];
console.log(fructe[1]);

fructe[1] = "kiwi"; // modifică "banana"
fructe.push("strugure"); // adaugă la final
fructe.unshift("lamaie"); // adaugă la început

console.log(fructe);

fructe.pop(); // șterge ultimul
fructe.shift(); // șterge primul

console.log(fructe.length); // câte elemente are

console.log("===============================");
console.log("===       Exercițiul 2     ===");
console.log("===============================");

for (let i = 0; i < fructe.length; i++) {
  console.log(fructe[i]);
}

fructe.forEach((fruct) => {
  console.log("Fruct:", fruct);
});
console.log("===============================");
console.log("===       Exercițiul 2     ===");
console.log("===============================");

let note = [4, 8, 6, 9, 8, 10, 3];

note.forEach((nota) => {
  console.log("Nota este:", nota);
});

let suma = 0;
note.forEach((nota) => {
  suma += nota;
});
let media = suma / note.length;
console.log(`Media notelor este ${media}`);
