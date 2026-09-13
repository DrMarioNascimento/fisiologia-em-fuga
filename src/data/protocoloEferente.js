// Operação Protocolo Eferente — revisão opt-in por eixo.
export const temasPorCurso = {
  ef: [
    { id: "celular", label: "Celular", emoji: "⚡", cor: "#67e8f9" },
    { id: "muscular", label: "Muscular", emoji: "💪", cor: "#fbbf24" },
    { id: "osteoarticular", label: "Osteoarticular", emoji: "🦴", cor: "#fdba74" },
    { id: "cardiovascular", label: "Cardiovascular", emoji: "❤️", cor: "#f87171" },
    { id: "respiratorio", label: "Respiratório", emoji: "🌬️", cor: "#93c5fd" },
    { id: "integracao", label: "Integração", emoji: "🔗", cor: "#c4b5fd" }
  ],
  fisio: [
    { id: "celular", label: "Celular", emoji: "⚡", cor: "#67e8f9" },
    { id: "muscular", label: "Muscular", emoji: "💪", cor: "#fbbf24" },
    { id: "cardiovascular", label: "Cardiovascular", emoji: "❤️", cor: "#f87171" },
    { id: "respiratorio", label: "Respiratório", emoji: "🌬️", cor: "#93c5fd" },
    { id: "integracao", label: "Integração", emoji: "🔗", cor: "#c4b5fd" }
  ]
};

const ef = {
  celular: [
    { tipo: "multipla", pergunta: "Você encolheu e está na face interna da membrana. Na despolarização rápida, o fluxo dominante é:", opcoes: ["K⁺ saindo", "Na⁺ entrando", "Ca²⁺ saindo", "Cl⁻ saindo"], correta: 1, dica: "O canal do limiar deixa entrar o íon concentrado no meio extra.", explicacao: "A despolarização rápida é a entrada de Na⁺." },
    { tipo: "verdadeiro", pergunta: "O SGLT usa o gradiente de Na⁺ criado pela Na⁺/K⁺-ATPase para levar glicose contra o próprio gradiente.", correta: true, dica: "Transporte ativo secundário.", explicacao: "A bomba monta o gradiente de Na⁺ que o SGLT aproveita." }
  ],
  muscular: [
    { tipo: "ordem", pergunta: "Do potencial na membrana até a força, ordene o acoplamento excitação–contração:", itens: ["Potencial de ação na sarcolema", "Invasão pelos túbulos T", "Liberação de Ca²⁺ pelo retículo", "Ca²⁺ liga à troponina", "Pontes cruzadas e encurtamento"], correta: [0, 1, 2, 3, 4], dica: "O sinal elétrico entra fundo antes do cálcio.", explicacao: "PA → túbulos T → Ca²⁺ → troponina → pontes cruzadas." },
    { tipo: "multipla", pergunta: "Na curva de Hill, ao aumentar a carga a velocidade de encurtamento:", opcoes: ["Diminui", "Sobe sem limite", "Depende só do ATP", "Não muda"], correta: 0, dica: "Barra mais pesada, encurtamento mais lento.", explicacao: "Mais carga, menos velocidade de encurtamento." }
  ],
  osteoarticular: [
    { tipo: "multipla", pergunta: "Pela Lei de Wolff, o osso sob impacto habitual tende a:", opcoes: ["Remodelar-se na direção das cargas", "Ignorar a força mecânica", "Responder só à calcitonina", "Perder massa com hipertrofia"], correta: 0, dica: "Carga repetida é recado ósseo.", explicacao: "A arquitetura óssea acompanha as cargas habituais." },
    { tipo: "verdadeiro", pergunta: "O osteoclasto reabsorve matriz e libera Ca²⁺; o PTH favorece essa via quando a calcemia cai.", correta: true, dica: "Separe quem quebra de quem constrói o osso.", explicacao: "PTH aumenta a reabsorção óssea mediada por osteoclastos." }
  ],
  cardiovascular: [
    { tipo: "multipla", pergunta: "A relação que melhor descreve a pressão arterial média é:", opcoes: ["PAM ≈ DC × RPT", "PAM = SV ÷ FC", "PAM = VO₂ × Hb", "PAM = retorno − ventilação"], correta: 0, dica: "Fluxo vezes resistência.", explicacao: "PAM resulta, de forma simplificada, de DC × RPT." },
    { tipo: "verdadeiro", pergunta: "Pela lei de Poiseuille, reduzir o raio arteriolar aumenta muito a resistência ao fluxo.", correta: true, dica: "O raio entra elevado a uma potência.", explicacao: "Resistência varia com o inverso da quarta potência do raio." }
  ],
  respiratorio: [
    { tipo: "multipla", pergunta: "Para o ar entrar nos alvéolos, a pressão alveolar precisa ficar:", opcoes: ["Menor que a atmosférica", "Maior que a atmosférica", "Igual à pressão arterial", "Igual à pressão oncotica"], correta: 0, dica: "O fluxo vai do maior para o menor potencial de pressão.", explicacao: "A expansão torácica deixa a pressão alveolar subatmosférica." },
    { tipo: "multipla", pergunta: "No exercício intenso a curva da Hb desloca-se à direita porque:", opcoes: ["Sobem temperatura, CO₂ e [H⁺]", "Falta ferro", "O pH sobe e prende o O₂", "A ventilação some"], correta: 0, dica: "Músculo quente e ácido pede descarga de O₂.", explicacao: "Temperatura, CO₂ e acidose favorecem a cessão de O₂." }
  ],
  integracao: [
    { tipo: "multipla", pergunta: "Pelo princípio de Fick, VO₂ é:", opcoes: ["DC × (CaO₂ − CvO₂)", "FC × RPT", "Ventilação × hematócrito", "PAM ÷ SV"], correta: 0, dica: "Oferta de sangue vezes extração.", explicacao: "VO₂ = débito cardíaco vezes a diferença a–v de oxigênio." },
    { tipo: "verdadeiro", pergunta: "Se o DC não sobe o bastante e o VO₂ se mantém, a diferença a–vO₂ precisa aumentar.", correta: true, dica: "Rearranje a equação de Fick.", explicacao: "Com DC limitado, a extração sobe para sustentar o consumo." }
  ]
};

