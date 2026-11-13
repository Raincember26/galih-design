// Project category tabs.
// Each card in index.html carries data-category="<tab key>", and a card may
// list several keys (space separated) to appear under more than one tab.
(function () {
  var tabs = document.querySelectorAll("#project-tabs .tab-btn");
  var cards = document.querySelectorAll("#projects [data-category]");

  if (!tabs.length) return;

  // animate is false on first paint, so the page does not fade itself in on load.
  function apply(filter, animate) {
    tabs.forEach(function (tab) {
      var active = tab.getAttribute("data-filter") === filter;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });

    cards.forEach(function (card) {
      var categories = (card.getAttribute("data-category") || "").split(/\s+/);
      var show = categories.indexOf(filter) !== -1;
      card.classList.toggle("hidden", !show);
      // .card-in plays the fade-in; defined in assets/css/main.css
      card.classList.toggle("card-in", show && animate);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      apply(tab.getAttribute("data-filter"), true);
    });
  });

  apply("featured", false);
})();
