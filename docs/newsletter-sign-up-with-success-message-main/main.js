const input = document.querySelector("input");
const submitBtn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".error-msg");
const main = document.querySelector("main");
const successView = document.querySelector(".success-view");
const dismissBtn = document.querySelector(".dismiss-btn");

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(value) {
  if (!value) return;

  const isValid = regex.test(value.trim());
  errorMsg.textContent = isValid ? "" : "Valid email required";
  return isValid;
}

input.addEventListener("blur", () => {
  validate(input.value);
});

input.addEventListener("input", () => {
  if (errorMsg.textContent) {
    validate(input.value);
  }
});

submitBtn.addEventListener("click", () => {
  const isValid = validate(input.value);

  if (isValid) {
    main.style.display = "none";
    successView.classList.add("active");
    input.value = "";
  }
});

dismissBtn.addEventListener("click", () => {
  main.style.display = "flex";
  successView.classList.remove("active");
});

// input.addEventListener("blur", () => {
//   const inputValue = input.value.trim();

//   if (!inputValue) return;

//   if (regex.test(inputValue)) {
//     errorMsg.textContent = "";
//   } else {
//     inputError();
//   }
// });

// input.addEventListener("input", () => {
//   if (errorMsg.textContent) {
//     if (regex.test(input.value.trim())) {
//       errorMsg.textContent = "";
//     }
//   }
// });

// function inputError() {
//   errorMsg.textContent = "Valid email required";
// }
