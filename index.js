
const startups = document.getElementById('startups');
const index = document.getElementById('index');
let wind = window.location

// startups.addEventListener("click", () => {
//   wind.href = "file:///Users/victorgardrinier/code/vgardrinier/fullstack-challenges/04-Front-End/01-HTML-and-CSS/04-Advanced-selectors/profile/startups.html"
//   });

// index.addEventListener("click", () =>  {
//   wind.href = "file:///Users/victorgardrinier/code/vgardrinier/fullstack-challenges/04-Front-End/01-HTML-and-CSS/04-Advanced-selectors/profile/index.html"
// });

const one = document.getElementById("sectionone");
const two = document.getElementById("sectiontwo");

// one.style.transition = "5s";
// two.style.transition = "5s";


window.onload = () => {
  two.style.display = "none";
};

startups.addEventListener("click", () => {
one.style.display = "none";
two.style.display = "block";
  });

index.addEventListener("click", () => {
two.style.display = "none";
one.style.display = "block";
  });

