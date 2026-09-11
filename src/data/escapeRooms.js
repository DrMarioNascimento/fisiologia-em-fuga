// Escape rooms de Fisiologia — uma sala por unidade do repositório
// fisiologia-interativa, separados em Educação Física (6 eixos) e Fisioterapia (5 unidades).
// Conteúdo baseado nos simuladores e objetivos pedagógicos do README do repositório.

export const cursos = [
  {
    id: "ef",
    nome: "Educação Física",
    desc: "Seis eixos: do potencial de ação à integração cardiorrespiratória.",
    cor: "#c8a24a",
  },
  {
    id: "fisio",
    nome: "Fisioterapia",
    desc: "Cinco unidades: sem o eixo osteoarticular, foco clínico.",
    cor: "#3b8fb0",
  },
];

// Tipos de puzzle: multipla | verdadeiro | ordem
export const rooms = [
  {
    id: "celular",
    imagem: "celular.webp",
    cursos: ["ef", "fisio"],
    eixo: "Fisiologia celular, transporte de substâncias e potenciais de ação",
    titulo: "A Célula Sitiada",
    cenario:
      "Você está preso dentro de um neurônio em repouso. Para escapar, precisa dominar os fluxos iônicos e os transportes da membrana.",
    puzzles: [
      {
        tipo: "ordem",
        pergunta: "Ordene as fases do potencial de ação, do repouso ao fim:",
        itens: [
          "Repouso (-70 mV)",
          "Atingir o limiar",
          "Despolarização (entrada de Na⁺)",
          "Pico (+30 mV)",
          "Repolarização (saída de K⁺)",
          "Hiperpolarização",
        ],
        correta: [0, 1, 2, 3, 4, 5],
        explicacao:
          "O potencial de ação segue: repouso → limiar → despolarização por Na⁺ → pico → repolarização por K⁺ → hiperpolarização.",
      },
      {
        tipo: "multipla",
        pergunta: "O cotransporte SGLT (glicose + Na⁺) depende de qual gradiente?",
        opcoes: [
          "Gradiente de K⁺",
          "Gradiente de Na⁺ estabelecido pela Na⁺/K⁺-ATPase",
          "Gradiente de Ca²⁺",
          "Gradiente de Cl⁻",
        ],
        correta: 1,
        explicacao:
          "A Na⁺/K⁺-ATPase mantém o gradiente de Na⁺ que energiza o cotransporte secundário da glicose pelo SGLT.",
      },
      {
        tipo: "multipla",
        pergunta: "No potencial de ação cardíaco, a fase 2 (platô) é sustentada principalmente por:",
        opcoes: ["Saída de K⁺", "Entrada de Ca²⁺", "Entrada de Na⁺", "Saída de Cl⁻"],
        correta: 1,
        explicacao:
          "O platô do cardiomiócito é mantido pela entrada de Ca²⁺ pelos canais lentos — garante o período refratário longo.",
      },
      {
        tipo: "verdadeiro",
        pergunta: "A Na⁺/K⁺-ATPase consome ATP para manter os gradientes iônicos de repouso.",
        correta: true,
        explicacao: "Verdadeiro. Ela bombeia 3 Na⁺ para fora e 2 K⁺ para dentro, gastando ATP.",
      },
      {
        tipo: "multipla",
        pergunta: "A condução saltatória ocorre em:",
        opcoes: [
          "Fibras não mielinizadas",
          "Nódulos de Ranvier de fibras mielinizadas",
          "Sinapses químicas",
          "Músculo liso",
        ],
        correta: 1,
        explicacao:
          "Na mielina, o impulso salta de nódulo em nódulo de Ranvier — condução mais rápida e econômica.",
      },
    ],
  },
  {
    id: "muscular",
    imagem: "muscular.webp",
    cursos: ["ef", "fisio"],
    eixo: "Excitabilidade e sistema muscular",
    titulo: "O Músculo em Silêncio",
    cenario:
      "Um sarcômero parado. As pontes cruzadas travaram. Reconstrua a sequência da contração para libertar o movimento.",
    puzzles: [
      {
        tipo: "ordem",
        pergunta: "Ordene a sequência da contração muscular esquelética:",
        itens: [
          "Potencial de ação chega ao nervo",
          "Liberação de ACh na placa motora",
          "Potencial de ação no músculo",
          "Liberação de Ca²⁺ do retículo",
          "Formação de pontes cruzadas",
          "Relaxamento (bomba de Ca²⁺)",
        ],
        correta: [0, 1, 2, 3, 4, 5],
        explicacao:
          "PA no nervo → ACh → PA no músculo → Ca²⁺ do retículo → pontes cruzadas → relaxamento.",
      },
      {
        tipo: "multipla",
        pergunta: "O Ca²⁺ se liga a qual proteína para expor os sítios de actina?",
        opcoes: ["Miosina", "Troponina", "Distrofina", "Titina"],
        correta: 1,
        explicacao:
          "O Ca²⁺ liga-se à troponina C, que move a tropomiosina e expõe os sítios de ligação da miosina na actina.",
      },
      {
        tipo: "multipla",
        pergunta: "Na relação força-velocidade, a força máxima ocorre em:",
        opcoes: [
          "Encurtamento máximo",
          "Contração isométrica (velocidade zero)",
          "Velocidade máxima",
          "Contração excêntrica",
        ],
        correta: 1,
        explicacao:
          "Quanto menor a velocidade de encurtamento, maior a força. No isométrico (v=0), a força é máxima.",
      },
      {
        tipo: "verdadeiro",
        pergunta: "O ATP é necessário tanto para a contração quanto para o relaxamento muscular.",
        correta: true,
        explicacao:
          "Verdadeiro. O ATP move as pontes cruzadas e também alimenta a bomba de Ca²⁺ que relaxa o músculo.",
      },
      {
        tipo: "multipla",
        pergunta: "No sarcômero que contrai, a banda que se encurta é a:",
        opcoes: ["Banda A", "Banda I (e zona H)", "Linha Z", "Rede sarcoplasmática"],
        correta: 1,
        explicacao:
          "A banda I e a zona H encurtam; a banda A (comprimento da miosina) permanece constante.",
      },
    ],
  },
  {
    id: "osteoarticular",
    imagem: "osteoarticular.webp",
    cursos: ["ef"],
    eixo: "Sistema osteoarticular",
    titulo: "O Osso que Se Reconstrói",
    cenario:
      "O cálcio plasmático está instável. Para sair deste quarto ósseo, estabilize a homeostase do cálcio.",
    puzzles: [
      {
        tipo: "multipla",
        pergunta: "Qual hormônio AUMENTA o cálcio plasmático?",
        opcoes: ["Calcitonina", "Paratormônio (PTH)", "Insulina", "Tiroxina"],
        correta: 1,
        explicacao:
          "O PTH eleva o cálcio plasmático: reabsorção óssea, renal e ativa a vitamina D.",
      },
      {
        tipo: "multipla",
        pergunta: "A calcitonina faz o quê com o cálcio plasmático?",
        opcoes: ["Aumenta", "Diminui", "Não altera", "Estabiliza em zero"],
        correta: 1,
        explicacao:
          "A calcitonina, da tireoide, diminui o cálcio plasmático inibindo os osteoclastos.",
      },
      {
        tipo: "ordem",
        pergunta: "Ordene a ativação da vitamina D:",
        itens: [
          "Exposição solar na pele",
          "Conversão no fígado (25-OH)",
          "Conversão no rim (1,25-OH, forma ativa)",
          "Aumento da absorção intestinal de cálcio",
        ],
        correta: [0, 1, 2, 3],
        explicacao:
          "Pele → fígado → rim → intestino. A forma ativa (calcitriol) aumenta a absorção intestinal de cálcio.",
      },
      {
        tipo: "verdadeiro",
        pergunta: "O osso é remodelado continuamente por osteoclastos (reabsorção) e osteoblastos (formação).",
        correta: true,
        explicacao:
          "Verdadeiro. O remodelamento equilibrra reabsorção (osteoclastos) e formação (osteoblastos).",
      },
    ],
  },
  {
    id: "cardiovascular",
    imagem: "cardiovascular.webp",
    cursos: ["ef", "fisio"],
    eixo: "Sistema cardiovascular",
    titulo: "O Circuito da Pressão",
    cenario:
      "A pressão arterial caiu. Para escapar do circuito, restaure débito, resistência e o ciclo cardíaco.",
    puzzles: [
      {
        tipo: "multipla",
        pergunta: "Se PA = DC × RPT e o débito cardíaco cai (RPT constante), a pressão arterial:",
        opcoes: ["Aumenta", "Cai", "Não muda", "Dobra"],
        correta: 1,
        explicacao: "PA é diretamente proporcional ao DC. Se DC cai, PA cai.",
      },
      {
        tipo: "multipla",
        pergunta: "Pela Lei de Poiseuille, o fluxo é proporcional ao raio do vaso elevado a:",
        opcoes: ["1", "2", "4", "10"],
        correta: 2,
        explicacao:
          "O fluxo ∝ r⁴. Pequenas mudanças no raio causam grandes mudanças no fluxo e na resistência.",
      },
      {
        tipo: "ordem",
        pergunta: "Ordene o ciclo cardíaco:",
        itens: [
          "Diástole (enchimento ventricular)",
          "Sístole atrial",
          "Contração isovolumétrica",
          "Ejeção ventricular",
          "Relaxamento isovolumétrico",
        ],
        correta: [0, 1, 2, 3, 4],
        explicacao:
          "Enchimento → sístole atrial → contração isovolumétrica → ejeção → relaxamento isovolumétrico.",
      },
      {
        tipo: "multipla",
        pergunta: "O retorno venoso é determinado principalmente por:",
        opcoes: [
          "A frequência cardíaca",
          "O gradiente de pressão venosa (PVC − pressão atrial)",
          "A saturação de O₂",
          "O volume sistólico",
        ],
        correta: 1,
        explicacao:
          "O retorno venoso segue o gradiente entre a pressão venosa sistêmica e a pressão atrial direita.",
      },
      {
        tipo: "verdadeiro",
        pergunta: "A pressão de pulso é a diferença entre a pressão sistólica e a diastólica.",
        correta: true,
        explicacao: "Verdadeiro. PP = PAS − PAD.",
      },
    ],
  },
  {
    id: "respiratorio",
    imagem: "respiratorio.webp",
    cursos: ["ef", "fisio"],
    eixo: "Sistema respiratório",
    titulo: "O Fôlego Perdido",
    cenario:
      "A ventilação parou. Para recuperar o fôlego e sair, domine mecânica, gases e a hemoglobina.",
    puzzles: [
      {
        tipo: "multipla",
        pergunta: "A ventilação minuto é igual a:",
        opcoes: [
          "Volume corrente × frequência respiratória",
          "Volume corrente + reserva inspiratória",
          "Complacência × resistência",
          "PO₂ × saturação",
        ],
        correta: 0,
        explicacao: "VE = VC × FR. É o volume de ar movido por minuto.",
      },
      {
        tipo: "multipla",
        pergunta: "A curva de dissociação da hemoglobina desloca para a DIREITA com:",
        opcoes: [
          "Aumento do pH e queda de temperatura",
          "Diminuição do pH (mais CO₂), mais temperatura e mais 2,3-BPG",
          "Aumento da PO₂ alveolar",
          "Queda do 2,3-BPG",
        ],
        correta: 1,
        explicacao:
          "Mais CO₂ (menor pH), mais temperatura e mais 2,3-BPG deslocam a curva à direita — libera mais O₂ ao tecido.",
      },
      {
        tipo: "ordem",
        pergunta: "Ordene o ciclo respiratório:",
        itens: [
          "Inspiração: músculos contraem, volume aumenta",
          "Pressão alveolar fica negativa",
          "Ar entra nos pulmões",
          "Expiração: músculos relaxam, volume diminui",
          "Ar sai dos pulmões",
        ],
        correta: [0, 1, 2, 3, 4],
        explicacao:
          "Aumento de volume → pressão negativa → ar entra → relaxamento → ar sai. É o gradiente de pressão que move o ar.",
      },
      {
        tipo: "verdadeiro",
        pergunta: "Na fibrose pulmonar, a complacência pulmonar diminui.",
        correta: true,
        explicacao:
          "Verdadeiro. O tecido endurecido cede menos por unidade de pressão — menor complacência.",
      },
    ],
  },
  {
    id: "integracao",
    imagem: "integracao.webp",
    cursos: ["ef", "fisio"],
    eixo: "Integração cardiorrespiratória",
    titulo: "A Marcha do Oxigênio",
    cenario:
      "O oxigênio parou entre o alvéolo e o músculo. Conecte débito, extração e consumo para escapar.",
    puzzles: [
      {
        tipo: "multipla",
        pergunta: "A equação de Fick é:",
        opcoes: [
          "VO₂ = DC × (CaO₂ − CvO₂)",
          "VO₂ = FC × PAS",
          "VO₂ = VE × FR",
          "VO₂ = PA × RPT",
        ],
        correta: 0,
        explicacao:
          "VO₂ = DC × D(a−v)O₂. O consumo de O₂ é débito cardíaco vezes a extração arteriovenosa.",
      },
      {
        tipo: "ordem",
        pergunta: "Ordene o trajeto do oxigênio até o músculo:",
        itens: [
          "Ar alveolar",
          "Sangue arterial (pulmão)",
          "Coração (débito cardíaco)",
          "Capilares teciduais",
          "Extração tecidual (diferença a−vO₂)",
        ],
        correta: [0, 1, 2, 3, 4],
        explicacao: "Alvéolo → sangue arterial → coração → capilares → extração no tecido.",
      },
      {
        tipo: "multipla",
        pergunta: "Se a extração tecidual aumenta mantendo o débito cardíaco, o VO₂:",
        opcoes: ["Aumenta", "Diminui", "Não muda", "Zera"],
        correta: 0,
        explicacao:
          "Pela equação de Fick, maior diferença a−vO₂ com mesmo DC eleva o VO₂.",
      },
      {
        tipo: "verdadeiro",
        pergunta: "No exercício, o consumo de O₂ sobe linearmente com o débito cardíaco.",
        correta: true,
        explicacao:
          "Verdadeiro. DC e VO₂ aumentam juntos até o VO₂max, limite aeróbio do indivíduo.",
      },
    ],
  },
];

