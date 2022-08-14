const name = ["Amazon", "Facebook", "Instagram", "Youtube", "Netflix"];

for (const v of names) {
  console.log(v);
}

const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  lco: "LearnCodeOnline.in",
};

for (const v in symbols) {
  console.log(symbols[v]);
}

for (const v in symbols) {
  console.log(`Key is: ${n} and value is:${symbols[v]}`);
}
