console.log("===============================");
console.log("===       First Project     ===");
console.log("===============================");

const nume: string = "Ionut";
const varsta: number = 33;
const areAbonament: boolean = true;

if (varsta >= 18 && areAbonament) {
  console.log(`Acces permis pentru ${nume}!`);
} else if (varsta < 18) {
  console.log(`${nume} este prea tanar pentru acces!`);
} else if (varsta >= 18 && !areAbonament) {
  console.log(
    `${nume} fie ese prea tanar sau nu are abonament ${areAbonament}!`
  );
} else {
  console.log(`${nume} nu are nici varsta necesara nici abonament!`);
}
