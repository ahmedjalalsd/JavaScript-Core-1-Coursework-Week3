// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function byHundred(num) {
  return num * 100;
}

let byhun = numbers.map(byHundred);
console.log(byhun);

let multi = numbers.map(function byHundred1(num) {
  return num * 100;
});

console.log(multi);

let byhun1 = numbers.map(function (num) {
  return num * 100;
});
console.log(byhun1);

let byhun2 = numbers.map((num) => {
  return num * 100;
});

console.log(byhun2);

let byhun3 = numbers.map((num) => num * 100);
console.log(byhun3);
