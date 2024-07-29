// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Function to show magicians
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Function to make magicians great
function make_great(magicians: string[]): string[] {
  return magicians.map((magician) => `${magician} the Great`);
}

// Array of magician's names
const originalMagicians: string[] = [
  "David Copperfield",
  "Houdini",
  "Derren Brown",
  "Penn & Teller",
];

// Call make_great with a copy of the original array
const modifiedMagicians: string[] = make_great([...originalMagicians]);

// Call show_magicians to show the original array
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Call show_magicians to show the modified array
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
