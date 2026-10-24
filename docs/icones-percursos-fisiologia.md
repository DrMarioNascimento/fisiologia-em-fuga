# Guia visual — ícones e ilustrações de Percursos de Fisiologia

Autor: Prof. Mário César Nascimento. PhD ©

Este guia descreve os nove temas, as doze unidades e os controles do quiz. É uma especificação para produzir os elementos visuais; as figuras propostas ainda não foram geradas nem substituíram os símbolos do piloto. Os títulos e as descrições ficam em HTML, fora da imagem.

## Identidade comum à coleção

A referência é o print dos cards: fundo branco, caixa do símbolo em verde muito claro, cantos arredondados e desenho simples em verde, violeta ou cobre. A proposta mantém essa linguagem e substitui símbolos abstratos por pequenas figuras reconhecíveis.

- Formato quadrado, composição central, fundo transparente, margem livre de 15% em todos os lados.
- Preferir SVG para ícones desenhados; se gerar imagem raster, produzir PNG 1024 × 1024 com transparência real.
- Desenho vetorial de contorno, curvas suaves, extremidades arredondadas e espessura consistente. Usar cerca de 2 px em uma grade de 48 px, com ajustes ópticos na redução.
- No máximo três elementos principais. Evitar cenário completo, rostos detalhados, texturas, letras, números, assinatura, molduras e marca-d'água dentro da imagem.
- Figura principal ocupa cerca de 70% do quadrado. Não cortar mãos, pés ou objetos.
- Verde: `#235F53`; violeta: `#675296`; cobre: `#A66639`. O fundo da caixa, aplicado pela interface, é verde muito claro `#EDF0E6`.
- Cada tema tem uma cor predominante. A cor distingue visualmente os cards, mas não identifica curso, gravidade, acerto ou erro.
- Sem fundo fotográfico, iluminação dramática, brilho intenso ou sombra projetada. O aspecto deve permanecer leve e legível.
- Pictograma simples: caixa de 48–56 px no card. Ilustração com personagem ou vários objetos: caixa de 80–96 px. Não comprimir uma cena complexa no espaço de um glifo.
- A figura complementa o título. O card continua compreensível se ela não carregar. Na interface, imagens decorativas junto ao título usam `alt=""`; botões que contêm apenas símbolo precisam de nome acessível.

### Prompt-base para usar com cada descrição

> Criar uma ilustração em estilo de ícone vetorial para um card educacional de Fisiologia. Formato quadrado, fundo realmente transparente, composição centralizada com 15% de margem livre. Traços de espessura uniforme, curvas e extremidades arredondadas, formas limpas, preenchimentos discretos e poucos detalhes. Usar predominantemente [COR DO TEMA]. Sem texto, letras, números, logotipos, assinatura, moldura, marca-d'água, fundo de cenário ou sombra projetada. Manter legibilidade quando reduzida a 80 pixels. Representar: [DESCRIÇÃO DO TEMA]. O resultado deve pertencer à mesma coleção visual dos outros ícones.

## Nove histórias — todos os alunos veem a mesma coleção

### 1. A competição começa antes da largada

- **Símbolo atual:** seta diagonal para cima e à direita.
- **Cor:** verde `#235F53`.
- **Figura proposta:** atleta em posição de preparação, com um pé à frente e o tronco levemente inclinado. Uma curta linha de largada sob os pés e um pequeno calendário atrás do ombro indicam que o desempenho é construído antes da prova. O calendário não tem números, apenas pequenos quadrados. A figura humana é simplificada e sem detalhes faciais.
- **Versão mínima:** tênis esportivo diante de uma linha de largada, acompanhado de um pequeno calendário.
- **Ideia comunicada:** preparação e continuidade, não vitória garantida.
- **Evitar:** pódio, troféu, medalha de campeão e multidão.
- **Nome sugerido:** `tema-largada.svg` ou `tema-largada.png`.

### 2. Aprender um movimento

