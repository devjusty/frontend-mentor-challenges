const start = document.querySelector(".start");
const end = document.querySelector(".end");
const ratingOptions = document.querySelectorAll(".rating-option");
const finalRatingScore = document.querySelector(".final-rating-score");

end.style.display = "none";

let selectedRating;

function setRating(rating) {
  selectedRating = rating;

  ratingOptions.forEach((option) => {
    option.classList.remove("active");
  });


  document
    .querySelector(`.rating-option:nth-child(${rating})`)
    .classList.add("active");
}

function submitRating() {
  console.log('submitting rating')
  if (!selectedRating) return;


  finalRatingScore.innerHTML = selectedRating;

  start.style.display = "none";
  end.style.display = "flex";
}
