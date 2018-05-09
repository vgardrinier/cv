
const startups = document.getElementById('startups');
const index = document.getElementById('index');
let wind = window.location



const one = document.getElementById("sectionone");
const two = document.getElementById("sectiontwo");




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


// if (window.width < 1200) {
//   console.log("yesss");
//     document.getElementByClassName("video").style.display = 'none';
// }


// <!-- responsivity at 800px -->


// <!-- #finish experience with YEP + SVIA + DEV
// #EDUCATION
// #sidebar with random stuff (music + sport + softwares + books) and Startups (yep, feelter, eatsplit, bbnb, fleeze) and articles (blockchain report, stanford blog, medium, front row blockchain, stanford philosophy and principles (top 10))
// #responsitivity
//  -->
