/* ============================================================
   APP.JS – LÓGICA PRINCIPAL DO SITE
   ============================================================ */

// Nomalizar texto

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}


// Elementos principais
const menuCategorias = document.getElementById("menu-categorias");
const produtosContainer = document.getElementById("produtos-container");
const bannerContainer = document.getElementById("banner-container");
const searchInput = document.getElementById("searchInput");
const whatsappFooter = document.getElementById("whatsappFooter");

// ============================================================
// UTILIDADES
// ============================================================

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function slugParaNomeCategoria(slug) {
  const cat = categorias.find(c => c.id === slug);
  return cat ? cat.nome : "";
}

// ============================================================
// BANNER DE DESTAQUES
// ============================================================

function renderBanner() {
  const destaques = produtos.filter(p => p.destaque);

  destaques.forEach(produto => {
    const card = criarCardProduto(produto, true);
    bannerContainer.appendChild(card);
  });
}

// ============================================================
// RENDERIZAÇÃO DE PRODUTOS POR CATEGORIA
// ============================================================

function renderProdutos(listaProdutos) {
  produtosContainer.innerHTML = "";

  categorias.forEach(cat => {
    const produtosDaCategoria = listaProdutos.filter(p => p.categoria === cat.id);
    if (produtosDaCategoria.length === 0) return;

     const section = document.createElement("section");
     section.classList.add("categoria-section");
     section.id = cat.id;

     const container = document.createElement("div");
     container.classList.add("container");

     const titulo = document.createElement("h2");
     titulo.textContent = cat.nome;

     const slider = document.createElement("div");
slider.classList.add("slider");

const arrowLeft = document.createElement("button");
arrowLeft.className = "arrow left";
arrowLeft.innerHTML = "‹";

const arrowRight = document.createElement("button");
arrowRight.className = "arrow right";
arrowRight.innerHTML = "›";

const track = document.createElement("div");
track.classList.add("slider-track");

produtosDaCategoria.forEach(produto => {
  const card = criarCardProduto(produto);
  track.appendChild(card);
});

const dots = document.createElement("div");
dots.classList.add("slider-dots");

slider.appendChild(arrowLeft);
slider.appendChild(track);
slider.appendChild(arrowRight);

container.appendChild(titulo);
container.appendChild(slider);
container.appendChild(dots);
section.appendChild(container);
produtosContainer.appendChild(section);
     
  });
}

// ============================================================
// CARD DE PRODUTO
// ============================================================

function criarCardProduto(produto, isBanner = false) {
  let quantidade = 1;

  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `produto-${produto.id}`;

  card.innerHTML = `
    ${produto.mostrarlancamento ? `<span class="badge-lancamento">Lançamento</span>` : ``}
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <a 
  href="produto.html?id=${produto.id}" 
  class="btn-detalhes"
>
  Ver produto
</a>
    <p class="descricao">${produto.descricao.resumo}</p>
    <span class="preco">${formatarPreco(produto.preco)}</span>
    ${produto.textoParcelamento ? `<span class="texto-parcelamento">${produto.textoParcelamento}</span>` : ``}

    <div class="card-acoes">
  <div class="quantidade">
    <button class="btn-menos">-</button>
    <span class="qtd">1</span>
    <button class="btn-mais">+</button>
  </div>

  <button class="btn-comprar">Reservar vaga</button>
</div>

  `;

  // Elementos internos
  const btnDetalhes = card.querySelector(".btn-detalhes");
  const descricao = card.querySelector(".descricao");
  const btnMenos = card.querySelector(".btn-menos");
  const btnMais = card.querySelector(".btn-mais");
  const qtdSpan = card.querySelector(".qtd");
  const btnComprar = card.querySelector(".btn-comprar");

    // Quantidade
  btnMais.addEventListener("click", () => {
    quantidade++;
    qtdSpan.textContent = quantidade;
  });

  btnMenos.addEventListener("click", () => {
    if (quantidade > 1) {
      quantidade--;
      qtdSpan.textContent = quantidade;
    }
  });

  // Comprar via WhatsApp
btnComprar.addEventListener("click", () => {

  // 1️⃣ calcula o total
  const valorUnitario = produto.preco;
  const valorTotal = valorUnitario * quantidade;
  const linkProduto = `${window.location.origin}${window.location.pathname}%23produto-${produto.id}`;
  // 2️⃣ monta a mensagem
  const mensagem =
    `Olá! Gostaria de reservar minhas vagas:%0A%0A` +
    `Produto: ${produto.nome}%0A` +
    `Categoria: ${slugParaNomeCategoria(produto.categoria)}%0A` +
    `Quantidade de vagas: ${quantidade} unidade(s)%0A` +
    `Valor unitário: ${formatarPreco(valorUnitario)}%0A` +
    `Valor total: ${formatarPreco(valorTotal)}%0A%0A` +
    `Link do produto:%0A${linkProduto}`;

  // 3️⃣ abre o WhatsApp
  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
  window.open(url, "_blank");
});

  // Ajustes visuais se for banner
  if (isBanner) {
    card.style.minWidth = "220px";
  }

  return card;
}



