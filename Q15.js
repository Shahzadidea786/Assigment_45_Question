"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
// Original guest list
let guestList2 = ["Shanzy", "Esha", "Hania"];
// Print initial invitation messages
for (let i = 0; i < guestList2.length; i++) {
    console.log(`Dear ${guestList2[i]},\nYou are invited to dinner. It would be an honor to have you join us.`);
}
// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table!");
// Add new guests
let newGuest1 = "Rabia";
let newGuest2 = "Saira";
let newGuest3 = "Hira";
// Add one new guest to the beginning of the array
guestList2.unshift(newGuest1);
// Add one new guest to the middle of the array
let middleIndex = Math.floor(guestList2.length / 2);
guestList2.splice(middleIndex, 0, newGuest2);
// Use append() (push in JavaScript/TypeScript) to add one new guest to the end of the list
guestList2.push(newGuest3);
// Print new set of invitation messages
for (let i = 0; i < guestList2.length; i++) {
    console.log(`Dear ${guestList2[i]},\nYou are invited to dinner. It would be an honor to have you join us.`);
}
