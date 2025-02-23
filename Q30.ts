/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

const userNames: string[] = [];

if (userNames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const userName of userNames) {
    if (userName.toLowerCase() === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${userName}, thank you for logging in again.`);
    }
  }
}
