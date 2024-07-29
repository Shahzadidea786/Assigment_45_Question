/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/

let alienColor: string = "green";

// Version that runs the if block
if (alienColor === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else {
  console.log("Oops! The alien isn't green, but you still earned 10 points.");
}

let aliencolor: string = "red";

// Version that runs the else block
if (aliencolor === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else {
  console.log("Oops! The alien isn't green, but you still earned 10 points.");
}
