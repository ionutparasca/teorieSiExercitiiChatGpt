console.log("Just checking...");
// Selectam elementele din DOM
const dateInput = document.querySelector(".my-date");
const button = document.querySelector(".check-btn");
const messageDiv = document.querySelector(".message");

// event pentru click pe buton

button.addEventListener("click", () => {
  const date = dateInput.value;
  messageDiv.innerHTML = "";

  if (date) {
    const p = document.createElement("p");
    p.textContent = `Ai introdus data: ${date}`;
    messageDiv.appendChild(p);
    // messageDiv.textContent = `Ai introdus data: ${date}`;
  } else {
    messageDiv.textContent = `Te rog introdu o data`;
    // messageDiv.textContent = `Te rog introdu o data`;
  }
});

// pentru o verificare a datei
let lastDate = "";

button.addEventListener("click", () => {
  const date = dateInput.value;

  if (!date) {
    messageDiv.textContent = `Te rog sa introduci o data!`;
    return;
  }
  if (date === lastDate) {
    messageDiv.textContent = `Aceeasi data a mai fost introdusa!`;
    return;
  }
  lastDate = date;
  const p = document.createElement("p");
  p.textContent = `Ai introdus data ${date}`;
  messageDiv.appendChild(p);
});
