var user = {
  firstName: "Virali",
  latName: "Patel",
  role: "Students",
  ID: "virali@xyz",
  loginCount: 30,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} course`;
  },
};
// var courseList = true;
console.log(user.firstName);
r.buyCourse("React JS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());

function arrayLength(p) {
  console.log(p);
}

function myarr(v) {
  arrayLength(v);
}

myarr(4);