// ============================================================
// FOOTER WHATSAPP
// ============================================================

whatsappFooter.href = `https://wa.me/${WHATSAPP_NUMERO}`;

// ============================================================
// INICIALIZAÇÃO
// ============================================================

renderBanner();
renderProdutos(produtos);

/* ============================================================
   MENU HAMBÚRGUER FLUTUANTE (MOBILE)
   ============================================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav");
const menuOverlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  navMenu.classList.add("active");
});

menuOverlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  
});

/* ============================================================
   FECHAR MENU AO CLICAR EM UMA CATEGORIA (MOBILE)
   ============================================================ */

document.addEventListener("click", function (e) {
  if (e.target.closest(".nav a")) {
    navMenu.classList.remove("active");
    
  }
});

/* ============================================================
   FECHAR MENU AO CLICAR FORA (MENU HAMBÚRGUER)
   ============================================================ */

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".nav");
  const botao = document.getElementById("menuToggle");

  const clicouNoMenu = menu.contains(event.target);
  const clicouNoBotao = botao.contains(event.target);

  if (!clicouNoMenu && !clicouNoBotao) {
    menu.classList.remove("active");
  }
});

// ============================================================
// SLIDER PROFISSIONAL (DESKTOP + MOBILE)
// ============================================================

document.querySelectorAll(".slider").forEach(slider => {
  const track = slider.querySelector(".slider-track");
  const left = slider.querySelector(".arrow.left");
  const right = slider.querySelector(".arrow.right");
  const dots = slider.parentElement.querySelector(".slider-dots");

  if (!track) return;

  const cards = [...track.children];
  const cardWidth = cards[0].offsetWidth + 16;

  const visible =
    window.innerWidth >= 1024 ? Math.min(4, cards.length) : 1;

  const pages = Math.ceil(cards.length / visible);
  let page = 0;


  /* dots */
  if (dots) {
    dots.innerHTML = "";
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dots.appendChild(dot);

      dot.onclick = () => {
        page = i;
        update();
      };
    }
  }

  function update() {
    track.scrollTo({
      left: page * cardWidth * visible,
      behavior: "smooth"
    });

    if (dots) {
      [...dots.children].forEach((d, i) =>
        d.classList.toggle("active", i === page)
      );
    }
  }

  left?.addEventListener("click", () => {
    page = Math.max(0, page - 1);
    update();
  });

  right?.addEventListener("click", () => {
    page = Math.min(pages - 1, page + 1);
    update();
  });

     /* ============================================================
     SINCRONIZA DOTS COM SCROLL NO MOBILE
     ============================================================ */

  if (window.innerWidth < 1024 && dots) {
    track.addEventListener("scroll", () => {
      const scrollLeft = track.scrollLeft;
      const newPage = Math.round(
        scrollLeft / (cardWidth * visible)
      );

      if (newPage !== page) {
        page = Math.min(Math.max(newPage, 0), pages - 1);

        [...dots.children].forEach((d, i) =>
          d.classList.toggle("active", i === page)
        );
      }
    });
  }

   
  update();
});

