"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList4 = ["Shanzy", "Esha", "Hania", "Rabia", "Saira"];
// Print a message indicating the number of people invited to dinner
console.log(`Inviting ${guestList4.length} people to dinner.\n`);
// Print the original guest list
console.log("Original Guest List:", guestList4);
// Print a message that you can invite only two people for dinner
console.log("\nDue to a table issue, I can only invite two people for dinner.");
// Remove guests until only two names remain in the list
while (guestList4.length > 2) {
    const removedGuest = guestList4.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
// Print a message to each of the two people still on your list
guestList4.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
// Print the final number of people invited to dinner
console.log(`\nInviting ${guestList4.length} people to dinner.\n`);
// Print the final guest list to make sure it's empty
console.log("Final Guest List:", guestList4);
