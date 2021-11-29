// La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.

// les éléments d'indice paire
let numbers = [1, 2, 3, 5];

let x = numbers.filter((el, i) => !(i % 2));
console.log(x);

// name <=5

let users = [{ name: 'mohamed' }, { name: 'ady' }, { name: 'salah' }];
let y = users.filter((el) => el.name.length <= 5);
console.log(y);
