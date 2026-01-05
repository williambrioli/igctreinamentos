document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("historia-igc");
  if (!container || typeof blocoHistoriaIGC === "undefined") return;

  container.innerHTML = `
    <div class="institucional-wrap">
      <div class="institucional-texto">
        <h2>${blocoHistoriaIGC.titulo}</h2>
        <p>${blocoHistoriaIGC.texto.replace(/\n/g, "<br><br>")}</p>
      </div>

      <div class="institucional-imagem">
        <img src="${blocoHistoriaIGC.imagem}" alt="${blocoHistoriaIGC.titulo}">
      </div>
    </div>
  `;
});
