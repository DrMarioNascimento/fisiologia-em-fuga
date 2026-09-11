# Fisiologia em Fuga

Escape rooms didáticos de Fisiologia Humana, organizados por unidade e por curso, para integração com os Tutores da [Fisiologia Interativa](https://drmarionascimento.github.io/fisiologia-interativa/).

## Organização

- Educação Física: 6 unidades.
- Fisioterapia: 5 unidades.
- Motor único de jogo.
- Cenários e puzzles contextualizados por curso.
- Sala-base vertical para celular, com ambientação específica por unidade.
- Acesso direto a partir da unidade correspondente no Tutor.
- Retorno ao Tutor do mesmo curso ao finalizar ou sair.

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

## Desenvolvimento

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

Endereço esperado:

<https://drmarionascimento.github.io/fisiologia-em-fuga/>

## Finalidade

Material exclusivamente didático e educacional. Os modelos e situações não substituem avaliação, diagnóstico, prescrição ou orientação profissional em saúde.

**Autor e titular declarado:** Mário César Nascimento, PhD.  
Copyright © 2026. Todos os direitos reservados.
