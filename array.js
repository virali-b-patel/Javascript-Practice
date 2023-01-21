var countries = ["India", "USA", "NewZealand", "England"];

var states = new Array("Gujarat", "Delhi", "Maharashtra", "Rajsthan");
console.log(states);
console.log(states[1]);
console.log(states.length);
states[3] = "Mumbai";
states[0] = "MP";
console.log(states);

var user = ["virali", "virali@xyz", "4", "1312", true];
console.log(user);

user.pop();
user.pop();
console.log(user);
user.unshift("New Value");
console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("4")); //confusion on this line
console.log(user.indexOf("virali"));
console.log(user.indexOf("vijay"));
console.log(Array.from("virali"));