const tutores = {
  ef: {
    nome: "Educação Física",
    url: "https://drmarionascimento.github.io/fisiologia-interativa/tutor-ef.html",
  },
  fisio: {
    nome: "Fisioterapia",
    url: "https://drmarionascimento.github.io/fisiologia-interativa/tutor-fisio.html",
  },
};

const pilotosCardiovasculares = {
  ef: {
    piloto: true,
    titulo: "A Prova do Débito",
    cenario:
      "Durante um teste incremental, o fluxo precisa acompanhar a demanda muscular. Abra os cinco cadeados conectando frequência cardíaca, volume sistólico, retorno venoso e resistência vascular.",
    puzzles: [
      {
        tipo: "multipla",
        pergunta: "No início do exercício dinâmico, o débito cardíaco aumenta principalmente porque:",
        opcoes: [
          "A frequência cardíaca e o volume sistólico aumentam",
          "A resistência periférica total sempre dobra",
          "O retorno venoso deixa de participar",
          "A pressão arterial diastólica determina sozinha o fluxo",
        ],
        correta: 0,
        dica: "Retome a relação: débito cardíaco = frequência cardíaca × volume sistólico.",
        explicacao:
          "O débito cardíaco resulta da frequência cardíaca multiplicada pelo volume sistólico; ambos tendem a aumentar no início do exercício.",
      },
      {
        tipo: "verdadeiro",
        pergunta: "A bomba muscular dos membros inferiores pode favorecer o retorno venoso durante o exercício.",
        correta: true,
        dica: "Pense no efeito da contração sobre as veias entre válvulas.",
        explicacao:
          "A contração comprime as veias e, com o auxílio das válvulas, impulsiona o sangue em direção ao coração.",
      },
      {
        tipo: "ordem",
        pergunta: "Ordene a resposta que sustenta o aumento do fluxo para o músculo ativo:",
        itens: [
          "Comando motor e ativação autonômica",
          "Aumento da frequência e da contratilidade",
          "Aumento do débito cardíaco",
          "Maior oferta de sangue aos tecidos ativos",
        ],
        correta: [0, 1, 2, 3],
        dica: "Comece pelo sinal que antecede a resposta do coração.",
        explicacao:
          "O comando central e a ativação autonômica elevam frequência e contratilidade, aumentando o débito e a oferta de sangue.",
      },
      {
        tipo: "multipla",
        pergunta: "Pela relação de Poiseuille, o fluxo é proporcional ao raio do vaso elevado a:",
        opcoes: ["1", "2", "4", "8"],
        correta: 2,
        dica: "Pequenas alterações do raio produzem grandes mudanças de fluxo.",
        explicacao:
          "O fluxo é proporcional à quarta potência do raio. Por isso, o calibre vascular tem grande efeito sobre a resistência.",
      },
      {
        tipo: "multipla",
        pergunta: "Se o débito cardíaco aumenta e a resistência periférica total não cresce na mesma proporção, a pressão arterial média tende a:",
        opcoes: ["Aumentar", "Zerar", "Tornar-se independente do débito", "Ser igual à frequência cardíaca"],
        correta: 0,
        dica: "Use a relação aproximada: PAM = DC × RPT.",
        explicacao:
          "Pela relação PAM = DC × RPT, o aumento do débito favorece a elevação da pressão média quando não é totalmente compensado pela resistência.",
      },
    ],
  },
  fisio: {
    piloto: true,
    titulo: "O Desafio da Mudança Postural",
    cenario:
      "Em uma avaliação funcional didática, a passagem para a posição em pé altera o retorno venoso e a pressão arterial. Abra os cinco cadeados reconstruindo a resposta cardiovascular.",
    puzzles: [
      {
        tipo: "multipla",
        pergunta: "Logo após levantar-se, o acúmulo transitório de sangue nos membros inferiores tende a:",
        opcoes: [
          "Reduzir o retorno venoso",
          "Aumentar imediatamente o volume sistólico",
          "Eliminar o gradiente de pressão",
          "Aumentar diretamente a saturação arterial",
        ],
        correta: 0,
        dica: "Observe o caminho do sangue dos membros inferiores até o coração.",
        explicacao:
          "O acúmulo gravitacional reduz temporariamente o retorno venoso, o enchimento ventricular e o volume sistólico.",
      },
      {
        tipo: "ordem",
        pergunta: "Ordene a cadeia hemodinâmica inicial após a redução do retorno venoso:",
        itens: [
          "Menor enchimento ventricular",
          "Menor volume sistólico",
          "Menor débito cardíaco",
          "Tendência de queda da pressão arterial",
        ],
        correta: [0, 1, 2, 3],
        dica: "Comece pela pré-carga e termine na pressão.",
        explicacao:
          "Menor enchimento reduz o volume sistólico; isso diminui o débito cardíaco e favorece a queda da pressão arterial.",
      },
      {
        tipo: "verdadeiro",
        pergunta: "A ativação da bomba muscular pode auxiliar o retorno venoso durante a mobilização.",
        correta: true,
        dica: "Considere a compressão das veias pela musculatura ativa.",
        explicacao:
          "O movimento e a contração muscular comprimem veias e ajudam o sangue a retornar ao coração, com participação das válvulas venosas.",
      },
      {
        tipo: "multipla",
        pergunta: "Uma vasoconstrição arteriolar compensatória tende a:",
        opcoes: [
          "Aumentar a resistência periférica total",
          "Reduzir a resistência a zero",
          "Interromper o ciclo cardíaco",
          "Substituir o débito cardíaco",
        ],
        correta: 0,
        dica: "Menor raio vascular significa maior resistência.",
        explicacao:
          "A redução do raio arteriolar eleva a resistência periférica total e contribui para sustentar a pressão arterial.",
      },
      {
        tipo: "multipla",
        pergunta: "Para interpretar a pressão arterial junto ao débito cardíaco, a relação mais adequada é:",
        opcoes: [
          "PAM ≈ DC × RPT",
          "PAM = frequência cardíaca ÷ volume sistólico",
          "PAM = saturação × ventilação",
          "PAM = retorno venoso − frequência cardíaca",
        ],
        correta: 0,
        dica: "A pressão depende do fluxo bombeado e da resistência vascular.",
        explicacao:
          "A pressão arterial média pode ser compreendida, de forma simplificada, como o produto do débito cardíaco pela resistência periférica total.",
      },
    ],
  },
};

function comporSala(base, cursoId) {
  if (!base) return undefined;
  const curso = cursos.find((item) => item.id === cursoId);
  if (!curso || !base.cursos.includes(cursoId)) return undefined;
  const especifica = base.id === "cardiovascular" ? pilotosCardiovasculares[cursoId] : null;
  const sala = {
    ...base,
    ...(especifica || {}),
    cursoId,
    cursoNome: curso.nome,
    percursoId: `${cursoId}-${base.id}`,
    tutorUrl: tutores[cursoId].url,
  };
  return {
    ...sala,
    tempoPorQuestao: 60,
    tempoSegundos: sala.puzzles.length * 60,
  };
}

export function roomsPorCurso(cursoId) {
  return rooms
    .filter((room) => room.cursos.includes(cursoId))
    .map((room) => comporSala(room, cursoId));
}

export function getRoom(roomId, cursoId) {
  const base = rooms.find((room) => room.id === roomId);
  const percurso = cursoId || base?.cursos?.[0];
  return comporSala(base, percurso);
}
