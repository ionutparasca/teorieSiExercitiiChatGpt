console.log("===============================");
console.log("===       Lectia 3     ===");
console.log("===============================");

let hobbyuri: string[] = ["muzica", "fotbal", "coding"];
let varste: number[] = [18, 25, 33];

console.log(hobbyuri[2]);
console.log(varste[1]);
hobbyuri.push("citit");
console.log(hobbyuri);
hobbyuri.forEach((hobby) => {
  console.log("➡️", hobby);
});
console.log("===============================");
console.log("===       Exercitiul 4     ===");
console.log("===============================");

let animale: string[] = ["pisică", "câine", "papagal"];

console.log("Lista animalelor:", animale);
console.log("Primul animal:", animale[0]);
console.log("Avem câine?", animale.includes("câine") ? "Da" : "Nu");

animale.push("hamster");
console.log("După adăugare:", animale);

animale.pop();
console.log("După eliminare:", animale);

console.log("Toate animalele:");
animale.forEach((animal) => {
  console.log("→", animal);
});
