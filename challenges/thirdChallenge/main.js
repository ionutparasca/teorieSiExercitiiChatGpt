// ITERATION FLOW CHALLENGES
// CHALLENGE 1: Count to N
// Write a program that takes a positive number as input and counts from 1 up to that number, displaying each value along the way.

const input = prompt("Introduceți un număr pozitiv:");
const option = Number(input);

if (isNaN(option) || option < 1) {
  console.log("Introduceți un număr valid și pozitiv!");
} else {
  for (let i = 1; i <= option; i++) {
    console.log(`Afișează: ${i}`);
  }
}

// CHALLENGE 2: Count to N (comma-separated)
// Write a program that takes a positive integer as input and prints the numbers from 1 to that number in a single line, separated by commas.

const input1 = prompt("Introduceți un număr pozitiv!");
const option1 = Number(input1);

if (isNaN(option1) || option1 < 1) {
  console.log("Introduceți un număr pozitiv!");
} else {
  let rezultat = "";

  for (let i = 1; i <= option1; i++) {
    rezultat += i;
    if (i < option1) {
      rezultat += ", ";
    }
  }

  console.log(`Numerele sunt: ${rezultat}`);
}
// a doua varianta !!!!

if (isNaN(option1) || option1 < 1) {
  console.log("introduceti un numar pozitiv!");
} else {
  const numbers = [];
  for (let i = 1; i <= option1; i++) {
    numbers.push(i);
  }
  console.log(`Numerele sunt : ${numbers.join(", ")}`);
}

// CHALLENGE 3: Count Count Between Two Numbers (comma-separated)
// Write a program that takes two positive integers as input and prints the numbers from the smaller number to the larger number in a single line, separated by commas.

const input2 = prompt("introduceti un numar pozitiv!");
const option2 = Number(input2);
const input3 = prompt("introduceti un numar pozitiv!");
const option3 = Number(input3);

if (isNaN(option2) || isNaN(option3) || option2 < 1 || option3 < 1) {
  console.log("introduceti un numar pozitiv!");
} else {
  let min;
  let max;

  if (option2 < option3) {
    min = option2;
    max = option3;
  } else {
    min = option3;
    max = option2;
  }
  let rezultat1 = "";

  for (let i = min; i <= max; i++) {
    rezultat1 += i;

    // Adăugăm virgulă doar dacă nu e ultimul număr
    if (i < max) {
      rezultat1 += ", ";
    }
  }

  console.log(`Numerele sunt: ${rezultat1}`);
}

//  A doua varianta !!!!

if (isNaN(option2) || isNaN(option3) || option2 < 1 || option3 < 1) {
  console.log("Introduceți două numere pozitive valide!");
} else {
  const min = Math.min(option2, option3);
  const max = Math.max(option2, option3);
  let rezultat2 = "";

  for (let i = min; i <= max; i++) {
    rezultat2 += i;
    if (i < max) {
      rezultat2 += ", ";
    }
  }

  console.log(`Numerele sunt: ${rezultat2}`);
}