- **Símbolo atual:** dois círculos concêntricos.
- **Cor:** violeta `#675296`.
- **Figura proposta:** estudante com braços posicionados para receber uma bola. Uma curva curta, com uma única ponta de seta, indica a trajetória da bola em direção às mãos. O corpo aparece em leve rotação, sugerindo ajuste de posição. Uma marca muito discreta perto das mãos destaca o ponto de contato. Sem uniforme de equipe ou indicação de gênero obrigatório.
- **Versão mínima:** duas mãos abertas, uma bola e uma pequena curva de aproximação.
- **Ideia comunicada:** percepção, coordenação e aprendizagem da habilidade.
- **Evitar:** pose de campeão, bola em vários lugares simultaneamente e muitos rastros de movimento.
- **Nome sugerido:** `tema-movimento.svg` ou `tema-movimento.png`.

### 3. O caminho até a alta

- **Símbolo atual:** contorno de uma casa.
- **Cor:** cobre `#A66639`.
- **Figura proposta:** pessoa caminhando em direção a uma porta aberta, com uma pequena casa além da porta. A postura é tranquila e o passo curto. O conjunto sugere retorno às atividades e ao ambiente doméstico. A pessoa permanece no caminho, sem selo de aprovação ou símbolo que declare alta concedida.
- **Versão mínima:** porta aberta, uma pegada orientada para a saída e contorno pequeno de casa.
- **Ideia comunicada:** recuperação funcional e preparação para retorno ao cotidiano.
- **Evitar:** cruz vermelha, selo “apto”, tique de liberação, profissional prescrevendo ou cadeira de rodas obrigatória.
- **Nome sugerido:** `tema-alta.svg` ou `tema-alta.png`.

### 4. Mais força, novos desafios

- **Símbolo atual:** seta vertical para cima.
- **Cor:** cobre `#A66639`.
- **Figura proposta:** braço e antebraço estilizados sustentando um halter de tamanho moderado, com uma pequena seta ascendente ao lado. A anatomia é simplificada, sem músculos exagerados, veias ou contornos de fisiculturista. O halter deve ser reconhecível mesmo em tamanho pequeno.
- **Versão mínima:** halter horizontal e uma seta curta de progressão.
- **Ideia comunicada:** produção de força e evolução com a prática.
- **Evitar:** pesos extremos, músculos gigantes e estética de suplemento ou propaganda de academia.
- **Nome sugerido:** `tema-forca.svg` ou `tema-forca.png`.

### 5. Crescer e se movimentar

- **Símbolo atual:** estrela de quatro pontas.
- **Cor:** verde `#235F53`.
- **Figura proposta:** duas silhuetas juvenis de alturas discretamente diferentes realizando movimentos diferentes, lado a lado e em posições equivalentes. Uma pequena haste com duas folhas aparece entre elas, como sinal de crescimento. Nenhuma figura ocupa um pódio ou posição superior. Não criar uma sequência que sugira que todas as pessoas amadurecem no mesmo ritmo.
- **Versão mínima:** duas silhuetas de alturas diferentes e uma pequena folha.
- **Ideia comunicada:** crescimento e diversidade de trajetórias.
- **Evitar:** escala de comparação de valor, régua numerada, transformação de criança em adulto numa única seta e exposição de características íntimas.
- **Nome sugerido:** `tema-crescer.svg` ou `tema-crescer.png`.

### 6. Voltar a se movimentar

- **Símbolo atual:** seta circular de retorno.
- **Cor:** violeta `#675296`.
- **Figura proposta:** perna e pé simplificados iniciando um passo, com o calcanhar levemente elevado. Uma seta curva acompanha o gesto sem fechar completamente o círculo. Duas marcas curtas no chão sugerem continuidade gradual. Não usar órtese, muleta ou gesso como requisito, porque o tema é recuperação do movimento e não um dispositivo específico.
- **Versão mínima:** pé em passo e seta curva de retomada.
- **Ideia comunicada:** retomada e recuperação funcional ao longo do tempo.
- **Evitar:** osso partido, raio de dor e seta que prometa recuperação instantânea.
- **Nome sugerido:** `tema-retorno.svg` ou `tema-retorno.png`.

### 7. O desafio de uma prova longa

