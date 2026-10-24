# Fisiologia em Fuga

## Percursos de Fisiologia — nova atividade piloto

[**Abrir Percursos de Fisiologia**](https://fisiologia-em-fuga.drmarionascimento.com.br/percursos/)

Quiz modular com 12 unidades e nove temas livres para todos os estudantes. Unidades escolhidas viram investigação; as demais entram como condições fornecidas pelo caso. Inclui ramificações de resposta, revisão de hipóteses, relações fisiológicas em diagramas, síntese, progresso local e exportação. O piloto contém um recorte por unidade e uma síntese final, sem pretensão de cobrir todos os tópicos do programa.

- [Funcionamento e escopo](docs/percursos-fisiologia.md).
- [Guia de ícones e ilustrações das histórias](docs/icones-percursos-fisiologia.md).
- Fonte: `percursos/index.html` e `public/percursos/`; testes: `tests/percursos.cjs` (incluídos em `npm test`).
- Acesso pela página inicial e pelo catálogo de salas; os temas não são separados por curso.

## Situação do catálogo de Escape Rooms — 19 de outubro de 2026

O catálogo deste projeto permanece com seis eixos de EF e cinco de Fisioterapia. A nova Unidade 06 — Sistema Endócrino da Fisiologia Interativa ainda não possui sala neste repositório. Integração cardiorrespiratória continua sendo um eixo próprio do Escape Room, mesmo aparecendo como integração das Unidades 4 e 5 no portal EF. Não renumere as rotas existentes para acompanhar os números dos cards.

## Recursos educacionais

Este projeto integra os recursos educacionais do Prof. Mário César Nascimento, PhD. O acesso aos materiais disponibilizados permanece aberto ao público, conforme [LICENSE.md](LICENSE.md). Recursos de Fisiologia têm finalidade educacional e não substituem diagnóstico, prescrição nem orientação clínica individual.

Portal do autor: https://www.drmarionascimento.com.br/


## Registro anterior de manutenção — 10 de outubro de 2026

O código contém seis unidades para Educação Física e cinco para Fisioterapia. As salas cardiovasculares têm roteiros piloto próprios por curso; as outras unidades usam os roteiros-base do catálogo. Portanto, a existência de uma rota não equivale a declarar concluída a validação pedagógica de todas as salas.

A [Operação Protocolo Eferente](src/data/protocoloEferente.js) permite montar uma revisão pelos eixos do curso. O banco de salas fica em `src/data/escapeRooms.js`; o motor, em `src/lib/game.js`. Os testes existentes verificam o catálogo e a composição dos percursos. Antes de declarar um novo lote pronto, percorra início, puzzles, erros, tempo esgotado, conclusão e retorno ao tutor do mesmo curso.


**Revisão em 10 de outubro de 2026.** O catálogo contém seis unidades de EF e cinco de Fisioterapia, com roteiros-base e duas versões cardiovasculares piloto específicas por curso. A validação completa de todos os percursos deve ser registrada separadamente. Licença de uso educacional restrito.

Escape rooms didáticos de Fisiologia Humana, organizados por unidade e por curso, integrados aos tutores da [Fisiologia Interativa](https://fisiologia.drmarionascimento.com.br/).

**Jogar:** [fisiologia-em-fuga.drmarionascimento.com.br](https://fisiologia-em-fuga.drmarionascimento.com.br/)

## Organização

- Educação Física: 6 unidades.
- Fisioterapia: 5 unidades.
- Motor único de jogo.
- Cenários e puzzles contextualizados por curso.
- Sala-base vertical para celular, com ambientação específica por unidade.
- Acesso direto a partir da unidade correspondente nos quatro tutores (EF site, EF Moodle, Fisio site, Fisio Moodle).
- As salas do site voltam para o tutor do mesmo curso e da mesma unidade (`?eixo=`).
- As salas abertas pelo Moodle voltam para o tutor Moodle do mesmo curso (`?origem=moodle`).

## Regras da experiência

- Cada puzzle acrescenta 1 minuto ao tempo total da sala.
- O cronômetro é contínuo durante a resolução e pausa na explicação pedagógica.
- As alternativas são embaralhadas quando uma nova partida começa.
- Um erro não muda a posição das alternativas.
- Ao esgotar o tempo, o estudante recebe a orientação para revisar a unidade e tentar novamente.

## Identidade das salas

A arquitetura, o enquadramento, o mobiliário e a iluminação formam uma única sala reconhecível. Os objetos de estudo mudam conforme o eixo: celular, muscular, osteoarticular, cardiovascular, respiratório e integração cardiorrespiratória.

As duas experiências cardiovasculares constituem o primeiro lote piloto:

- `#/escape/ef/cardiovascular`
- `#/escape/fisio/cardiovascular`

## Projetos relacionados

- [Fisiologia Interativa](https://github.com/DrMarioNascimento/fisiologia-interativa) — simuladores e tutores que abrem estas salas.
- [Atividades Extras](https://github.com/DrMarioNascimento/Atividades-Extras) — missões complementares de Fisiologia.
- [Eita!](https://eita.dragongames.dev.br/) — quiz-batalha de sala, em testes internos.

## Desenvolvimento

Stack: React, Vite, Tailwind CSS e React Router.

```bash
npm install
npm run dev
```

Validação local:

```bash
npm test
npm run build
```

## Publicação

O workflow em `.github/workflows/pages.yml` compila e publica o projeto no GitHub Pages a cada alteração na branch `main`.

Endereço: <https://fisiologia-em-fuga.drmarionascimento.com.br/>

## Finalidade

Material exclusivamente didático e educacional. Os modelos e situações não substituem avaliação, diagnóstico, prescrição ou orientação profissional em saúde.

**Autor e titular declarado:** Mário César Nascimento, PhD.  
Copyright © 2026. Todos os direitos reservados.

## Licença e uso

O projeto é material educacional de uso restrito. O repositório público não é código aberto. O acesso funcional para estudo, aulas e demonstrações não autoriza copiar, adaptar, redistribuir, republicar ou explorar comercialmente o código, os cenários, os textos ou os elementos visuais. Consulte [LICENSE.md](LICENSE.md). Revisão documental desta nota: 7 de outubro de 2026.

## Entrada com Google

O menu tem três cards, exibidos uma única vez depois do login: Percursos de Fisiologia, Educação Física e Fisioterapia. Todas as rotas de salas e a entrada direta em `/percursos/` aguardam a sessão Google. O botão **Sair** encerra a sessão. Links diretos para salas conservam o destino e os parâmetros do tutor durante a entrada.

Firebase Authentication: projeto `atividades-extras-e40b6`, já compartilhado com Atividades Extras. O domínio `fisiologia-em-fuga.drmarionascimento.com.br` foi autorizado no console. Não foram alterados os provedores existentes, regras do Firestore, salas ou permissões docentes. Qualquer conta Google pode entrar nas atividades; uma sessão anônima não libera o menu.

O SDK usa apenas Authentication, sem Analytics ou envio de notas. Nome e e-mail identificam a sessão; os progressos permanecem locais. A configuração web é pública e não é uma credencial administrativa. A entrada controla a navegação da interface; como o site e o repositório são públicos, ela não torna os arquivos ou o banco de questões confidenciais. Dados privados futuros exigem autorização no servidor e regras específicas.

Hospedagem: GitHub Pages em `https://fisiologia-em-fuga.drmarionascimento.com.br/`. O certificado TLS e **Enforce HTTPS** são gerenciados nas configurações Pages do repositório, não na lista de domínios autorizados do Firebase. Não foi feita migração para Firebase Hosting.

Validação: `npm test` inclui os cenários de sessão ausente, carregamento, três cards únicos, links diretos, saída e bloqueio do quiz durante carregamento. `npm run build` gera as duas entradas HTML com o mesmo SDK de autenticação.
