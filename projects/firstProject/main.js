console.log("just checking...");

let cosCumparaturi = [
  { nume: "lapte", pret: 3.5 },
  { nume: "oua", pret: 4.5 },
  { nume: "bacon", pret: 2 },
  { nume: "paine", pret: 3 },
  { nume: "geaca", pret: 45 },
  { nume: "blugi", pret: 35 },
];
cosCumparaturi.push({ nume: "vin", pret: 25 });
console.log(cosCumparaturi.length);

const calculeazaTotal = (cosCumparaturi) => {
  let total = 0;

  cosCumparaturi.forEach((produs) => {
    total += produs.pret;
  });
  let discount = 0;
  if (total >= 100) {
    discount = total * 0.1;
  }
  let totalFinal = total - discount;

  console.log(`Total: ${total} lei`);
  console.log(`Discount: ${discount} lei`);
  console.log(`Total final: ${totalFinal} lei`);
};
calculeazaTotal(cosCumparaturi);

cosCumparaturi.forEach((produs, index) => {
  console.log(`Produsul cu indexul ${index} este ${produs.nume}`);
});
