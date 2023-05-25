const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("********** ceux nés dans les années 70 :");
entrepreneurs.forEach((data) => {
  if (data.year >= 1970 && data.year < 1980) {
    console.log(data.first, data.last);
  }
});

console.log("**********affichons les prénoms + noms :");
entrepreneurs.forEach((names) => {
console.log(names.first, names.last);
});

console.log("**********quel age ont-ils ojd? :");
const currentYear = 2023
entrepreneurs.forEach((age) => {
  const agenow = currentYear - age.year;
    console.log(`${age.first} ${age.last} a ${agenow} ans`);
});

// console.log("********** trions par ordre alphabetique :");
// entrepreneurs.sort(function (name, lastname){

// console.log(`${name.first}, ${lastname.last}`)
// });

console.log("********** Trions par ordre alphabétique :");
entrepreneurs.sort(function (a, b) {
  const nameA = a.first.toLowerCase(); // Convertit le prénom en minuscules pour une comparaison insensible à la casse
  const nameB = b.first.toLowerCase();

  if (nameA < nameB) {
    return -1; // Retourne une valeur négative si nameA est inférieur à nameB
  }
  if (nameA > nameB) {
    return 1; // Retourne une valeur positive si nameA est supérieur à nameB
  }
  return 0; // Retourne 0 si les deux prénoms sont égaux
});

entrepreneurs.forEach(function (entrepreneur) {
  console.log(`${entrepreneur.first} ${entrepreneur.last}`);
});

// console.log("********** Trions les prénoms par ordre alphabétique :");
// entrepreneurs.sort(function (a, b) {
//   return a.first.localeCompare(b.first);
// });

// entrepreneurs.forEach(function (entrepreneur) {
//   console.log(`${entrepreneur.first} ${entrepreneur.last}`);
// });
