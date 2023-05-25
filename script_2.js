let answer = prompt("Donne-moi un nombre");
let facto = 1;

for (let i = 1; i <= answer; i++) {
  facto = facto*i;
}

console.log(`Le factoriel de ${answer} est : ${facto}`);
