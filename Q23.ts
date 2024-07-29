/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

let string1: string = "hello";
let string2: string = "world";
let number1: number = 10;
let number2: number = 5;
let array: number[] = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 === string2);

console.log("Are string1 and string2 not equal? I predict True.");
console.log(string1 !== string2);

// Tests using the lower case function
console.log("Is string1 in lowercase equal to 'hello'? I predict True.");
console.log(string1.toLowerCase() === "hello");

// Numerical tests
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);

console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log(
  "Is number1 greater than 5 and number2 less than 8? I predict True."
);
console.log(number1 > 5 && number2 < 8);

console.log(
  "Is number1 less than 8 or number2 greater than 10? I predict True."
);
console.log(number1 < 8 || number2 > 10);

// Test whether an item is in an array
console.log("Is number1 in the array? I predict True.");
console.log(array.includes(number1));

// Test whether an item is not in an array
console.log("Is number2 not in the array? I predict True.");
console.log(!array.includes(number2));
