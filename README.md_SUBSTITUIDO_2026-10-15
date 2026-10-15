# Fisiologia em Fuga

## Recursos educacionais

Este projeto integra os recursos educacionais do Prof. Mário César Nascimento, PhD. O acesso aos materiais disponibilizados permanece aberto ao público, conforme [LICENSE.md](LICENSE.md). Recursos de Fisiologia têm finalidade educacional e não substituem diagnóstico, prescrição nem orientação clínica individual.

Portal do autor: https://www.drmarionascimento.com.br/


## Estado e manutenção — 10 de outubro de 2026

O código contém seis unidades para Educação Física e cinco para Fisioterapia. As salas cardiovasculares têm roteiros piloto próprios por curso; as outras unidades usam os roteiros-base do catálogo. Portanto, a existência de uma rota não equivale a declarar concluída a validação pedagógica de todas as salas.

A [Operação Protocolo Eferente](src/data/protocoloEferente.js) permite montar uma revisão pelos eixos do curso. O banco de salas fica em `src/data/escapeRooms.js`; o motor, em `src/lib/game.js`. Os testes existentes verificam o catálogo e a composição dos percursos. Antes de declarar um novo lote pronto, percorra início, puzzles, erros, tempo esgotado, conclusão e retorno ao tutor do mesmo curso.


**Revisão em 10 de outubro de 2026.** O catálogo contém seis unidades de EF e cinco de Fisioterapia, com roteiros-base e duas versões cardiovasculares piloto específicas por curso. A validação completa de todos os percursos deve ser registrada separadamente. Licença de uso educacional restrito.

Escape rooms didáticos de Fisiologia Humana, organizados por unidade e por curso, integrados aos tutores da [Fisiologia Interativa](https://fisiologia.drmarionascimento.com.br/).

**Jogar:** [drmarionascimento.github.io/fisiologia-em-fuga](https://drmarionascimento.github.io/fisiologia-em-fuga/)

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
- [Eita!](https://eita.dragongames.dev.br/) — quiz-batalha de sala, repositório privado.

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

Endereço: <https://drmarionascimento.github.io/fisiologia-em-fuga/>

## Finalidade

Material exclusivamente didático e educacional. Os modelos e situações não substituem avaliação, diagnóstico, prescrição ou orientação profissional em saúde.

**Autor e titular declarado:** Mário César Nascimento, PhD.  
Copyright © 2026. Todos os direitos reservados.

## Licença e uso

O projeto é material educacional de uso restrito. O repositório público não é código aberto. O acesso funcional para estudo, aulas e demonstrações não autoriza copiar, adaptar, redistribuir, republicar ou explorar comercialmente o código, os cenários, os textos ou os elementos visuais. Consulte [LICENSE.md](LICENSE.md). Revisão documental desta nota: 7 de outubro de 2026.
