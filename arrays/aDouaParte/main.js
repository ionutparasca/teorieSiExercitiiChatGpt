console.log("===============================");
console.log("===       Exercițiul 1     ===");
console.log("===============================");

let culori = ["rosu", "verde", "albastru"];
console.log(culori[0]);
console.log(culori[culori.length - 1]);

let legume = ["morcov", "castravete", "rosie"];
legume[0] = "patrunjel";
console.log(legume);
legume.push("usturoi");
legume.unshift("ceapa");
console.log(legume);

console.log("===============================");
console.log("===       Exercițiul 2     ===");
console.log("===============================");

let animale = ["caine", "pisica", "gaina", "cocos"];
animale.push("iepure");
animale.unshift("caprioara");
console.log(animale);
console.log(animale.length);
animale.pop(); // scoate primul
animale.shift(); // scoate ultimul
console.log(animale);

animale.forEach((animal, index) => {
  console.log(`Animalul cu indexul ${index} este ${animal}`);
});

console.log("===============================");
console.log("===       Exercițiul 3     ===");
console.log("===============================");

let salarii = [1000, 900, 1500, 1300];

let total = 0;
salarii.forEach((salar) => {
  total += salar;
});
console.log(`Suma totala a salariilor este`, total);

let note = [10, 5, 8, 3, 7];
let notaFinala = 0;

note.forEach((nota) => {
  notaFinala = notaFinala + nota;
});
let mediaGenerala = notaFinala / note.length;
console.log(`Media generala este:`, mediaGenerala);
console.log("===============================");
console.log("===       Exercițiul 4     ===");
console.log("===============================");

let numere = [1, 2, 3];
let dublate = numere.map((numar) => numar * 2);
console.log(dublate);

let noteMari = note.filter((n) => n > 5);
console.log(noteMari);
console.log(`Media generala este:`, mediaGenerala);

console.log("===============================");
console.log("===       Exercițiul 5     ===");
console.log("===============================");

let oameni = ["Ion", "Maria", "George"];
let cauta = oameni.find((nume) => nume.startsWith("M"));
console.log(cauta); // Maria
