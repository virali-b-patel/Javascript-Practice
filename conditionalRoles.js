// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete course
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "user";
switch (user) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("gets access to create/delete course");
    break;
  case "testprep":
    console.log("gets access to create/delete tests");
    break;
  case "user":
    console.log("gets access to consume content");
    break;
  default:
    console.log("Trial user");
    break;
}

// 1st - you are first
// 2nd - you are second
// 3rd - you are third

var user = "3rd";
switch (user) {
  case "1st":
    console.log("you are first");
    break;
  case "2nd":
    console.log("you are second");
    break;
  case "3rd":
    console.log("you are third");
    break;
  default:
    console.log("you are last");
    break;
}
