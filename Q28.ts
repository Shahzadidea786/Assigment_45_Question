/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

const favoriteFruits: string[] = ["banana", "apple", "strawberry"];

if (favoriteFruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favoriteFruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favoriteFruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}

if (favoriteFruits.includes("orange")) {
  console.log("You really like oranges!");
} else {
  console.log("Oranges are not in your list of favorite fruits.");
}

if (favoriteFruits.includes("kiwi")) {
  console.log("You really like kiwis!");
} else {
  console.log("Kiwis are not in your list of favorite fruits.");
}
