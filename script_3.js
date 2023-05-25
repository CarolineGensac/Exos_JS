let rows = prompt("Donne-moi un nombre d'étages pour faire une pyramide");
let pyramid ='';

for (let i = 1; i <= rows; i++) {{
     pyramid = pyramid + ' ';
}

for (let k= 1; k<= i * 2 -1; k++){
  pyramid = pyramid + '#';
}

pyramid = pyramid + '\n';
}

console.log(pyramid);