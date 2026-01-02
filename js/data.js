/* ============================================================
   CONFIGURAÇÕES GERAIS
   ============================================================ */

// Número fixo do WhatsApp da farmácia (formato internacional, sem +)
const WHATSAPP_NUMERO = "5518988092571";

/* ============================================================
   CATEGORIAS
   ============================================================ */

const categorias = [

   {
    id: "inicio",
    nome: "#",
    nomeMenu: "Início",
    mostrarNoMenu: true
  },
  {
    id: "pnl",
    nome: "Treinamentos em PNL",
    nomeMenu: " Formação em PNL",
    mostrarNoMenu: true
  },
  {
    id: "oratoria",
    nome: "Treinamentos em Oratória",
    nomeMenu: "Treinamento em Oratória",
    mostrarNoMenu: true
  },
  {
    id: "workshopepalestas",
    nome: "Worshops e Palestras",
    nomeMenu: "Worshops e Palestras",
    mostrarNoMenu: true
  }
  
];

/* ============================================================
   PRODUTOS
   ============================================================ */

const produtos = [
  {
    id: "1",
    nome: "Treinamento em PNL Básico",
    categoria: "pnl",
    preco: 798.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },


   {
    id: "2",
    nome: "Treinamento em PNL Intermediário",
    categoria: "pnl",
    preco: 997.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },


 {
    id: "3",
    nome: "Treinamento em PNL Avançado",
    categoria: "pnl",
    preco: 1600.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },




   {
    id: "4",
    nome: "Treinamento em Oratória Básico",
    categoria: "oratoria",
    preco: 798.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },
   
 


{
    id: "5",
    nome: "Treinamento em Oratória Intermediário",
    categoria: "oratoria",
    preco: 997.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },



{
    id: "6",
    nome: "Treinamento em Oratória Avançado",
    categoria: "oratoria",
    preco: 1600.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },
   
   

{
    id: "7",
    nome: "Workshops e Palestas",
    categoria: "workshopepalestas",
    preco: 90.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },




   {
    id: "8",
    nome: "Workshops e Palestas",
    categoria: "workshopepalestas",
    preco: 90.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },


   
    {
    id: "9",
    nome: "Workshops e Palestas",
    categoria: "workshopepalestas",
    preco: 90.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },

   
  

   {
    id: "10",
    nome: "Workshops e Palestas",
    categoria: "workshopepalestas",
    preco: 90.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },


   

    {
    id: "11",
    nome: "Workshops e Palestas",
    categoria: "workshopepalestas",
    preco: 90.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },

   

     
   
];


/* ============================================================
   INTEGRANTES DA EQUIPE IGC
   ============================================================ */

const equipe = [
  {
    nome: "Dr. Paulo Takahashi",
    imagem: "assets/img/equipe/paulo.jpeg",
    texto: "Dr. Paulo Takahashi, é Consultor Empresarial,  Master Trainer, Especialista em Alta-Performance. Atua há mais de 20 anos transformando e desenvolvendo a vida de pessoas, equipes e empresas. É um dos responsáveis pelo desenvolvimento da Programação Neurolinguística (PNL) no Brasil e Japão.",
    link: "https://paulotakahashi.com.br"
  },
  {
    nome: "Dr. William Brioli",
    imagem: "assets/img/equipe/william.jpg",
    texto: "Especialista em comunicação, oratória e treinamentos corporativos de alto impacto. Há 22 anos dedica sua carreira ao desenvolvimento humano — ajudando pessoas, casais, líderes e equipes corporativas a compreenderem suas emoções, fortalecerem seus vínculos e alcançarem alta performance com equilíbrio entre vida e trabalho.",
    link: "https://williambrioli.com.br"
  },
  {
    nome: " Prof. Francisco Arcanjo",
    imagem: "assets/img/equipe/francisco.jpg",
    texto: "Atua há mais de X anos formando líderes e equipes de alta performance.",
    link: "https://franciscoarcanjo.com.br/"
  }
];







window.produtos = produtos;

/* ============================================================
   OBSERVAÇÕES IMPORTANTES
   ============================================================ */

/*
- Para adicionar uma nova categoria:
  1) Crie um novo objeto em `categorias`
  2) Use o mesmo `id` no campo `categoria` do produto

- Para adicionar um novo produto:
  1) Copie um bloco dentro do array `produtos`
  2) Altere id, nome, categoria, preco, descricao e imagem

- Para exibir no banner de destaques:
  destaque: true

- As imagens devem estar na pasta /assets/img/
*/

