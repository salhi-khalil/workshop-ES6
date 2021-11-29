// La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.

let numbers = [1, 2, 3, 5];

let x = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(x);


//
let users = [{ name: 'mohamed' }, { name: 'ady' }, { name: 'salah' }];

let x = users.reduce((accumulator, currentValue) => accumulator + currentValue.name, '');
console.log(x);
