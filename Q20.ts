// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Create objects representing countries
let countries: {
  name: string;
  capital: string;
  population: number;
  language: string;
}[] = [
  {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    language: "English",
  },
  {
    name: "France",
    capital: "Paris",
    population: 65273511,
    language: "French",
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: 126476461,
    language: "Japanese",
  },
  {
    name: "Brazil",
    capital: "Brasília",
    population: 212559417,
    language: "Portuguese",
  },
  {
    name: "India",
    capital: "New Delhi",
    population: 1380004385,
    language: "Hindi, English",
  },
];

// Print information about each country
console.log("Information about Countries:");
countries.forEach((country) => {
  console.log(`
        Country: ${country.name}
        Capital: ${country.capital}
        Population: ${country.population}
        Language: ${country.language}
    `);
});
