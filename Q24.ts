/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/

// Passing Version:

let alien_color: string = "green";

// Version that passes the if test
if (alien_color === "green") {
  console.log("Congratulations! You just earned 5 points.");
}

// Failing Version

let alien_color1: string = "red";

// Version that fails the if test (no output)
if (alien_color1 === "green") {
  console.log("Congratulations! You just earned 5 points.");
}
