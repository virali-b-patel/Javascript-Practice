var testArray = [0, 1, 2, 3, 4, 5, 6, 7];
// console.log(testArray.fill("empty", 3, 6));

const myNumber = [10, 15, 20, 25, 30, 35, 40, 45];
const result = myNumber.filter((num) => num != 45);
const resultTwo = myNumber.filter((num) => num < 35);
console.log(result);
console.log(resultTwo);

var users = ["virali", "vijay", "viru", "viju", "v2", "baby"];
console.log(users.slice(1, 3));
console.log(users.slice(3));
users.splice(1, 3, "VIRUVIJAY", "viruvijay");
console.log(users);
