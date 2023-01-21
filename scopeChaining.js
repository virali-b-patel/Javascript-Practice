var name = "virali";
console.log("line 2", name);

function sayName() {
  var name = "V.B.Patel";
  console.log("line 6", name);

  sayNameTwo();
  function sayNameTwo() {
    console.log("line 10", name);
  }

  sayNameThree();
  function sayNameThree() {
    var name = "V.B.P";
    console.log("line 16", name);
  }
}
sayName();

var name = "viru";
function sayMe() {
  console.log("My Nickname is", name);
}
sayMe();
