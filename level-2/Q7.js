//Use the countries object to print a country name, capital, populations and languages.
const countries = {
    Country1: {
      name: "Pakistan",
      capital: "Islamabad",
      population: 25000000,
      languages: ["Urdu", "English"],
    },
    Country2: {
      name: "India",
      capital: "New Delhi",
      population: 16789698,
      languages: ["Hindi", "English"],
    },
    Country3: {
      name: "Canada",
      capital: "Ottawa",
      population: 4034004540,
      languages: ["English", "French"],
    },
  };
  let { name, capital, population, languages } = countries;
  console.log(countries);