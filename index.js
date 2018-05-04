
const startups = document.getElementById('startups');
const index = document.getElementById('index');
let wind = window.location

startups.addEventListener("click", () => {
  wind.href = "file:///Users/victorgardrinier/code/vgardrinier/fullstack-challenges/04-Front-End/01-HTML-and-CSS/04-Advanced-selectors/profile/startups.html"
  });

index.addEventListener("click", () =>  {
  wind.href = "file:///Users/victorgardrinier/code/vgardrinier/fullstack-challenges/04-Front-End/01-HTML-and-CSS/04-Advanced-selectors/profile/index.html"
});
