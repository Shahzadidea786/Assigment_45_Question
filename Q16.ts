/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guestList3: string[] = ["Shanzy", "Esha", "Hania", "Rabia", "Saira"];

console.log("Original Guest List:", guestList3);

// Print a message that you can invite only two people for dinner
console.log(
  "\n Due to a table issue, I can only invite two people for dinner."
);

// Remove guests until only two names remain in the list
while (guestList3.length > 2) {
  const removedGuest = guestList3.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print a message to each of the two people still on your list
guestList3.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
});

// Remove the last two names from the list
guestList3.pop();
guestList3.pop();

// Print the final guest list to make sure it's empty
console.log("\nFinal Guest List:", guestList3);
