document.addEventListener("DOMContentLoaded", () => {

  // roda SOMENTE no desktop
  if (window.innerWidth < 1024) return;

  const cards = Array.from(
    document.querySelectorAll(".institucional-equipe .equipe-card")
  );
  const dots = Array.from(
    document.querySelectorAll(".institucional-equipe .equipe-dots span")
  );

  if (!cards.length || !dots.length) return;

  const cardsPerPage = 3;
  let currentPage = 0;

  function updateDesktopEquipe() {
    cards.forEach(card => card.style.display = "none");

    const start = currentPage * cardsPerPage;
    const end = start + cardsPerPage;

    cards.slice(start, end).forEach(card => {
      card.style.display = "block";
    });

    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === currentPage)
    );
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentPage = index;
      updateDesktopEquipe();
    });
  });

  updateDesktopEquipe();

});
