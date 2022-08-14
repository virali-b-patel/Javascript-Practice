// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

const myStates = [
  "Gujarat",
  "Delhi",
  "Maharastra",
  "Rajasthan",
  1947,
  "UttarPradesh",
];

// for (let i = 0; i <= myStates.length; i++) {
// console.log(i);
// if (typeof myStates[i] !== "string") continue;
// if (typeof myStates[i] !== "string") break;
// if (typeof myStates[i] === "string") continue;
// if (typeof myStates[i] === "string") break;
// console.log(myStates[i]);
// }

// while loop
let i = 0;
while (i < myStates.length) {
  console.log(myStates[i]);
  i++;
}

let a = 0;
while (a < 10) {
  console.log(a);
  a++;
}

// Do while loop
let j = 0;
do {
  console.log(myStates[j]);
  j++;
} while (j < myStates.length);

let v = 0;
do {
  console.log(v);
  v++;
} while (v < 10);
