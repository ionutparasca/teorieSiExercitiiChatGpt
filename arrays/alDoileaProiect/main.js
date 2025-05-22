console.log("Just checking...");

const filme = [
  { titlu: "Inception", recenzii: [9, 8, 10, 9] },
  { titlu: "Twilight", recenzii: [4, 5, 6] },
  { titlu: "Interstellar", recenzii: [10, 9, 10, 10] },
  { titlu: "Shrek", recenzii: [7, 8, 7] },
];

const calculeazaMedia = (recenzii) => {
  return recenzii.reduce((s, r) => s + r, 0) / recenzii.length;
};

let celMaiBunFilm = { titlu: "", media: 0 };

filme.forEach((film) => {
  const media = calculeazaMedia(film.recenzii);

  let status = "";
  if (media < 6) {
    status = "Slab";
  } else if (media < 8.5) {
    status = "Bun";
  } else {
    status = "Excelent";
  }

  console.log(`${film.titlu} are media ${media.toFixed(2)} și este ${status}`);

  if (media > celMaiBunFilm.media) {
    celMaiBunFilm = { titlu: film.titlu, media };
  }
});

console.log(
  `\n🏆 Cel mai bun film este ${
    celMaiBunFilm.titlu
  } cu media ${celMaiBunFilm.media.toFixed(2)}`
);

const bune = filme.filter((f) => calculeazaMedia(f.recenzii) >= 7);
console.log(`🎬 Filme bune:`, bune.map((f) => f.titlu).join(", "));
