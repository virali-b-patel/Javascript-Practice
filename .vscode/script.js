var counter = document.querySelector(".counter");
var follower = document.querySelector(".followers");

// counter.innerHTML = 1001;
let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  follower.innerText = "Followers in Instagram!";
}, 3000);
