"use strict";
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let car = "subaru";
let age = 5;
let isSunny = true;
let fruit = "apple";
let language = "typescript";
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car === "subaru");
// Test 2
console.log("Is age > 3? I predict True.");
console.log(age > 3);
// Test 3
console.log("Is isSunny AND age < 10? I predict True.");
console.log(isSunny && age < 10);
// Test 4
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit !== "banana");
// Test 5
console.log("Is language == 'typescript'? I predict True.");
console.log(language === "typescript");
// Test 6
console.log("Is car == 'honda'? I predict False.");
console.log(car === "honda");
// Test 7
console.log("Is age < 2? I predict False.");
console.log(age < 2);
// Test 8
console.log("Is isSunny OR age > 10? I predict False.");
console.log(isSunny || age > 10);
// Test 9
console.log("Is fruit == 'orange'? I predict False.");
console.log(fruit === "orange");
// Test 10
console.log("Is language != 'javascript'? I predict False.");
console.log(language !== "javascript");
