document.addEventListener("DOMContentLoaded", () => {
  if (typeof historiaIGC === "undefined") return;

  const container = document.getElementById(historiaIGC.id);
  if (!container) return;

  container.innerHTML = `
    <div class="institucional-inner">
      <div class="institucional-header">
        <h2>${historiaIGC.titulo}</h2>
      </div>

      <div class="institucional-grid">
        <div class="institucional-texto">
          ${historiaIGC.texto
            .trim()
            .split("\n\n")
            .map(p => `<p>${p}</p>`)
            .join("")}
        </div>

        <div class="institucional-imagem">
          <img src="${historiaIGC.imagem}" alt="${historiaIGC.titulo}">
        </div>
      </div>
    </div>
  `;
});
