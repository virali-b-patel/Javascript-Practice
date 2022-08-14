var authenticated = true;
if (authenticated) {
  console.log("Show sighout button");
} else {
  console.log("Show login option");
}

var authenticated = false;
if (authenticated) {
  console.log("Show signout button");
} else {
  console.log("Show login option");
}

var authenticated = true;
authenticated ? console.log("Signout Button") : console.log("LOGIN");

var authenticated = false;
authenticated ? console.log("Signout Button") : console.log("LOGIN");
