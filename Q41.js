"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Function to show magicians
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Function to make magicians great
function makegreat(magicians) {
    return magicians.map((magician) => `${magician} the Great`);
}
// Array of magician's names
const magicianNames1 = [
    "David Copperfield",
    "Houdini",
    "Derren Brown",
    "Penn & Teller",
];
// Call make_great to modify the array
const greatMagicians = makegreat(magicianNames1);
// Call show_magicians to see the modified list
showMagicians(greatMagicians);
