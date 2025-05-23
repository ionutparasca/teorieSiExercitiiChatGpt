console.log("Just checking...");

const form = document.getElementById("text-form");
const input = document.getElementById("type-text");
const messageDiv = document.querySelector(".message");

let lastText = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  messageDiv.innerHtml = "";

  if (!text) {
    messageDiv.textContent = `Te rog intodu un text!`;
    return;
  }
  if (text === lastText) {
    messageDiv.textContent = `Ati introdus acelasi text!`;
    return;
  }

  lastText = text;
  const p = document.createElement("p");
  p.textContent = `Ai introdus urmatorul text ${text}!`;
  messageDiv.appendChild(p);
  form.reset();
});
