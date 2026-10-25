# AGENTS.md — Regras obrigatórias de arquitetura e acesso (25/10/2026)

> Fonte de verdade para agentes de IA, desenvolvedores e revisores. Não confundir os projetos.

## Fisiologia em Fuga
- Repositório: https://github.com/DrMarioNascimento/fisiologia-em-fuga
- Site: https://fisiologia-em-fuga.drmarionascimento.com.br/
- **Acesso público e teste aberto, SEM login Google, SEM senha e SEM autenticação compulsória**, para o catálogo, salas de escape e /percursos/.
- Escape rooms de **Educação Física** e de **Fisioterapia** são trilhas DISTINTAS: não misturar roteiros, questões, feedback, identidade de curso, links de retorno nem parâmetros de navegação.
- **Percursos de Fisiologia** é comum aos dois cursos. Suas unidades e temas podem ser escolhidos sem divisão obrigatória por curso.
- Cadeados dos enigmas são **mecânica de jogo**, não bloqueio de acesso.
- Não importar mecanismos de autenticação do projeto Atividades Extras.

## Atividades Extras
- Repositório: https://github.com/DrMarioNascimento/Atividades-Extras
- Site: https://atividades-extras.drmarionascimento.com.br/
- Ferramentas de **condução docente de sessões em sala de aula**.
- **Somente professor autorizado** pode criar, configurar, acompanhar ou encerrar salas; login Google e autorização na base devem ser mantidos.
- **Alunos participam pelo código/QR da sala** fornecido pelo professor, sem login Google docente e sem acesso ao painel do professor.
- Validação da autorização deve ocorrer nas regras do servidor/Firestore; ocultar um botão não é proteção.
- Não confundir este projeto com os escape rooms públicos de Fisiologia em Fuga.

## Regras de manutenção
1. Antes de editar rotas, autenticação, catálogo ou README, confira esta separação.
2. Ao alterar disponibilidade, sincronize os READMEs de ambos os projetos, o inventário do portal (DISPONIBILIDADE.md e disponibilidade.json) e as telas de entrada.
3. Testes de regressão: visitante anônimo acessa os escape rooms EF, Fisio e /percursos/; EF nunca redireciona para Fisio e vice-versa; professor não autorizado não cria sala em Atividades Extras; participante por código só acessa a sessão permitida.
4. Acesso público não torna o repositório open source e não altera direitos autorais. Preserve LICENSE.md e licenças de terceiros; ajustes documentais não devem conceder novos direitos.