// ============================================================
// SLIDER DE PROPAGANDA AUTOMÁTICO + DOTS (COM RANDOM REAL)
// ============================================================

function inicializarAds() {
  const adsTrack = document.querySelector(".ads-track");
  const adsImages = document.querySelectorAll(".ads-track img");
  const adsDotsContainer = document.querySelector(".ads-dots");
  const progressBar = document.querySelector(".ads-progress-bar");

  if (!adsTrack || adsImages.length === 0) return;

  let adsIndex = Math.floor(Math.random() * adsImages.length);
  const adsInterval = 8000;

  // cria dots
  adsDotsContainer.innerHTML = "";
  adsImages.forEach((_, i) => {
    const dot = document.createElement("span");
    adsDotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      adsIndex = i;
      atualizarAds();
    });
  });

  const adsDots = adsDotsContainer.querySelectorAll("span");

   function iniciarProgresso() {
  if (!progressBar) return;

  progressBar.style.transition = "none";
  progressBar.style.width = "0%";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      progressBar.style.transition = `width ${adsInterval}ms linear`;
      progressBar.style.width = "100%";
    });
  });
}
  function atualizarAds() {
    adsTrack.style.transform = `translateX(-${adsIndex * 100}%)`;

    adsDots.forEach((dot, i) =>
      dot.classList.toggle("active", i === adsIndex)
    );

     iniciarProgresso(); // 🔥 AQUI a barra começa a crescer
  }

  function trocarSlideAds() {
    adsIndex = (adsIndex + 1) % adsImages.length;
    atualizarAds();
  }

  // 🔑 ESPERA AS IMAGENS CARREGAREM
  let carregadas = 0;

  adsImages.forEach(img => {
    if (img.complete) {
      carregadas++;
    } else {
      img.onload = () => {
        carregadas++;
        if (carregadas === adsImages.length) {
          atualizarAds(); // aplica random corretamente
        }
      };
    }
  });

  if (carregadas === adsImages.length) {
    atualizarAds();
  }

  setInterval(trocarSlideAds, adsInterval);
}



// ============================================================
// SLIDER logos + DOTS (COM RANDOM REAL)
// ============================================================

function inicializarAdsLogos() {
  const adsTrack = document.querySelector(".logos-track");
  const adsImages = document.querySelectorAll(".logos-track img");
  const adsDotsContainer = document.querySelector(".logos-dots");
  const progressBar = document.querySelector(".logos-progress-bar");
   
  if (!adsTrack || adsImages.length === 0) return;

  let adsIndex = Math.floor(Math.random() * adsImages.length);
  const adsInterval = 2000;

  // cria dots
  adsDotsContainer.innerHTML = "";
  adsImages.forEach((_, i) => {
    const dot = document.createElement("span");
    adsDotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      adsIndex = i;
      atualizarAds();
    });
  });

  const adsDots = adsDotsContainer.querySelectorAll("span");

   function iniciarProgresso() {
  if (!progressBar) return;

  progressBar.style.transition = "none";
  progressBar.style.width = "0%";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      progressBar.style.transition = `width ${adsInterval}ms linear`;
      progressBar.style.width = "100%";
    });
  });
}
  function atualizarAds() {
    adsTrack.style.transform = `translateX(-${adsIndex * 100}%)`;

    adsDots.forEach((dot, i) =>
      dot.classList.toggle("active", i === adsIndex)
    );

     iniciarProgresso(); // 🔥 AQUI a barra começa a crescer
  }

  function trocarSlideAds() {
    adsIndex = (adsIndex + 1) % adsImages.length;
    atualizarAds();
  }

  // 🔑 ESPERA AS IMAGENS CARREGAREM
  let carregadas = 0;

  adsImages.forEach(img => {
    if (img.complete) {
      carregadas++;
    } else {
      img.onload = () => {
        carregadas++;
        if (carregadas === adsImages.length) {
          atualizarAds(); // aplica random corretamente
        }
      };
    }
  });

  if (carregadas === adsImages.length) {
    atualizarAds();
  }

  setInterval(trocarSlideAds, adsInterval);
}


