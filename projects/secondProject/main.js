console.log("Just checking...");

const optiuni = [
  { nume: "pisici", voturi: 5 },
  { nume: "caini", voturi: 10 },
  { nume: "pesti", voturi: 2 },
];

const voteaza = (numeOptiune) => {
  optiuni.forEach((opt) => {
    if (opt.nume === numeOptiune) {
      opt.voturi += 1;
    }
  });

  optiuni.sort((a, b) => b.voturi - a.voturi);
  console.clear();
  console.log("Clasament actual:");
  optiuni.forEach((opt) => {
    console.log(`${opt.nume}: ${opt.voturi} voturi`);
  });
};
const adaugaOptiune = (numeNou) => {
  // Verificăm dacă deja există
  const exista = optiuni.some(
    (opt) => opt.nume.toLowerCase() === numeNou.toLowerCase()
  );

  if (exista) {
    console.log(`⚠️ Opțiunea "${numeNou}" există deja!`);
    return;
  }

  // Adăugăm opțiunea nouă cu 0 voturi
  optiuni.push({ nume: numeNou.toLowerCase(), voturi: 0 });
  console.log(`✅ Opțiunea "${numeNou}" a fost adăugată!`);
};
adaugaOptiune("capre");
voteaza("capre");
voteaza("Capre");
voteaza("Pisici");
