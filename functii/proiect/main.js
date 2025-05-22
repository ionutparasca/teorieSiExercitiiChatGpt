console.log("just checking...");

// let nume = "ionut";
// let varsta = 33;
// let nota = 9.3;
// let esteStudent = true;

const oportunitati = (nume, varsta, nota, esteStudent) => {
  if (varsta >= 18) {
    console.log(`${nume} are drept de vot!`);
  } else {
    console.log(`${nume} nu are drept de vot!`);
  }

  if (nota <= 4) {
    console.log(`${nume} este repetent!`);
  } else if (nota <= 9) {
    console.log(`${nume} este premiant!`);
  } else {
    console.log(`${nume} este olimpic!`);
  }

  if (esteStudent && varsta >= 26) {
    console.log(`${nume} poate sa primeasca o reducere de 25%!`);
  } else {
    console.log(`${nume} nu poate sa primeasca reducere!`);
  }
};

oportunitati("Ionut", 33, 9, true);

console.log("===============================");
console.log("===       Exercițiul 2     ===");
console.log("===============================");

// let nume = "Ionut";
// let varsta = 33;
// let permis = true;
// let masina = Audi;

const conducator = (nume, varsta, permis, masina) => {
  if (varsta >= 18) {
    console.log(`${nume} este major si poate sa faca scoala de soferi!`);
  } else {
    console.log(
      `${nume} este minor. Trebuie sa fie major pentru a face scoala de soferi!`
    );
  }

  if (permis && masina) {
    console.log(
      `${nume} are permis ${permis} si are masina ${masina}. Poate sa mearga cu masina ${masina} la munca!`
    );
  } else {
    console.log(
      `${nume} Fie nu are permis fie nu are masina. Trebuie sa mearga cu autobuzul sau bicicleta!`
    );
  }
};

conducator("Ionut", 33, true, false);

const verifica = (nota) => {
  if (nota < 5) return "Respins";
  if (nota < 9) return "Admis";
  return "Excelent";
};
console.log(verifica(8));