// inicia quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  inicializarAds();
  inicializarAdsLogos();
});





function initEquipeSlider() {
  const track = document.querySelector(".equipe-track");
  const dotsContainer = document.querySelector(".equipe-dots");

  if (!track || !dotsContainer) return;

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  equipe.forEach(pessoa => {
    const card = document.createElement("div");
    card.className = "equipe-card";
    card.innerHTML = `
      <img src="${pessoa.imagem}" alt="${pessoa.nome}">
      <h3>${pessoa.nome}</h3>
      <p>${pessoa.texto}</p>
      <a href="${pessoa.link}" class="btn-comprar">Conheça mais</a>
    `;
    track.appendChild(card);
  });

  const cards = [...track.children];
  if (!cards.length) return;

  const isDesktop = window.innerWidth >= 1024;
  const cardsPerView = isDesktop ? 3 : 1;

  const totalPages = isDesktop
    ? Math.ceil(cards.length / cardsPerView)
    : cards.length;

  let index = Math.floor(Math.random() * totalPages);

  const cardWidth = cards[0].offsetWidth + 32;

  // dots
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("span");
    if (i === index) dot.classList.add("active");

    dot.onclick = () => {
      index = i;
      track.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
      updateDots();
    };

    dotsContainer.appendChild(dot);
  }

  function updateDots() {
    [...dotsContainer.children].forEach((d, i) =>
      d.classList.toggle("active", i === index)
    );
  }

  function update() {
    if (window.innerWidth < 768) {
      track.scrollLeft = index * cardWidth;
    } else {
      track.style.transform =
        `translateX(-${index * cardWidth * cardsPerView}px)`;
    }
    updateDots();
  }

  // swipe mobile
  if (window.innerWidth < 768) {
    track.addEventListener("scroll", () => {
      const novoIndex = Math.floor(
        (track.scrollLeft + cardWidth / 2) / cardWidth
      );

      index = Math.min(
        Math.max(novoIndex, 0),
        totalPages - 1
      );

      updateDots();
    });
  }

  update();


// =================================================
// DESKTOP — CONTROLE DOS DOTS SEM AUTOPLAY
// =================================================
if (window.innerWidth >= 1024) {

  const cards = Array.from(track.children);
  const dots = Array.from(dotsContainer.children);
  const cardsPerPage = 3;

  function updateDesktopByDots(page) {

    cards.forEach(card => card.style.display = "none");

    const start = page * cardsPerPage;
    const end = start + cardsPerPage;

    cards.slice(start, end).forEach(card => {
      card.style.display = "block";
    });

    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === page)
    );
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateDesktopByDots(index);
    });
  });

  updateDesktopByDots(0);
}

   

   
}


  

window.addEventListener("load", initEquipeSlider);
// window.addEventListener("resize", initEquipeSlider);



/* ======================================================
   DEPOIMENTOS – SLIDER + MODAL YOUTUBE
   ====================================================== */

const depoimentosVideos = [
  "BEV6upQhPEA",
  "7uC4pstQS4Y",
  "Fu-WNt6muDc",
  "PQn3T-R6BmQ",
  "nyRvRtNetrA",
  "DZR50Zx1mGU"
];

