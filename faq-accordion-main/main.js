const questions = document.querySelectorAll(".question");
const ICON = {
  open: "assets/images/icon-minus.svg",
  closed: "assets/images/icon-plus.svg",
};

function setOpen(question, open) {
  const btn = question.querySelector("button");
  const icon = question.querySelector(".icon");

  question.classList.toggle("open", open);

  if (icon) {
    icon.src = open ? ICON.open : ICON.closed;
  }
}

function handleQuestionClick(question) {
  const opened = question.classList.contains("open");
  setOpen(question, !opened);
}

questions.forEach((question) => {
  setOpen(question, false);

  const btn = question.querySelector("button");

  btn.addEventListener("click", () => handleQuestionClick(question));
});
