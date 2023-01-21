// console.log(this);

// var user = {
//   firstName: "Virali",
//   courseCount: 4,
//   getCourseCount: function () {
//     console.log("Line 7", this);
//     function sayHello() {
//       console.log("Hello");
//       console.log("Line 10", this);
//     }
//     sayHello();
//   },
// };
// user.getCourseCount();

console.log(this);
var user = {
  firstName: "virali",
  lastname: "patel",
  courseCount: 5,
  getCourseCount: function () {
    console.log("Line 23", this);
    function sayHello() {
      console.log("Hello");
      console.log("Line 26", this);
    }
    sayHello();
  },
};
user.getCourseCount();