- **Símbolo atual:** duas linhas onduladas paralelas.
- **Cor:** violeta `#675296`.
- **Figura proposta:** pequeno corredor seguindo um percurso sinuoso que ocupa a parte inferior do ícone. O caminho faz duas curvas amplas e termina em uma discreta bandeira sem inscrições. O corredor ocupa apenas uma parte da composição, permitindo que a extensão do percurso seja reconhecida. Não há montanha, cidade ou paisagem completa.
- **Versão mínima:** caminho sinuoso com duas pegadas e uma bandeira pequena.
- **Ideia comunicada:** sustentação do esforço e percurso prolongado.
- **Evitar:** múltiplos corredores, mapa detalhado e relógio com números minúsculos.
- **Nome sugerido:** `tema-distancia.svg` ou `tema-distancia.png`.

### 8. Um dia em movimento

- **Símbolo atual:** sol com raios curtos.
- **Cor:** cobre `#A66639`.
- **Figura proposta:** estudante com mochila pequena caminhando sob um sol discreto. Uma bola ao lado do pé indica que o dia inclui brincadeira ou atividade física. A mochila e a bola têm formas simples, sem marcas. A cena deve parecer um único conjunto compacto, não uma colagem de refeição, sala, pátio e escola.
- **Versão mínima:** sol, mochila e uma pequena bola, organizados em composição triangular.
- **Ideia comunicada:** rotina ativa, alternância de tarefas e participação escolar.
- **Evitar:** dezenas de objetos, relógio detalhado e a ideia de atividade contínua sem descanso.
- **Nome sugerido:** `tema-dia.svg` ou `tema-dia.png`.

### 9. Recuperar o fôlego para o cotidiano

- **Símbolo atual:** linha ondulada curta.
- **Cor:** verde `#235F53`.
- **Figura proposta:** pulmões estilizados ao lado de duas pequenas pegadas. Uma curva suave atravessa o espaço inferior e relaciona respiração e caminhada. Os pulmões têm apenas contorno externo e divisão principal da traqueia; não desenhar toda a árvore brônquica. As pegadas indicam tarefa cotidiana, sem competição.
- **Versão mínima:** pulmões simplificados com uma pequena curva respiratória abaixo.
- **Ideia comunicada:** respiração integrada à tolerância às atividades.
- **Evitar:** traçado eletrocardiográfico como substituto da respiração, oxigênio hospitalar obrigatório e promessa de normalização clínica.
- **Nome sugerido:** `tema-folego.svg` ou `tema-folego.png`.

## Doze unidades — coleção complementar

Os cards de unidade atualmente usam números e seleção. Os ícones abaixo são propostas futuras; números e nomes completos devem continuar visíveis. Usar o mesmo estilo, preferencialmente verde, para não criar uma classificação de curso.

| Unidade | Descrição da figura em estilo de ícone | Nome do arquivo |
|---|---|---|
| 01 — Organização funcional e fisiologia celular | Célula circular com núcleo simples e membrana dupla parcial; duas pequenas setas atravessam a borda em sentidos diferentes para indicar transporte e regulação. | `unidade-01-celular.svg` |
| 02 — Excitabilidade neuromuscular | Terminal nervoso arredondado próximo de uma fibra muscular com três estriações; pequena separação visível representa a junção neuromuscular. | `unidade-02-neuromuscular.svg` |
| 03 — Sistema osteoarticular | Dois segmentos ósseos formando uma articulação simples, acompanhados de uma seta curva discreta para remodelação; sem desenho de fratura. | `unidade-03-osteoarticular.svg` |
| 04 — Sangue e sistema cardiovascular | Coração de contorno anatômico simplificado, ligado a dois vasos curtos, com uma pequena gota ao lado para incluir sangue. Não usar apenas um coração romântico. | `unidade-04-cardiovascular.svg` |
| 05 — Sistema respiratório | Dois pulmões com traqueia e brônquios principais; duas setas pequenas, uma entrando e uma saindo, sugerem ventilação. | `unidade-05-respiratorio.svg` |
| 06 — Sistema endócrino | Pequena glândula estilizada liberando três círculos para um vaso curto; ao final, uma célula-alvo. Representa comunicação hormonal sem reduzir toda a unidade à tireoide. | `unidade-06-endocrino.svg` |
| 07 — Sistema linfático e defesa | Dois pequenos linfonodos conectados por um vaso e um escudo discreto; não representar imunidade como barreira absoluta ou invulnerabilidade. | `unidade-07-linfatico.svg` |
| 08 — Sistema urinário e líquidos corporais | Dois rins simplificados com uma gota central; duas pequenas marcas em equilíbrio sugerem regulação de água e solutos. | `unidade-08-urinario.svg` |
| 09 — Sistema digestório | Estômago conectado a uma única alça intestinal ampla, com dois pequenos círculos atravessando a borda para representar absorção. | `unidade-09-digestorio.svg` |
| 10 — Sistema reprodutor | Dois pequenos pictogramas anatômicos, feminino e masculino, lado a lado em tamanho equivalente, com um ponto de sinalização hormonal entre eles; representação científica simples, sem detalhe externo. | `unidade-10-reprodutor.svg` |
| 11 — Sistema nervoso | Cérebro simplificado com um prolongamento semelhante à medula e duas ramificações periféricas curtas; um único ponto representa sinalização. | `unidade-11-nervoso.svg` |
| 12 — Sistema tegumentar | Pequeno corte de pele em duas camadas, um poro com gota de suor e uma seta ascendente discreta indicando troca de calor. | `unidade-12-tegumentar.svg` |

