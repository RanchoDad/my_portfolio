// Button at the bottom to scroll to the top
const scrollBtn = document.getElementById("top-button");

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// resume modal
const modal = document.getElementById("resume-content");
const clickResumeDeets = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeButton = document.querySelector(".close-button");

clickResumeDeets.addEventListener("click", function () {
  modal.style.display = "block";
  overlay.style.display = "block";
});

overlay.addEventListener("click", function(){
  if (e.target === overlay) {
    modal.style.display = "none";
    overlay.style.display ="none";
  }
});

closeButton.addEventListener("click", function (e) {
  if (e.target === closeButton) {
    modal.style.display = "none";
    overlay1.style.display = "none";
  }
});