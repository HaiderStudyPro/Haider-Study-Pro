// Search bar filtering
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const cards = document.querySelectorAll(".class-card");

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    if (text.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".practice-zone");
  if (btn) {
    btn.addEventListener("click", function () {
      window.open("https://arolinks.com/1ZW", "_blank");
    });
  }
});