## Marca, etapas e controles

Estes elementos funcionais devem ser SVGs simples ou ícones da biblioteca existente, com tamanho de 16–24 px. Não precisam de geração de imagem e não devem ganhar detalhes de cena.

| Elemento | Desenho e significado |
|---|---|
| Marca de Percursos | Um ponto inicial se divide em três pequenos ramos e volta a convergir; representa integração. Pode substituir futuramente o glifo `⌘` do piloto. |
| Abrir uma história | Seta diagonal para cima e à direita; acompanha o card e não funciona como botão separado dentro dele. |
| Próxima etapa / confirmar caminho | Seta horizontal para a direita, acompanhada do texto da ação. |
| Voltar | Seta horizontal para a esquerda; texto indica o destino. |
| Revisar uma hipótese | Seta curva de retorno, sem sugerir apagar o histórico já registrado. |
| Seleção de unidade | Quadrado com cantos arredondados, vazio ou com tique; mantém número e nome da unidade. |
| Escolha única | Círculo vazio ou preenchido; usa controle de rádio nativo. |
| Escolha múltipla | Quadrado vazio ou marcado; instrução informa quantas relações selecionar. |
| Informação fornecida | Losango de contorno e legenda “Fornecido pelo caso”. Não depende só de cinza ou cor. |
| Conexão construída | Tique e legenda “Construído por você”. |
| A investigar | Círculo de contorno ou número da unidade e legenda “A investigar”. |
| Pista | Lâmpada de traço simples; manter o texto “Uma pista”. |
| Diagrama | Um nó conectado a dois outros por linhas curtas; acompanha o título do mapa. |
| Expandir/recolher | Pequeno chevron que muda de orientação junto ao título da seção. |
| Exportar | Folha com seta para baixo; manter “Exportar percurso” e especificar JSON quando necessário. |
| Imprimir / PDF | Impressora simples; indica a impressão do navegador, que pode salvar como PDF. |
| Referências | Livro aberto ou dois documentos sobrepostos. |
| Fechar | Um X, com nome acessível “Fechar”. |

## Composição dos cards e aplicação das imagens

1. Caixa da ilustração no alto à esquerda, título abaixo, descrição curta em seguida.
2. Fundo branco, borda fina verde-acinzentada, cantos largos e arredondados; preservar o aspecto curvo já usado no piloto.
3. Divisória suave antes da linha de duração. Seta de acesso no canto inferior direito.
4. As nove figuras devem ter escala óptica semelhante. Pulmões não devem parecer muito menores que corredor ou estudante por causa das margens internas.
5. Produzir uma imagem independente por tema. Não entregar uma prancha única como se fossem nove arquivos individuais.
6. Conferir a legibilidade em 48, 80 e 96 px. Se depender de detalhes invisíveis em 80 px, simplificar antes de integrar.
7. A história é identificada pelo título e pela descrição. A ilustração não deve revelar respostas fisiológicas ou sugerir que um curso possui exclusividade sobre aquele tema.
