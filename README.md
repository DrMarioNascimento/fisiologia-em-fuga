# Fisiologia em Fuga

Escape rooms didáticos de Fisiologia Humana, organizados por unidade e por curso, integrados aos tutores da [Fisiologia Interativa](https://drmarionascimento.github.io/fisiologia-interativa/).

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

O projeto é material educacional de uso restrito. O repositório público não é código aberto. O acesso funcional para estudo, aulas e demonstrações não autoriza copiar, adaptar, redistribuir, republicar ou explorar comercialmente o código, os cenários, os textos ou os elementos visuais. Consulte [LICENSE.md](LICENSE.md).
