console.log("Just checking...");

const elevi = [
  { nume: "Ana", note: [5, 8, 10, 7] },
  { nume: "Ion", note: [6, 8, 3, 10] },
  { nume: "Maria", note: [8, 7, 10, 3] },
  { nume: "Alex", note: [5, 8, 10, 7] },
];

let sumaTotala = 0;
let celMaiBun = { nume: "", media: 0 };

elevi.forEach((elev) => {
  let suma = 0;
  elev.note.forEach((nota) => {
    suma += nota;
  });
  let media = suma / elev.note.length;
  sumaTotala += media;
  let status = "";

  if (media < 5) {
    status = "Repetent";
  } else if (media < 9) {
    status = "Admis";
  } else {
    status = "Premiant";
  }
  console.log(
    `Elevul ${elev.nume} are media ${media.toFixed(2)} si este ${status}!`
  );

  if (media > celMaiBun.media) {
    celMaiBun.nume = elev.nume;
    celMaiBun.media = media;
  }
});
const mediaClasa = sumaTotala / elevi.length;
console.log(`\nMedia generală a clasei este: ${mediaClasa.toFixed(2)}`);
console.log(
  `Cel mai bun elev este ${celMaiBun.nume} cu media ${celMaiBun.media.toFixed(
    2
  )}`
);
