// # SEQUENTIAL ALGORITHMIC CHALLENGES

// ## CHALLENGE 1: Number Relations
// Create a program takes a numeric value from the user and displays:
// 1. In a single message, a sequence of text containing: the previous number, the given number, and the next number (e.g., 5 => "4, 5, 6").
// 2. The opposite of the number (e.g., 5 => "the opposite of 5 is -5", -3 => "the opposite of -3 is 3").
// 3. The remainder of the division by 2 (e.g., 5 => "the remainder of 5 divided by 2 is 1").
// 4. Number 2 raised to the power of the given value (e.g., 3 => "2 to the power of 3 is 8").

// **Example**
// ```
// Input: 5

// Output:
//     4, 5, 6
//     The opposite of 5 is -5
//     The remainder of 5 divided by 2 is 1
//     2 to the power of 5 is 32
// ```

const input = prompt("introduceti un numar:");
const number = Number(input);

if (isNaN(number)) {
  console.log("Va rugam introduceti un numar corect!");
} else {
  console.log(
    `Numerele cerute sunt: ${number - 1}, ${number} si ${number + 1} `
  );
}
console.log(`Numarul opus al numarului ${number} este ${-number}`);

const reminder = number % 2;
console.log(`Restul impartirii numarului ${number} la 2 este: ${reminder}`);

const power = number ** 2;
console.log(`Valoarea numarului ${number} ridicat la patrat este ${power}!`);

// ## CHALLENGE 2: Basic Arithmetic Operations
// The user enters two numeric values. The program displays:
// 1. Their sum,
// 2. Their difference,
// 3. Their product,
// 4. Their division,
// 5. Their arithmetic mean,
// 6. The remainder of the division of the first number by the second,
// 7. The first number raised to the power of the second.

// **Example**
// ```
// Input:
//     First number: 4
//     Seond number: 2

// Output:
//     Sum: 6
//     Difference: 2
//     Product: 8
//     Quotient: 2
//     Arithmetic Mean: 3
//     Remainder: 0
//     4 to the power of 2 is 16
// ```

const firstInput = prompt("Introduceti primul numar!");
const firstNumber = Number(firstInput);
const secondInput = prompt("Introduceti al doilea numar!");
const secondNumber = Number(secondInput);

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("Va rugam introduceti 2 numere corecte!");
} else {
  let sum = firstNumber + secondNumber;
  console.log(`Suma celor doua numere este ${sum}`);
  let difference = firstNumber - secondNumber;
  console.log(`Diferenta celor doua numere este ${difference}`);

  let product = firstNumber * secondNumber;
  console.log(`Produsul celor doua numere este ${product}`);

  let division = firstNumber / secondNumber;
  console.log(`Rezultatul impartirii celor doua numere este ${division}`);

  let arithmetic = (firstNumber + secondNumber) / 2;
  console.log(`Media aritmetica a celor doua numere este ${arithmetic}`);

  let firstReminder = firstNumber % secondNumber;
  console.log(
    `Restul impartirii primului nr la al doilea numar este ${firstReminder}`
  );

  let powerOfTwoNumbers = firstNumber ** secondNumber;
  console.log(
    `Rezultatul ridicarii primului nr la al doilea nr este ${powerOfTwoNumbers}`
  );
}

// ## CHALLENGE 3: Final Grade Calculation
// A student receives three grades. The program calculates and displays the final average.

// **Example**
// ```
// Input:
//     First grade: 7.5
//     Second grade: 8.5
//     Third grade: 9.5

// Output:
//     Final grade: 8.5
// ```

const firstGrade = 7.5;
const secondGrade = 8.5;
const thirdGrade = 9;

const finalGrade = (firstGrade + secondGrade + thirdGrade) / 3;
console.log(`Media finala a studentului este ${finalGrade.toFixed(2)}`);

// ## CHALLENGE 4: Next Term in Arithmetic Progression
// The user enters two numbers in an arithmetic sequence. The program calculates and displays the next number in the sequence.

// **Example**
// ```
// Input:
//     First number: 3
//     Second number: 6

// Output:
//     The next number in the sequence is: 9
// ```

const rata = secondNumber - firstNumber;
const nextNumber = secondNumber + rata;
console.log(
  `Progresia aritmetica a numerelor este: ${firstNumber} , ${secondNumber} , ${nextNumber}`
);

// ## CHALLENGE 5: Currency Conversion
// The user enters an amount in one currency and an exchange rate. The program calculates and displays the converted amount.

// **Example**
// ```
// Input:
//     Amount: 100
//     Exchange rate: 4.5

// Output:
//     Converted amount: 450
// ```

const euro = 450;
const exchangeRate = 1.2;

if (isNaN(euro) || isNaN(exchangeRate)) {
  console.log("Introduceti va rog valorile corecte!");
} else {
  const lei = euro * exchangeRate;
  console.log(`Valoarea in lei dupa cursul euro de azi este: ${lei}`);
}

// ## CHALLENGE 6: Dice Roll Simulation
// The program generates and displays a random number between 1 and 6, simulating the roll of a six-sided die.

// **Example**
// ```
// Input:
//     - no input required

// Output:
//     You rolled: 4
// ```

const dice = Math.floor(Math.random() * 6) + 1;
console.log(`Zarul are valoarea: ${dice}`);
