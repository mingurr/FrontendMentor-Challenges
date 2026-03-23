const main = document.querySelector("main");
const shareBox = document.querySelector(".share");
const sharePopover = document.querySelector(".share-popover");
const shareBtn = document.querySelector(".share-btn");
const img = document.querySelector(".share-img");

main.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    if (shareBox.classList.contains("active")) {
      shareBox.classList.remove("active");
    } else {
      shareBox.classList.add("active");
    }
  } else if (window.innerWidth >= 768) {
    if (sharePopover.classList.contains("active")) {
      sharePopover.classList.remove("active");
    } else {
      sharePopover.classList.add("active");
    }
  }

  if (shareBtn.classList.contains("dark")) {
    shareBtn.classList.remove("dark");
    img.src = "./images/icon-share.svg";
  } else {
    shareBtn.classList.add("dark");
    img.src = "./images/icon-share-dark.svg";
  }
});
