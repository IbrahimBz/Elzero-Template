// Skills Section
let skillsSect = document.getElementById("our-skills");
let skillDivs = document.querySelectorAll(".skill section > div");
let statsSect = document.getElementById("stats");
let statsSpans = document.querySelectorAll(".stats .number");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSect.offsetTop) {
    skillDivs.forEach(
      (div) => (div.style.width = div.parentElement.dataset.width)
    );
  }
});

// Events Section
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let eventDate = new Date("Feb 31, 2023 23:59:59").getTime();

  let dateDeference = eventDate - dateNow;

  let days = Math.floor(dateDeference / (1000 * 60 * 60 * 24));
  document.querySelector(".days span").innerHTML =
    days < 10 ? `0${days}` : days;

  let hours = Math.floor(
    (dateDeference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  document.querySelector(".hours span").innerHTML =
    hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((dateDeference % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes span").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((dateDeference % (1000 * 60)) / 1000);
  document.querySelector(".seconds span").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

// Start stats

let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");
let notStarted = true;

window.onscroll = () => {
  if (this.scrollY >= section.offsetTop && notStarted) {
    nums.forEach((num) => startCount(num));
    notStarted = false;
  }
};

function startCount(el) {
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == el.dataset.number) {
      clearInterval(count);
    }
  }, 2000 / el.dataset.number);
}
