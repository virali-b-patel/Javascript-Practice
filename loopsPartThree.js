// const names = ["Amazon", "Facebook", "Instagram", "Youtube", "Netflix"];

// for (const v of names) {
//   console.log(v);
// }

// const symbols = {
//   yt: "Youtube",
//   ig: "Instagram",
//   fb: "Facebook",
//   lco: "LearnCodeOnline.in",
// };

// for (const v in symbols) {
//   console.log(symbols[v]);
//   // console.log(v);
// }

// for (const v in symbols) {
//   console.log(`Key is: ${v} and value is:${symbols[v]}`);
// }

const names = [
  "LearnCodeOnline",
  "Facebook",
  "Instagram",
  "Flipkart",
  "Twitter",
  "Youtube",
];

for (const n of names) {
  console.log(n);
}

const symbols = {
  LCO: "LearnCodeOnline",
  Fb: "Facebook",
  Ig: "Instagram",
  Fk: "Flipkart",
  Yt: "Youtube",
};

for (const n in symbols) {
  console.log(symbols[n]);
}

for (const n in symbols) {
  console.log(`Key is: ${n} and value is ${symbols[n]}`);
}
