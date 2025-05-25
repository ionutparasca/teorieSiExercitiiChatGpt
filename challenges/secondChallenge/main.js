// DECISION FLOW CHALLENGES
// CHALLENGE 1: Number comparison
// Create a program that compares two numbers provided by the user and determines whether they are in ascending or descending order.

// Example 1
// Input: 5, 7
// Output: The numbers are in an ASCENDING ORDER

// Example 2
// Input: 7, 3
// Output: The numbers are in an DESCENDING ORDER

const firstInput = prompt("Introduceti primul numar!");
const firstNumber = Number(firstInput);
const secondInput = prompt("Introduceti al doilea numar!");
const secondNumber = Number(secondInput);

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("Introduceti va rog numerele corecte!");
} else if (firstNumber < secondNumber) {
  console.log(
    `Numerele sunt ${firstNumber} si ${secondNumber} si sunt in ordine crescatoare!`
  );
} else if (firstNumber > secondNumber) {
  console.log(
    `Numerele sunt ${firstNumber} si ${secondNumber} si sunt in ordine descrescatoare!`
  );
} else {
  console.log(`Numerele sunt ${firstNumber} si ${secondNumber} si sunt egale!`);
}

// CHALLENGE 2: Ordering two numbers
// Create a program that takes two numbers as input and displays them in an ascending order.

// Example 1
// Input: 5, 7
// Output: 5, 7
// Example 2
// Input: 7, 3
// Output: 3, 7

const input1 = prompt("Introduceti un numar valid!");
const number1 = Number(input1);
const input2 = prompt("Introduceti al doilea nr valid!");
const number2 = Number(input2);

// if (isNaN(number1) || isNaN(number2)) {
//   console.log("introduceti va rog doua numere valide!");
// } else if (number1 < number2) {
//   console.log(`Numerele în ordine crescătoare sunt: ${number1}, ${number2}!`);
// } else if (number1 > number2) {
//   console.log(`Numerele în ordine crescătoare sunt: ${number2}, ${number1}!`);
// } else {
//   console.log(`Numerele sunt ${number1} si ${number2}, sunt egale`);
// }

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("Vă rugăm introduceți două numere valide.");
} else {
  const min = Math.min(firstNumber, secondNumber);
  const max = Math.max(firstNumber, secondNumber);
  console.log(`Numerele în ordine crescătoare sunt: ${min}, ${max}`);
}

// CHALLENGE 3: Ordering three numbers
// Create a program that takes three numbers as input and displays them in an ascending order.

// Example 1
// Input: 5, 2, 7
// Output: 2, 5, 7
// Example 2
// Input: 7, 3, 1
// Output: 1, 3, 7

const input3 = prompt("Introduceți primul număr:");
const input4 = prompt("Introduceți al doilea număr:");
const input5 = prompt("Introduceți al treilea număr:");

const a = Number(input3);
const b = Number(input4);
const c = Number(input5);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Introduceți 3 numere valide!");
} else {
  let min, mid, max;

  if (a <= b && a <= c) {
    min = a;
    if (b <= c) {
      mid = b;
      max = c;
    } else {
      mid = c;
      max = b;
    }
  } else if (b <= a && b <= c) {
    min = b;
    if (a <= c) {
      mid = a;
      max = c;
    } else {
      mid = c;
      max = a;
    }
  } else {
    min = c;
    if (a <= b) {
      mid = a;
      max = b;
    } else {
      mid = b;
      max = a;
    }
  }

  console.log(`Numerele în ordine crescătoare sunt: ${min}, ${mid}, ${max}`);
}

// const number1 = Number(input1);
// const number2 = Number(input2);
// const number3 = Number(input3);

// if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
//   console.log("Introduceți trei numere valide!");
// } else {
//   const numbers = [number1, number2, number3];
//   numbers.sort((a, b) => a - b); // sortare numerică
//   console.log(`Numerele în ordine crescătoare sunt: ${numbers.join(', ')}`);
// }

// CHALLENGE 4: Odd or even
// Create a program that determines whether a given number is odd or even

// Example 1
// Input: 5
// Output: 5 is an odd number
// Example 2
// Input: 8
// Output: 8 is an even number

const input6 = prompt("intoduceti un nr valid!");
const number6 = Number(input6);

if (isNaN(number6)) {
  console.log("Intorduceti un numar valide!");
} else if (number6 % 2 === 0) {
  console.log(`Numarul ${number6} este numar par!`);
} else {
  console.log(`Numarul ${number6} este numar impar!`);
}

// CHALLENGE 4: Coin toss
// Create a program that simulates the flipping of a coin and displays the result: either Heads or Tails.

// Example 1

// Input: -

// Output: Heads
// Example 2

// Input: -

// Output: Tails

// const input7 = prompt("intorduceti un nr valdi!");
// const number7 = Number(input7);
// CHALLENGE 4: Dice game
// Create a program that simulates a dice roll game between two players. The program will ask for the players' names, roll the dice for each player, and then display the results.

// Example 1

// Input:
//     First player name: Ann
//     Second player name: Bob

// Output:
//     Ann rolls: 3
//     Bob rolls: 5
//     Bob wins!
// Example 2

// Input:
//     First player name: Ann
//     Second player name: Bob

// Output:
//     Ann rolls: 2
//     Bob rolls: 2
//     It's a tie!
// CHALLENGE 5: Guess the number
// Create a program that generates a random number between 1 and 3. The user is prompted to guess the number, and if they guess correctly, they win.

// Example 1 (user wins)

// Input:
//     Users' guess: 3

// Output:
//     You won!
// Example 2 (user loses)

// Input:
//     Users' guess: 3

// Output:
//     Wrong! The correct number was 1.
// CHALLENGE 6: Rock Scissors Paper generator
// Create a program that randomly generates one of the options of the rock-paper-scissors game.

// Example 1

// Input:
//     -

// Output:
//     Rock
// Example 2

// Input:
//     -

// Output:
//     Paper
