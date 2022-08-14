var user = {
  firstName: "Virali",
  latName: "Patel",
  role: "Students",
  ID: "virali@xyz",
  loginCount: 30,
};
console.log(user);
console.log(user.firstName);
console.log(user["latName"]);

console.log(user.loginCount);
user.loginCount = 40;
console.log(user.loginCount);
console.table(user);
