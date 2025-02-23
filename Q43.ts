// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwich(...items: string[]): void {
  console.log("Sandwich Summary:");
  if (items.length === 0) {
    console.log("You ordered an empty sandwich. Are you sure?");
  } else {
    console.log(`You ordered a sandwich with: ${items.join(", ")}`);
  }
  console.log("Enjoy your sandwich!\n");
}

// Call the function three times with a different number of arguments
orderSandwich("Turkey", "Cheese", "Lettuce");
orderSandwich("Ham", "Tomato", "Mustard");
orderSandwich(); // Empty sandwich order
