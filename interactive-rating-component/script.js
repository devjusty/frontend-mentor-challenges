const start = doucment.querySelector(".start");
const end = document.querySelector(".end");
const ratingOptions = document.querySelectorAll(".rating-option");
const finalRatingScore = document.querySelector(".final-rating-score");

end.style.display = "none";

let selectedRating;

function updateRating(rating) {
  ratingOptions.forEach((option) => {
    option.classList.remove("active");
  });

  selectedRating = rating;

  document
    .querySelector(`.rating-option:nth-child($rating`)
    .classList.add("active");
}

function submitRating() {
  finalRatingScore.innerHTML = rating;

  start.style.display = "none";
  end.style.display = "block";
}
