# Pendências — RFC MAREA v2.0

Tudo que ainda falta, em ordem de urgência. Cada item indica a seção da RFC onde entra.

---

## 🔴 Bloqueante — esta semana (até 21/08/2026)

Sem estes itens, a disciplina não fecha, independentemente do software.

- [ ] **Enviar e-mail ao professor** perguntando qual modalidade da extensão se aplica: parceiro externo com termo de convênio, ou modalidade Comunidade. A resposta muda quem você procura.
- [ ] **Agendar a primeira orientação.** Duas precisam estar evidenciadas até **30/09/2026**.
- [ ] **Iniciar a busca pelo parceiro externo** — não espere a resposta do professor para começar a bater na porta.
  - Candidatos: psiquiatra ou psicólogo com CNPJ em Joinville · ABRATA · grupo de apoio local · CAPS Joinville.
- [ ] **Confirmar o nome oficial da instituição** para a capa (Centro Universitário Católica de Santa Catarina).

---

## 🟠 Alta — até a primeira orientação (04/09/2026)

- [ ] **§1.2 Origem da Demanda** — preencher com o parceiro definido: nome da organização, contexto, problema relatado. *(Seção crítica: hoje está inteiramente vazia.)*
- [ ] **§1.2 Evidência de Interesse** — carta de intenção do parceiro ou equivalente.
- [ ] **Levar a RFC v2.0 à orientação** e registrar em ata a mudança de banco (SQLite → PostgreSQL) e de hospedagem (VPS, não Vercel). A justificativa já está escrita na §5.4.
- [ ] **Validar comigo as três decisões técnicas** listadas ao final da conversa: confirmação otimista do registro, motor de regras rodando offline, e UUID como chave primária.

---

## 🟡 Média — até 30/09/2026

- [ ] **§1.2 Pesquisa com Usuários** — questionário online de 8 a 10 perguntas. Registrar número de participantes, dores identificadas e padrões observados.
- [ ] **§1.3 Benchmark** — instalar e usar Estabiliza, Daylio, eMoods e Bearable por alguns dias. Confirmar ou corrigir as limitações descritas e **capturar prints das interfaces**. As afirmações atuais vieram de informações públicas, não de uso direto.
- [ ] **§2.1 Personas** — confirmar ou corrigir Marina, Rafael e Dra. Helena com base nos dados reais da pesquisa. Hoje são hipóteses.
- [ ] **§4 Mockups** — produzir em Figma ou Excalidraw as cinco telas: Dashboard, Registro, Histórico, Relatório mensal, Configurações. Para cada uma: imagem, descrição da funcionalidade e ações principais.
- [ ] **§4.1** — o fluxo de navegação já tem diagrama pronto; só confirmar que corresponde aos mockups.
- [ ] **§1.1** — inserir evidência visual do processo atual (foto de anotação manual anonimizada, por exemplo).

---

## 🟢 Baixa — durante o desenvolvimento

- [ ] **§4.4 Feedback de usuários** — coletar após os mockups, junto ao parceiro.
- [ ] **§8 Referências** — acrescentar documentação técnica: React, Vite, Node.js, Express, PostgreSQL, Service Worker (MDN) e o modelo C4.
- [ ] **Apêndice B** — preencher os links conforme forem existindo: repositório, aplicação em produção, Wiki, protótipo navegável.
- [ ] **Apêndice C** — anexar o questionário aplicado e o roteiro de entrevista com o parceiro.

---

## ✅ Já resolvido

- Estrutura completa nas 9 seções do modelo oficial
- Contexto e problema, com fontes bibliográficas verificadas
- Benchmark com 4 concorrentes e tabela comparativa
- Diferencial delimitado em 4 eixos
- Público-alvo, objetivo geral e 6 objetivos específicos
- 10 KPIs mensuráveis
- 16 requisitos funcionais, 12 não funcionais, 8 regras de negócio
- Motor de regras com 5 gatilhos e limiares configuráveis
- 10 casos de uso e 8 fluxos alternativos
- 9 diagramas: navegação, atividades, sequência, casos de uso, C4 (3 níveis), DER, motor de regras
- Modelo de dados com 9 entidades
- Stack com justificativa e tabela de decisões/alternativas
- Princípios de software maduro, incluindo posicionamento no teorema CAP
- Segurança (OWASP) e LGPD
- Cronograma com 11 marcos ancorados no calendário oficial
- Fora do escopo explícito, com o "consultório online" justificado como evolução futura

---

## Decisões que ficaram registradas (úteis na prova de autoria)

| Decisão | Alternativa descartada | Por quê |
|---|---|---|
| PostgreSQL | SQLite | Banco em disco local é vedado na linha Web Apps |
| VPS | Vercel / Netlify / Render | Plataformas de frontend são vedadas na linha |
| Deploy por pipeline | SSH / FTP manual | Deploy manual é vedado na linha |
| PWA | App nativo (Flutter) | Sem dependência de loja; uma base de código |
| Motor de regras determinístico | Modelo de ML ou LLM | Previsibilidade em saúde, testabilidade, dados não saem do ambiente |
| Disponibilidade > consistência | Consistência forte | Perder o registro do usuário é pior que inconsistência temporária |
| UUID como chave primária | Inteiro sequencial | Permite gerar ID no cliente offline sem colisão na sincronização |
| Relatório exportado pelo usuário | Consultório online | Evita armazenar dado de saúde de terceiros; preserva o eixo de privacidade |
