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
    nome: "Worshop e Palestra",
    nomeMenu: "Worshop e Palestra",
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


 configuracoes: {
  mostrarNome: true,
  mostrarPreco: false,
  mostrarResumo: true
},
   
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: ""
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


   configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true
},
      
    destaque: false,
    mostrarlancamento: false,
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

configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true
},
    
    destaque: false,
    mostrarlancamento: false,
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


configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true
},
      
    destaque: false,
    mostrarlancamento: false,
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


   configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true
},
   
    destaque: false,
    mostrarlancamento: false,
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


   configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true
},
   
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },
   
   

{
    id: "7",
    nome: "Workshop de Programação Neurolinguística (PNL) - Alta Performance",
    categoria: "workshopepalestas",
    preco: 90.00,
    imagem: "assets/img/imgteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
      <p>Desenvolva clareza mental, comunicação eficaz e domínio emocional por meio de técnicas práticas e aplicáveis da Programação Neurolinguística.</p>
             
       `,
      
       oQueE: `

      <h2>Sobre o Workshop</h2>
      <br>
      <p>
      O Whorkshop <strong>Programação Neurolinguística (PNL) – Alta Performance</strong>
      foi desenvolvido para pessoas que desejam compreender como a mente humana
      funciona e como pensamentos, linguagem e comportamento influenciam
      diretamente os resultados da vida pessoal e profissional.
    </p>

    <p>
      Ao longo da formação, o participante aprenderá técnicas consagradas
      da PNL para melhorar a comunicação interpessoal, criar conexões mais
      profundas, desenvolver inteligência emocional, reprogramar padrões
      mentais limitantes e estabelecer objetivos claros e alcançáveis.
    </p>

    <p>
      A proposta do Wokshop é unir <strong>conhecimento, prática e consciência</strong>,
      permitindo que cada aluno aplique imediatamente as ferramentas aprendidas
      em seu cotidiano, promovendo maior segurança, clareza, autonomia emocional
      e produtividade.
    </p>
      
      `,      
       
      composicao: `
      
     <h2>Conteúdo Programático</h2> 
     <br>

    <h4>Módulo 1 – Fundamentos da PNL</h4>
    
    <ul>
      <li>O que é Programação Neurolinguística: história, princípios e aplicações</li>
      <li>A relação entre pensamento, linguagem e comportamento</li>
      <li>Pressupostos da PNL e seus impactos na percepção da realidade</li>
      <li>O conceito: o mapa não é o território</li>
      <li>Os 4 pilares da PNL:
        <ul>
          <li>Rapport</li>
          <li>Acuidade sensorial</li>
          <li>Flexibilidade comportamental</li>
          <li>Formulação de objetivos</li>
        </ul>
      </li>
    </ul>
    <br>
    <h4>Módulo 2 – Aprimorando a Comunicação</h4>
    
    <ul>
      <li>Rapport: técnicas para criar conexão e sintonia rapidamente</li>
      <li>Sistemas representacionais: visual, auditivo e cinestésico</li>
      <li>Como identificar e utilizar o canal de comunicação preferencial</li>
      <li>Meta Modelagem:
        <ul>
          <li>Como fazer perguntas específicas e estratégicas</li>
          <li>Identificação de generalizações, omissões e distorções</li>
          <li>Clareza, objetividade e precisão na comunicação</li>
        </ul>
      </li>
      <li>O poder das palavras: impacto da linguagem verbal e não verbal</li>
    </ul>
    <br>

    <h4>Módulo 3 – Técnicas de Mudança e Reprogramação Mental</h4>
    
    <ul>
      <li>Círculo de Excelência:
        <ul>
          <li>Criação de gatilhos mentais positivos</li>
          <li>Acesso consciente a estados emocionais desejados</li>
        </ul>
      </li>
      <li>Níveis Neurológicos:
        <ul>
          <li>Mudança de significado e percepção</li>
          <li>Potencialização de recursos internos</li>
          <li>Transformação da visão sobre situações e desafios</li>
        </ul>
      </li>
      <li>Análise Transacional:
        <ul>
          <li>Autonomia emocional</li>
          <li>Responsabilidade sobre ações, sentimentos e decisões</li>
          <li>Identificação e substituição de padrões mentais improdutivos</li>
        </ul>
      </li>
    </ul>
     <br> 
      `,
      comoUsar: `
      
      <h2>Metodologia</h2>
      <br>
    <p>
      A metodologia do curso é <strong>prática, dinâmica e experiencial</strong>,
      focada no aprendizado real e aplicável.
    </p>
<br>
    <ul>
      <li>Exposição clara e objetiva dos conceitos</li>
      <li>Exercícios práticos individuais e em grupo</li>
      <li>Dinâmicas de vivência emocional e comportamental</li>
      <li>Exemplos reais do cotidiano pessoal e profissional</li>
      <li>Aplicação imediata das técnicas aprendidas</li>
    </ul>
<br>
    <p>
      O aluno não apenas aprende o conteúdo, mas desenvolve a capacidade
      de utilizá-lo conscientemente em diferentes contextos da vida.
    </p>
      <br>
      `,
      advertencias: `
      
      <h2>Conheça o Palestrante</h2>
      <br>
    <p>
      <strong>Dr. Paulo Takahashi</strong> atua há mais de duas décadas na área
      de desenvolvimento humano, comunicação e comportamento.
    </p>

    <p>
      Seu trabalho integra Programação Neurolinguística, psicologia aplicada
      e desenvolvimento pessoal, com uma abordagem ética, prática e
      orientada a resultados consistentes.
    </p>

    <p>
      Com uma didática clara e acessível, Dr. Paulo Takahashi conduz seus cursos e
      treinamentos criando um ambiente seguro, profissional e estimulante,
      favorecendo aprendizado profundo, reflexão e transformação real.
    </p>
<br>
<br>
      `
    },


configuracoes: {
  mostrarNome: true,
  mostrarPreco: false,
  mostrarResumo: false
},

   
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: ""
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


configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true
},

      
    destaque: false,
    mostrarlancamento: false,
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


configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true
},
       
    destaque: false,
    mostrarlancamento: false,
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


configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true
},
      
    destaque: false,
    mostrarlancamento: false,
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


configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true
},
       
    destaque: true,
    mostrarlancamento: false,
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
    imagem: "assets/img/equipe/paulo.jpg",
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
    texto: "Como treinador e palestrante, ajuda pessoas a desenvolverem uma comunicação eficaz em todos os âmbitos da vida, impulsionando o crescimento pessoal e profissional. É criador dos métodos COES e EVOLUI",
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

