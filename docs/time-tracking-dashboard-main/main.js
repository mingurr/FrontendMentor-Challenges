const categoryBtns = document.querySelectorAll(".category-btn");
const cardsContainer = document.querySelector(".cards-container");

let statsData = [];
let currentPeriod = "weekly";

setActiveButton();

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    statsData = json;
    renderCards();
  })
  .catch((error) => {
    console.error("Failed to load time tracking data:", error);
  });

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentPeriod = btn.dataset.period;
    setActiveButton();
    renderCards();
  });
});

function setActiveButton() {
  categoryBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.period === currentPeriod);
  });
}

function renderCards() {
  const periodLabels = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };

  cardsContainer.innerHTML = statsData
    .map((item) => {
      const timeframe = item.timeframes[currentPeriod];
      const cardClass = item.title.toLowerCase().replace(" ", "-");

      return `
        <article class="card-container ${cardClass}">
          <div class="card-contents">
            <header class="card-header">
              <h2 class="text-preset-5-medium">${item.title}</h2>
              <button>
                <img src="./images/icon-ellipsis.svg" alt="ellipsis" />
              </button>
            </header>

            <div class="card-stats">
              <div class="current text-preset-3">${timeframe.current}hrs</div>
              <div class="previous text-preset-6">${periodLabels[currentPeriod]} - ${timeframe.previous}hrs</div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}
