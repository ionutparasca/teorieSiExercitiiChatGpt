// CHALLENGE 4: Count & Filter by 3 or 4 (comma-separated)
// Write a program that takes two positive integers as input and prints the numbers between them (inclusive) that are divisible by 3 or 4, in a single line, separated by commas.
console.log("just checking...");

const input = prompt("Introduceti un numar pozitiv!");
const option = Number(input);
const input1 = prompt("Intoduceti al doilea numar pozitiv!");
const option1 = Number(input1);

if (isNaN(option) || isNaN(option1) || option < 1 || option1 < 1) {
  console.log("intoduceti 2 numere pozitive!");
} else {
  let min, max;
  if (option < option1) {
    min = option;
    max = option1;
  } else {
    min = option1;
    max = option;
  }
  let rezultat = "";
  for (let i = min; i <= max; i++) {
    if (i % 3 === 0 || i % 4 === 0) {
      rezultat += i;
      let urmatorul = false;
      for (let j = i; j <= max; j++) {
        if (j % 3 === 0 || j % 4 === 0) {
          urmatorul = true;
          break;
        }
      }
      if (urmatorul) {
        rezultat += ", ";
      }
    }
  }
  console.log(`Numerele divizibile cu 3 sau 4 sunt: ${rezultat}`);
}

// CHALLENGE 5: FizzBuzz
// Write a program that prints the numbers from 1 to a given positive integer. However, for multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for numbers that are multiples of both 3 and 5, print "FizzBuzz".

const input2 = prompt("Introduceti un numar pozitiv!");
const option2 = Number(input2);

if (isNaN(option2) || option2 < 1) {
  console.log("introduceti un nr real pozitiv!");
} else {
  for (let i = 1; i <= option2; i++) {
    if ((i % 3 === 0) & (i % 5 === 0)) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
