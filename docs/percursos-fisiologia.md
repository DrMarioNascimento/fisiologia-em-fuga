# Percursos de Fisiologia

Piloto funcional de atividade modular do Prof. Mário César Nascimento.

## Uso

O aluno seleciona de 1 a 12 unidades, escolhe um dos nove temas, lê o contexto e explora o diagrama. Unidades não selecionadas fornecem condições de apoio. Unidades selecionadas abrem questões; respostas incorretas ficam registradas como hipóteses revistas, sem alterar a fisiologia do personagem. A síntese abre após todos os ramos selecionados serem concluídos.

Todos os temas são acessíveis a todos os alunos. A correspondência de planejamento é apenas interna: largada/forca/distancia (Bacharelado), movimento/crescer/dia (Licenciatura), alta/retorno/folego (Fisioterapia).

## Escopo do piloto

- 12 unidades, 9 contextos, 4 etapas de investigação.
- Um recorte por unidade em cada percurso e uma síntese final. Não representa cobertura completa de todos os tópicos do programa.
- Banco de fundamentos reutilizado entre contextos; dados quantitativos e alguns itens mudam por cenário. As 108 combinações tema-unidade não são 108 questões inteiramente distintas.
- Alternativas embaralhadas, escolha única e múltipla, pistas, histórico de tentativas e relações fisiológicas em diagramas após a validação.
- Progresso local, exportação JSON e impressão/PDF pelo navegador. Sem conta de aluno, banco remoto, geração por IA, envio de notas ou painel docente.
- Sem prescrição, diagnóstico ou critérios clínicos de alta. Personagens, condições e números são didáticos.
- O diagrama principal representa organização da investigação; as cadeias nos comentários representam relações fisiológicas e cálculos.

## Arquivos

- `public/percursos/data.js`: programa, casos, itens, condições fornecidas e relações fisiológicas.
- `public/percursos/app.js`: navegação, avaliação, persistência e exportação.
- `public/percursos/style.css`: interface responsiva e impressão.
- `percursos/index.html`: documento de entrada e ajuda (entrada HTML Vite; os scripts e estilos estáticos ficam em `public/percursos/`).
- `tests/percursos.cjs`: verificação de integridade, combinação e fluxo.

## Verificação

Executar `node tests/percursos.cjs` e `node --check public/percursos/app.js`.

A verificação automatizada percorre as 36.855 combinações de seleção e tema, confere complementaridade entre unidades fornecidas e investigadas, valida 108 montagens tema-unidade e simula 54 percursos completos com erro, revisão, acerto e síntese. Inclui os exemplos 1–3, 4–6, 1–6, seleção única e todas as unidades, além da regra de resposta múltipla, cálculos e validação de persistência. São verificações de software, não evidência de aprendizagem ou validação clínica/pedagógica com estudantes.

Referências de aprofundamento estão na ajuda da aplicação. Questões autorais de fundamentos de Fisiologia. A revisão com o professor e o uso piloto devem orientar a ampliação do banco e a dificuldade dos distratores.

## Integração ao Fisiologia em Fuga

A entrada HTML fica em `percursos/index.html` e os arquivos estáticos em `public/percursos/`; a compilação Vite gera `dist/percursos/`. A página inicial e o catálogo de salas incluem acesso direto, e o quiz oferece retorno ao hub. Não depende do Sites ou de autenticação do ChatGPT. A atividade é compartilhada por Educação Física e Fisioterapia; todos os temas são acessíveis aos dois cursos. Está aberta a testes públicos sem login Google.

A especificação visual está em [icones-percursos-fisiologia.md](icones-percursos-fisiologia.md).
