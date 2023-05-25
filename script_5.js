const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("********* Livres empruntés au moins une fois :");
books.forEach((rent) => {
  if (rent.rented > 0) {
    console.log(rent.title);
  }
});

console.log("********* Livre le plus emprunté :");
// Trier les livres par ordre décroissant du nombre d'emprunts
books.sort(function (a, b) {
  return b.rented - a.rented;
});
// Afficher le premier livre (le plus emprunté)
console.log(books[0].title);


console.log("********* Livre le moins emprunté :");
// Trier les livres par ordre décroissant du nombre d'emprunts
books.sort(function (a, b) {
  return a.rented - b.rented;
});
// Afficher le premier livre (le plus emprunté)
console.log(books[0].title);


console.log("********* Trouver le livre avec l'ID 873495 :");

let bookId = 873495;

// Rechercher le livre avec l'ID spécifié
let foundBook = books.find((book) => book.id === bookId);

// Vérifier si le livre a été trouvé et l'afficher
if (foundBook) {
  console.log(`Titre: ${foundBook.title}`);
  console.log(`ID: ${foundBook.id}`);
  console.log(`Nombre d'emprunts: ${foundBook.rented}`);
} else {
  console.log(`Aucun livre trouvé avec l'ID ${bookId}`);
}

console.log("********* Supprimer le livre avec l'ID 133712 :");
let bookId2 = 133712;
// Filtrer les livres pour exclure celui avec l'ID spécifié
let filteredBooks = books.filter((book) => book.id !== bookId2);
// Vérifier si des livres ont été filtrés
if (filteredBooks.length < books.length) {
  console.log(`Le livre avec l'ID ${bookId2} a été supprimé avec succès.`);
} else {
  console.log(`Aucun livre trouvé avec l'ID ${bookId2}. Aucune suppression effectuée.`);
}


console.log("********* ordre alpha sans le 133712:");
let filteredBooks2 = books.filter((book) => book.id !== 133712);
filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
filteredBooks.forEach((book) => {
  console.log(book.title);
});
