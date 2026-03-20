const main = document.querySelector("main");
const shareBox = document.querySelector(".share");
const sharePopover = document.querySelector(".share-popover");

main.addEventListener("click", () => {
  if (window.innerWidth > 377 && window.innerWidth < 768) {
    if (shareBox.classList.contains("active")) {
      shareBox.classList.remove("active");
    } else {
      shareBox.classList.add("active");
    }
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    if (sharePopover.classList.contains("active")) {
      sharePopover.classList.remove("active");
    } else {
      sharePopover.classList.add("active");
    }
  }
});
