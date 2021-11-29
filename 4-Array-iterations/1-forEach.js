// La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.

let names = ['mohamed', 'ady', 'salah'];
let capital = [];
let x = names.forEach((el) => {
  let a = el.toUpperCase();
  capital.push(a);
});
console.log(capital);
