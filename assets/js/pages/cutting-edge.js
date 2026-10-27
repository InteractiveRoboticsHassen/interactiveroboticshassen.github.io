document.addEventListener("DOMContentLoaded", function () {

  const buttons =
    document.querySelectorAll(".filter-btn");

  const cards =
    document.querySelectorAll(
      "#technology-grid .tech-card"
    );

  const search =
    document.getElementById(
      "technology-search"
    );

  let currentFilter = "all";

  function updateCards() {

    const searchTerm =
      search.value
        .toLowerCase()
        .trim();

    cards.forEach(function (card) {

      const regions =
        (card.dataset.region || "")
        .toLowerCase();

      const text =
        card.textContent
        .toLowerCase();

      const matchesRegion =
        currentFilter === "all" ||
        regions.includes(currentFilter);

      const matchesSearch =
        !searchTerm ||
        text.includes(searchTerm);

      card.hidden =
        !(matchesRegion && matchesSearch);

    });

  }


  buttons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        buttons.forEach(function (b) {
          b.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter =
          button.dataset.filter;

        updateCards();

      }
    );

  });


  search.addEventListener(
    "input",
    updateCards
  );

});
