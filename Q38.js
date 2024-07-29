"use strict";
/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three city-country pairs
const location1 = city_country("Lahore", "Pakistan");
const location2 = city_country("Tokyo", "Japan");
const location3 = city_country("New York", "USA");
// Print the values returned by the function
console.log(location1);
console.log(location2);
console.log(location3);