function initDepoimentos() {
  const track = document.querySelector(".depoimentos-track");
  const dots = document.querySelector(".depoimentos-dots");
  const modal = document.getElementById("videoModal");
  const modalFrame = document.getElementById("videoModalFrame");
  const closeBtn = document.getElementById("videoModalClose");

  if (!track || !dots) return;

  track.innerHTML = "";
  dots.innerHTML = "";

  depoimentosVideos.forEach(id => {
    const card = document.createElement("div");
    card.className = "depoimento-card";
    card.innerHTML = `
      <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Depoimento">
    `;
    card.onclick = () => {
      modal.classList.add("active");
      modalFrame.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${id}?autoplay=1"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
      `;
    };
    track.appendChild(card);
  });

  const isDesktop = window.innerWidth >= 1024;
  const perPage = isDesktop ? 3 : 1;
  const pages = Math.ceil(depoimentosVideos.length / perPage);
  let page = 0;

  for (let i = 0; i < pages; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.onclick = () => {
      page = i;
      update();
    };
    dots.appendChild(dot);
  }

  function update() {
    const cardWidth = track.children[0].offsetWidth + 24;
    track.style.transform =
      `translateX(-${page * cardWidth * perPage}px)`;

    [...dots.children].forEach((d, i) =>
      d.classList.toggle("active", i === page)
    );
  }


  // ================================
// AUTOPLAY (MOBILE E DESKTOP)
// ================================
// let autoPlayInterval = null;

// function startAutoPlay() {
//  stopAutoPlay(); // evita duplicar

//  autoPlayInterval = setInterval(() => {
//    page++;

 //   if (page >= pages) {
 //     page = 0;
 //   }

//    update();
//  }, 60000); // tempo em ms (4000 = 4 segundos)
// }

// function stopAutoPlay() {
//  if (autoPlayInterval) {
//    clearInterval(autoPlayInterval);
//    autoPlayInterval = null;
//  }
// }
 

  update();
//  startAutoPlay();


  closeBtn.onclick = () => {
  modal.classList.remove("active");
  modalFrame.innerHTML = "";
  startAutoPlay(); // VOLTA O AUTOPLAY
};


  modal.onclick = e => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modalFrame.innerHTML = "";
    startAutoPlay(); // VOLTA O AUTOPLAY
  }
};

}

window.addEventListener("load", initDepoimentos);
window.addEventListener("resize", initDepoimentos);





/* ======================================================
   IGC – VÍDEOS INSTITUCIONAIS o que o igc faz por voce
   ====================================================== */

function initIgcVideos() {

  const videos = [
    "b8gtT8X6Z2w",
    "1Wnwnk0BfN8",
    "qBl3cML4dew"
  ];

  const track = document.querySelector(".igc-videos-track");
  const dotsContainer = document.querySelector(".igc-videos-dots");
  const modal = document.getElementById("igcVideoModal");
  const modalFrame = document.getElementById("igcVideoFrame");
  const closeBtn = document.getElementById("igcVideoClose");

  if (!track || !dotsContainer) return;

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  videos.forEach(id => {
    const card = document.createElement("div");
    card.className = "igc-video-card";
    card.innerHTML = `
      <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Vídeo IGC">
    `;

    card.onclick = () => {
      modal.classList.add("active");
      modalFrame.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${id}?autoplay=1"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
      `;
    };

    track.appendChild(card);
  });

  const isDesktop = window.innerWidth >= 1024;
  const perPage = isDesktop ? 3 : 1;
  const pages = Math.ceil(videos.length / perPage);
  let page = 0;

  for (let i = 0; i < pages; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.onclick = () => {
      page = i;
      update();
    };
    dotsContainer.appendChild(dot);
  }

  function update() {
    const cardWidth = track.children[0].offsetWidth + 24;
    track.style.transform =
      `translateX(-${page * cardWidth * perPage}px)`;

    [...dotsContainer.children].forEach((d, i) =>
      d.classList.toggle("active", i === page)
    );
  }

  update();

  /* AUTOPLAY */
 // let timer = setInterval(() => {
 //   page = (page + 1) % pages;
 //   update();
//  }, 60000);

//  function stopAuto() {
//    clearInterval(timer);
//  }

//  function startAuto() {
//    timer = setInterval(() => {
//      page = (page + 1) % pages;
//     update();
//    }, 6000);
//  }

  closeBtn.onclick = () => {
    modal.classList.remove("active");
    modalFrame.innerHTML = "";
    startAuto();
  };

  modal.onclick = e => {
    if (e.target === modal) {
      modal.classList.remove("active");
      modalFrame.innerHTML = "";
      startAuto();
    }
  };
}

window.addEventListener("load", initIgcVideos);
window.addEventListener("resize", initIgcVideos);

