const firstCard = document.querySelector(".rate");
const secondCard = document.querySelector(".thanks");
const submitButton = document.querySelector(".btn-submit");
const numberButtons = document.querySelectorAll(".btn");
const ratingText = document.querySelector(".res");

submitButton.addEventListener("click", function () {
  firstCard.classList.add("hidden");
  secondCard.classList.remove("hidden");
});

numberButtons.forEach(function (rating) {
  rating.addEventListener("click", function () {
    ratingText.innerHTML = rating.innerHTML;
  });
});