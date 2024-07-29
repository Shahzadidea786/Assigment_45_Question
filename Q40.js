"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Function to show magicians
function showmagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
const magicianNames = [
    "David Copperfield",
    "Houdini",
    "Derren Brown",
    "Penn & Teller",
];
// Call the function to print the names of magicians
showmagicians(magicianNames);
