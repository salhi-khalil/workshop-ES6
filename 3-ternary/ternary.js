// if else
let age = 5;


let test = (n) => {
  if (n < 18) {
    return "teenager";
  } else return "adult";
};
console.log(test(age));


let test1 = (n) => {
  return n < 18 ? "teenager" : "adult";
};
console.log(test1(age));

//  if     else if      else
let age = 25;

let test = (n) => {
  if (n < 18) {
    return "teenager";
  } else if (n < 35) return "young adult";
  else return "adult";
};
// console.log(test(age))
let test1 = (n) => {
  return n < 18 ? "teenager" : n < 35 ? "young adult" : "adult";
};
console.log(test1(age));
