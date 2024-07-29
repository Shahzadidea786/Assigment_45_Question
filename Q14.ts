/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

// Original guest list
let guestList1: string[] = ["Shanzy", "Esha", "Hania"];

// Print initial invitation messages
for (let i = 0; i < guestList1.length; i++) {
  console.log(
    `Dear ${guestList1[i]},\n You are invited to dinner. It would be an honor to have you join us.`
  );
}

// Guest who can't make it
let guestCantMakeIt: string = "Esha";

// Print a statement about the guest who can't make it
console.log(`${guestCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
let newGuest: string = "Nida";
let indexOfGuestCantMakeIt: number = guestList1.indexOf(guestCantMakeIt);

if (indexOfGuestCantMakeIt !== -1) {
  guestList1[indexOfGuestCantMakeIt] = newGuest;
}

// Print second set of invitation messages
for (let i = 0; i < guestList1.length; i++) {
  console.log(
    `Dear ${guestList1[i]},\n You are  invited to dinner. It would be an honor to have you join us.`
  );
}
