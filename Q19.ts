// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Create an array of mountains
let mountainList: string[] = [
  "Mount Everest",
  "K2",
  "Nanga Parbat",
  "Himalaya",
  "Karakoram",
];

// Print the list of mountains
console.log("List of Mountains:");
mountainList.forEach((mountain) => {
  console.log(mountain);
});
