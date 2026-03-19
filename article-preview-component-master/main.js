const main = document.querySelector("main");
const shareBox = document.querySelector(".share");

main.addEventListener("click", () => {
  if (shareBox.classList.contains("active")) {
    shareBox.classList.remove("active");
  } else {
    shareBox.classList.add("active");
  }
});
