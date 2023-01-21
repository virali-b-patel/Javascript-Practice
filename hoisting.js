// function tipper(a) {
//   var bill = a;
//   console.log(bill + 5);
// }
// tipper("7");

//if you want to see a uper 1 to 5 lines code,you must comment out 9 to 13 lines code, then you can see a uper lines code.

// function tipper(a) {
//   var bill = parseInt(a);
//   console.log(bill + 5);
// }
// tipper("7");

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}
tipper("a");

sayName();
function sayName() {
  var name = "vijay";
  console.log(name);
}

bigTipper("10");
var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 20);
};
//Thus error comes because bigTipper is not a function (variable)
// From which Variable declarations are scanned and made undefined
