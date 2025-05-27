console.log("===============================");
console.log("===       Third Project     ===");
console.log("===============================");

let zile: number = 20;

const counterDiv = document.querySelector("#counter") as HTMLDivElement;
const plusBtn = document.querySelector("#plus") as HTMLButtonElement;
const minustBtn = document.querySelector("#minus") as HTMLButtonElement;

function actualizeazaContor() {
  counterDiv.innerText = `${zile} zile!`;
}
actualizeazaContor();

plusBtn.addEventListener("click", () => {
  zile++;
  actualizeazaContor();
});

minustBtn.addEventListener("click", () => {
  if (zile > 0) {
    zile--;
    actualizeazaContor();
  }
});
