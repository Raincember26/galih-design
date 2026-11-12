// Project category tabs.
// Each card in index.html carries data-category="<tab key>", and a card may
// list several keys (space separated) to appear under more than one tab.
(function () {
  var tabs = document.querySelectorAll("#project-tabs .tab-btn");
  var cards = document.querySelectorAll("#projects [data-category]");

  if (!tabs.length) return;

  function apply(filter) {
    tabs.forEach(function (tab) {
      var active = tab.getAttribute("data-filter") === filter;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });

    cards.forEach(function (card) {
      var categories = (card.getAttribute("data-category") || "").split(/\s+/);
      card.classList.toggle("hidden", categories.indexOf(filter) === -1);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      apply(tab.getAttribute("data-filter"));
    });
  });

  apply("featured");
})();