const fisio = {
  celular: [
    { tipo: "multipla", pergunta: "Na reabilitação de um músculo descondicionado, o potencial de repouso depende sobretudo de:", opcoes: ["Alta permeabilidade ao K⁺", "Canais de Na⁺ abertos o tempo todo", "Bomba de Ca²⁺ da membrana", "Lactato plasmático isolado"], correta: 0, dica: "Quem vaza em repouso determina o valor negativo.", explicacao: "Em repouso a membrana é bem mais permeável ao K⁺." },
    { tipo: "verdadeiro", pergunta: "Sem a Na⁺/K⁺-ATPase, o gradiente que alimenta cotransportes como o SGLT se perde com o tempo.", correta: true, dica: "Secundário vive do primário.", explicacao: "Sem a bomba o Na⁺ extra se equilibra e o SGLT perde força motriz." }
  ],
  muscular: [
    { tipo: "multipla", pergunta: "Ao alongar além do comprimento ótimo do sarcômero, a força ativa cai porque:", opcoes: ["Diminui a sobreposição útil actina–miosina", "Some o ATP instantaneamente", "O túbulo T deixa de existir", "A troponina vira tropomiosina"], correta: 0, dica: "Força ativa pede pontes cruzadas possíveis.", explicacao: "Sarcômero longo demais reduz pontes cruzadas." },
    { tipo: "ordem", pergunta: "Ordene o recrutamento típico ao aumentar a demanda de um exercício terapêutico:", itens: ["Unidades motoras pequenas e lentas", "Unidades intermediárias", "Unidades rápidas e glicolíticas"], correta: [0, 1, 2], dica: "Princípio do tamanho.", explicacao: "Primeiro unidades pequenas; depois as rápidas e fatigáveis." }
  ],
  cardiovascular: [
    { tipo: "multipla", pergunta: "Ao sentar um paciente acamado, o que mais ameaça a pressão no primeiro minuto é:", opcoes: ["Queda do retorno venoso por pooling nas pernas", "Explosão do volume sistólico", "Queda isolada da viscosidade", "Aumento imediato da hemoglobina"], correta: 0, dica: "Sangue parado nas veias não volta ao coração.", explicacao: "A ortostase reduz pré-carga, débito e PAM." },
    { tipo: "verdadeiro", pergunta: "Em reabilitação cardíaca, elevar só a FC sem volume sistólico suficiente limita o débito cardíaco.", correta: true, dica: "DC = FC × VS.", explicacao: "Frequência alta com VS baixo não garante oferta." }
  ],
  respiratorio: [
    { tipo: "multipla", pergunta: "Na inspiração em repouso, o músculo que mais aumenta o volume torácico é:", opcoes: ["Diafragma", "Peitoral maior", "Trapézio", "Reto femoral"], correta: 0, dica: "Músculo em cúpula que desce.", explicacao: "O diafragma é o principal inspiratório em repouso." },
    { tipo: "verdadeiro", pergunta: "Uma queda isolada da saturação da Hb reduz o CaO₂ mesmo com ventilação minuto alta.", correta: true, dica: "Conteúdo depende de Hb e de quanto O₂ ela carrega.", explicacao: "Hiperventilar não recompõe sozinha uma saturação baixa." }
  ],
  integracao: [
    { tipo: "multipla", pergunta: "Num paciente descondicionado, o mesmo VO₂ com DC limitado sobe na extração. Isso cabe em:", opcoes: ["Fick: VO₂ = DC × (CaO₂ − CvO₂)", "Poiseuille só com raio", "Lei de Wolff", "Só frequência respiratória"], correta: 0, dica: "Dois caminhos para o mesmo consumo.", explicacao: "Fick permite manter VO₂ com mais extração." },
    { tipo: "ordem", pergunta: "Ordene o caminho do O₂ para escapar do corpo:", itens: ["Ventilação alveolar", "Saturação da hemoglobina", "Débito cardíaco até o músculo", "Extração tecidual (diferença a–v)"], correta: [0, 1, 2, 3], dica: "Do ar ambiente até a mitocôndria.", explicacao: "Ventilação → Hb → DC → extração." }
  ]
};

export const puzzlesPorTema = { ef, fisio };

export function montarOperacao(cursoId, temas) {
  const banco = puzzlesPorTema[cursoId] || {};
  const escolhidos = [...new Set(temas)].filter((id) => banco[id]);
  const puzzles = escolhidos.flatMap((id) => banco[id].map((puzzle) => ({ ...puzzle, tema: id })));
  return { temas: escolhidos, puzzles, tempoPorQuestao: 60, tempoSegundos: puzzles.length * 60 };
}
