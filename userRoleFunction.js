// Define a function that can answer the role of a user.
// A user can be on following roles:
// admin - with all access
// subadmin - gets access to create/delete course
// testprep - gets access to create/delete tests
// user - consume all content
// other - trial user.
// Input: getUserRole(name,role)

var getUserRole = function (name, role) {
  // var getUserRole = (name, role) => {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
    // break; //this is not necessary
    case "subadmin":
      return `${name} is subadmin with access to create/delete course`;
    // break;
    case "testprep":
      return `${name} is testprep with access to create/delete course`;
    // break;
    case "user":
      return `${name} is a user to consume content`;
    // break;
    default:
      return `${name} is a trial user`;
    // break;
  }
};
console.log(getUserRole("virali", "testprep"));
var getRole = getUserRole("vijay", "user");
console.log(getRole);

var getUserNumber = function (name, number) {
  switch (number) {
    case "1st":
      return `${name} is first`;
    case "2nd":
      return `${name} is second`;
    case "3rd":
      return `${name} is third`;
    case "4th":
      return `${name} is forth`;
    default:
      return `${name} is last`;
  }
};
console.log(getUserNumber("vijay", "1st"));
var userName = getUserNumber("virali", "2nd");
console.log(userName);
