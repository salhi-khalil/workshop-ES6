// La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.

let names = ['mohamed', 'ady', 'salah'];

let a = names.map((el) => el.toUpperCase());
console.log(a);

// other exemple
let numbers = [1, 2, 3, 5];
//  chaque element du tableau =>> {key: value} ==> {num: element du tab}
let x = numbers.map((el) => {
  return { num: el };
});
console.log(x);

// les elements d'indice paires du tableau =>> {key: value} ==> {num: element du tab}
let numbers = [1, 2, 3, 5];

let x = numbers.map((el, i) => {
  return i % 2 ? { num: el } : el;
});
console.log(x);

// les elements d'indice paires du tableau =>> {key: value} ==> {num: element du tab}
let numbers = [1, 2, 3, 5];

let x = numbers.map((el, i) => {
  return !(i % 2) ? { num: el } : el;
});
console.log(x);
