# RFC: Request for Comments — Projeto de Portfólio
**Engenharia de Software – Católica SC**

## Identificação

| Campo | Conteúdo |
|---|---|
| **Título do Projeto** | MAREA — Aplicação Web Progressiva de apoio ao automonitoramento de rotina para pessoas com Transtorno Bipolar |
| **Linha de Projeto (Direction)** | Web Apps |
| **Autor** | Gabriel Costa dos Santos |
| **Data da Proposta** | 12/08/2026 |
| **Versão** | 2.0 |

> **Diagramas.** Todos os diagramas deste documento estão reunidos, em resolução ampliada e com descrição individual, em [DIAGRAMAS.md](DIAGRAMAS.md).
>
> **Nota de versão.** A versão 2.0 revisa a RFC aprovada no PAC VII para adequação aos critérios obrigatórios da linha Web Apps. As alterações relevantes estão registradas na seção 5.4 e devem ser formalizadas em ata de orientação.

---

## 1. Visão do Produto e Impacto (O Problema)

### 1.1 Contexto e Problema

O Transtorno Bipolar (TB) é uma condição psiquiátrica crônica caracterizada por oscilações recorrentes de humor, energia e comportamento. Essas variações afetam diretamente o sono, a adesão ao tratamento medicamentoso e a organização da rotina.

**Quem sofre com o problema.** Pessoas diagnosticadas com TB que precisam acompanhar a própria rotina entre consultas, e que hoje dependem de memória ou de anotações dispersas para relatar ao profissional de saúde como foi o período.

**Em que contexto ocorre.** O intervalo entre consultas costuma ser de semanas ou meses. Nesse período, o paciente é a única fonte de informação sobre o próprio estado — e a recuperação retrospectiva desses dados é imprecisa, especialmente durante episódios de humor alterado, quando a percepção do próprio comportamento fica comprometida.

**Como é resolvido atualmente.**
- Anotações manuais em papel, agenda ou aplicativos de notas genéricos.
- Aplicativos de registro de humor de uso geral (Daylio, Bearable).
- Aplicativos específicos para TB, com destaque para o Estabiliza no Brasil.
- Relato verbal em consulta, apoiado apenas na memória.

**Limitações das soluções atuais.**
- Registro em papel não gera visualização histórica nem correlação entre variáveis.
- Aplicativos genéricos não contemplam as variáveis clinicamente relevantes para o TB.
- Aplicativos de loja exigem instalação, ocupam armazenamento e dependem de aprovação de store.
- Soluções orientadas ao acompanhamento clínico pressupõem vínculo ativo com um profissional, situação que não corresponde à realidade de parte do público.
- Interfaces com muitos campos de preenchimento tendem a gerar abandono, justamente no período em que o registro é mais necessário.

**Fundamentação.** Faurholt-Jepsen et al. (2019) investigam o potencial de dados objetivos coletados por smartphones como marcador do TB. Em revisão posterior, os mesmos autores ponderam que a evidência disponível ainda não permite tratar esses dados como marcador confiável da atividade da doença (FAURHOLT-JEPSEN et al., 2018) — o que sustenta a opção do MAREA por registros conscientes feitos pelo próprio usuário, em vez de inferência automática por sensores. Quanto ao sono, Takaesu (2018) documenta a irregularidade do ritmo sono-vigília como marcador de traço do TB, com potencial de anteceder recaídas, e Tonon et al. (2024) descrevem alterações de fase, estrutura e duração do sono associadas a pior qualidade de vida e maiores taxas de recaída. Anmella et al. (2022) reúnem, em revisão sistemática com meta-análise, evidência de eficácia de intervenções digitais voltadas ao TB.

> ⚠️ **PENDENTE — inserir evidência visual.** O modelo pede exemplos reais, prints de processos atuais ou descrição de fluxos existentes. Sugestão: print de uma anotação manual real (anonimizada) ou fotografia do caderno de registro usado por um usuário.

### 1.2 Origem da Demanda e Evidências

> ⚠️ **SEÇÃO CRÍTICA — PENDENTE.** Esta seção depende do parceiro externo exigido pela curricularização da extensão (PAC VIII). Sem ela, a RFC fica incompleta e o PAC VIII não fecha.

**Demanda Externa**
- Nome da organização: `[A DEFINIR]`
- Contexto da demanda: `[A DEFINIR]`
- Problema relatado pela organização: `[A DEFINIR]`

Candidatos a parceiro, em ordem de viabilidade:
1. Psiquiatra ou psicólogo com CNPJ, em Joinville, que atenda pacientes com TB.
2. ABRATA — Associação Brasileira de Familiares, Amigos e Portadores de Transtornos Afetivos.
3. Grupo de apoio ou associação local de saúde mental.
4. CAPS de Joinville — adequado no mérito, porém com tramitação institucional mais lenta.

**Pesquisa com Usuários**
- Número de participantes: `[A DEFINIR]`
- Instrumento: `[A DEFINIR — sugestão: questionário online de 8 a 10 perguntas]`
- Principais dores identificadas: `[A DEFINIR]`
- Padrões observados: `[A DEFINIR]`

**Evidência de Interesse**
- `[A DEFINIR — carta de intenção do parceiro, feedback de usuários ou resultados de formulário]`

### 1.3 Análise de Soluções Existentes (Benchmark)

#### Estabiliza
- **Link:** https://www.estabiliza.app
- **Público-alvo:** pessoas com Transtorno Bipolar, com acompanhamento profissional.
- **Funcionalidades principais:** registro diário de humor, energia, cognição e atividade física; acompanhamento orientado pelo profissional de saúde.
- **Limitações:** distribuição exclusiva por lojas de aplicativos; modelo estruturado em torno do vínculo clínico; não contempla hidratação e medicação como eixos centrais de registro.
- **Observação:** desenvolvido pelo psiquiatra Renato Silva, gratuito, disponível para Android e iOS, com mais de trinta mil downloads.

#### Daylio
- **Link:** https://daylio.net
- **Público-alvo:** público geral interessado em registro de humor e hábitos.
- **Funcionalidades principais:** registro rápido de humor por ícones, atividades personalizáveis, estatísticas.
- **Limitações:** não é voltado a condições clínicas específicas; não contempla medicação nem relatório orientado a profissional de saúde.

#### eMoods
- **Link:** https://emoodtracker.com
- **Público-alvo:** pessoas com transtornos de humor, incluindo TB.
- **Funcionalidades principais:** registro de humor, sintomas e medicação; relatório mensal.
- **Limitações:** interface em inglês; aplicativo de loja; funcionalidades relevantes em versão paga.

#### Bearable
- **Link:** https://bearable.app
- **Público-alvo:** pessoas com condições crônicas em geral.
- **Funcionalidades principais:** registro amplo de sintomas, medicação, sono e fatores de estilo de vida.
- **Limitações:** volume elevado de campos de preenchimento, com risco de abandono; modelo por assinatura.

> ⚠️ **PENDENTE — validar por uso direto.** As limitações acima foram levantadas a partir de informações públicas. Instalar e usar cada aplicativo por alguns dias, confirmar as afirmações e capturar prints das interfaces, conforme exige o modelo.

#### Comparação

| Solução | Pontos Fortes | Limitações |
|---|---|---|
| **Estabiliza** | Respaldo clínico; gratuito; base de usuários consolidada; foco específico em TB | Depende de loja; orientado ao vínculo profissional; sem hidratação e medicação como eixos |
| **Daylio** | Registro muito rápido; alta usabilidade; personalizável | Sem foco clínico; sem medicação; sem relatório para profissional |
| **eMoods** | Foco em transtornos de humor; relatório mensal | Idioma; app de loja; recursos pagos |
| **Bearable** | Abrangência de variáveis; correlações | Fricção alta de preenchimento; assinatura |
| **MAREA** | PWA sem loja; offline; privacidade local; 4 variáveis integradas; relatório mensal exportável | Sem respaldo clínico formal; projeto acadêmico; base de usuários inexistente |

#### Diferencial do Projeto

O MAREA não se propõe a suprir uma ausência de ferramentas — o mercado já dispõe de soluções consolidadas. A proposta atende a um recorte específico ainda pouco explorado, delimitado em quatro eixos:

1. **Distribuição sem intermediários.** Por ser uma Aplicação Web Progressiva, dispensa lojas de aplicativos: acesso imediato pelo navegador e instalação opcional no dispositivo, reduzindo a barreira de entrada e o consumo de armazenamento.
2. **Autonomia do usuário.** Enquanto as soluções predominantes se estruturam em torno do vínculo com um profissional, o MAREA é projetado para o autogerenciamento, contemplando também quem não mantém acompanhamento clínico ativo.
3. **Privacidade como decisão arquitetural.** Registros mantidos localmente sempre que a funcionalidade permitir; compartilhamento apenas por exportação deliberada do usuário.
4. **Conjunto integrado de variáveis.** Sono, hidratação, medicação e humor em uma mesma linha do tempo — combinação pouco frequente nas soluções analisadas.

### 1.4 Público-Alvo

**Perfil do usuário.** Pessoas adultas com diagnóstico de Transtorno Bipolar, em qualquer estado de humor, com ou sem acompanhamento profissional ativo.

**Contexto de uso.** Registro diário, tipicamente uma a três vezes por dia, em momentos curtos, majoritariamente pelo celular. O uso ocorre com frequência em situações de baixa energia ou motivação, o que impõe a exigência de mínima fricção.

**Nível de conhecimento técnico esperado.** Baixo. O usuário sabe usar um navegador e aplicativos de celular, mas não deve precisar entender o conceito de PWA, instalação ou sincronização para obter valor do sistema.

**Público secundário.** Profissionais de saúde que recebem o relatório mensal exportado pelo paciente. Não são usuários do sistema — não possuem conta nem acesso — mas são destinatários do principal artefato de saída.

### 1.5 Objetivos do Projeto

**Objetivo Geral**

Desenvolver uma Aplicação Web Progressiva, com experiência mobile-first, que apoie pessoas com Transtorno Bipolar no automonitoramento de sono, hidratação, medicação e humor, e que produza um relatório mensal apto a qualificar a comunicação com profissionais de saúde.

**Objetivos Específicos**

1. Implementar o registro diário das quatro variáveis, limitando cada registro a no máximo três interações do usuário.
2. Implementar um motor de regras que gere notificações a partir dos padrões identificados nos registros.
3. Disponibilizar visualização histórica em gráficos, permitindo comparar as quatro variáveis em um mesmo intervalo de tempo.
4. Gerar relatório mensal em PDF, com gráficos, exportável e compartilhável pelo próprio usuário.
5. Viabilizar o registro sem conexão com a internet, por meio de Service Worker e armazenamento local, com sincronização posterior.
6. Aplicar controles de segurança fundamentados no OWASP Top 10 e nos princípios da LGPD.

### 1.6 Métricas de Sucesso (KPIs)

| # | Métrica | Meta | Como será medida |
|---|---|---|---|
| K1 | Cobertura de testes unitários — backend | ≥ 75% | Relatório de cobertura no pipeline de CI |
| K2 | Cobertura de testes unitários — frontend | ≥ 25% | Relatório de cobertura no pipeline de CI |
| K3 | Tempo de resposta da API (p95) | < 300 ms | Métricas de observabilidade em produção |
| K4 | Tempo para concluir um registro diário | < 30 s | Teste de usabilidade cronometrado |
| K5 | Interações por registro | ≤ 3 toques | Inspeção do fluxo implementado |
| K6 | Registro funcional sem conexão | 100% das 4 variáveis | Teste manual em modo offline |
| K7 | Pontuação de PWA no Lighthouse | ≥ 90 | Auditoria Lighthouse |
| K8 | Issues críticas ou bloqueantes na análise estática | 0 | SonarCloud |
| K9 | Disponibilidade da aplicação em produção | ≥ 99% no período de avaliação | Monitoramento de uptime |
| K10 | Satisfação em teste de usabilidade (SUS) | ≥ 68 pontos | Questionário SUS ao final do teste |

---

## 2. Engenharia de Requisitos

### 2.1 Personas

> ⚠️ **PENDENTE — refinar após a pesquisa com usuários (§1.2).** As personas abaixo são hipóteses de trabalho e devem ser confirmadas ou corrigidas com dados reais.

**Persona 1 — Marina, 29 anos, analista administrativa**
- **Contexto:** diagnóstico de TB tipo II há três anos, em tratamento medicamentoso contínuo, consultas trimestrais.
- **Objetivos:** chegar à consulta com um relato preciso do que aconteceu no período; perceber padrões antes que virem crise.
- **Dificuldades:** esquece detalhes entre consultas; já tentou registrar em papel e abandonou; em fases depressivas não tem energia para preencher formulários longos.

**Persona 2 — Rafael, 41 anos, autônomo**
- **Contexto:** diagnóstico há mais de dez anos; sem acompanhamento profissional ativo no momento, por razões financeiras.
- **Objetivos:** manter algum controle sobre a própria rotina, especialmente a adesão à medicação e a regularidade do sono.
- **Dificuldades:** desconfia de aplicativos que enviam dados de saúde para servidores; não quer criar conta nem vincular o registro a um profissional.

**Persona 3 — Dra. Helena, 47 anos, psiquiatra** *(usuária indireta)*
- **Contexto:** atende pacientes com TB em consultório particular.
- **Objetivos:** obter do paciente um relato estruturado do período entre consultas.
- **Dificuldades:** relatos verbais imprecisos; não tem interesse em aprender um novo sistema nem em manter conta em plataforma de terceiros.

### 2.2 Casos de Uso Principais

| ID | Caso de uso | Ator |
|---|---|---|
| UC01 | Registrar sono | Usuário |
| UC02 | Registrar hidratação | Usuário |
| UC03 | Registrar medicação | Usuário |
| UC04 | Registrar humor | Usuário |
| UC05 | Visualizar histórico em gráficos | Usuário |
| UC06 | Receber notificação gerada pelo motor de regras | Usuário |
| UC07 | Configurar lembretes e limiares | Usuário |
| UC08 | Gerar e exportar relatório mensal em PDF | Usuário |
| UC09 | Utilizar a aplicação sem conexão | Usuário |
| UC10 | Instalar a aplicação no dispositivo | Usuário |

Os três fluxos de negócio completos exigidos pela linha Web Apps são: **registro diário** (UC01–UC04), **notificação inteligente** (UC06–UC07) e **relatório mensal** (UC05, UC08).

![Diagrama de Casos de Uso](img/04-casos-de-uso.svg)

### 2.3 Requisitos Funcionais (RF)

| ID | Requisito |
|---|---|
| RF01 | O sistema deve permitir que o usuário registre as horas de sono e o horário de dormir e acordar. |
| RF02 | O sistema deve permitir que o usuário registre o consumo de água ao longo do dia. |
| RF03 | O sistema deve permitir que o usuário registre a tomada de medicação prevista para o dia. |
| RF04 | O sistema deve permitir que o usuário registre seu humor em escala definida. |
| RF05 | O sistema deve permitir que o usuário edite ou remova um registro já efetuado. |
| RF06 | O sistema deve permitir que o usuário visualize seu histórico em gráficos, filtrando por período. |
| RF07 | O sistema deve permitir que o usuário compare as quatro variáveis em um mesmo intervalo de tempo. |
| RF08 | O sistema deve avaliar os registros por meio de um motor de regras e emitir notificações quando os limiares configurados forem atingidos. |
| RF09 | O sistema deve permitir que o usuário configure os limiares e ative ou desative cada regra. |
| RF10 | O sistema deve permitir que o usuário configure lembretes de medicação, hidratação e registro diário. |
| RF11 | O sistema deve gerar um relatório mensal em PDF contendo gráficos e resumo do período. |
| RF12 | O sistema deve permitir que o usuário exporte e compartilhe o relatório gerado. |
| RF13 | O sistema deve permitir que o usuário registre as quatro variáveis sem conexão com a internet. |
| RF14 | O sistema deve sincronizar os registros locais com o servidor quando a conexão for restabelecida. |
| RF15 | O sistema deve permitir que o usuário instale a aplicação no dispositivo a partir do navegador. |
| RF16 | O sistema deve permitir que o usuário solicite a exclusão de todos os seus dados. |

### 2.4 Requisitos Não Funcionais (RNF)

| ID | Requisito |
|---|---|
| RNF01 | O tempo de resposta da API deve ser inferior a 300 ms no percentil 95. |
| RNF02 | A aplicação deve obter pontuação igual ou superior a 90 na auditoria PWA do Lighthouse. |
| RNF03 | O sistema deve permanecer funcional para registro e consulta em modo offline. |
| RNF04 | A cobertura de testes unitários deve ser de no mínimo 75% no backend e 25% no frontend. |
| RNF05 | O sistema deve utilizar autenticação segura, com senhas armazenadas por meio de função de hash com sal. |
| RNF06 | Todo o tráfego deve ocorrer sobre HTTPS. |
| RNF07 | O sistema deve estar hospedado em ambiente produtivo público e estável, independente de máquina pessoal. |
| RNF08 | A interface deve ser mobile-first e responsiva a partir de 320 px de largura. |
| RNF09 | O sistema deve tratar dados de saúde como dados sensíveis nos termos da LGPD. |
| RNF10 | O código deve passar pela análise estática sem issues classificadas como críticas ou bloqueantes. |
| RNF11 | O sistema deve expor métricas de observabilidade para monitoramento em produção. |
| RNF12 | O registro de cada variável deve ser concluído em no máximo três interações do usuário. |

### 2.5 Regras de Negócio

| ID | Regra |
|---|---|
| RN01 | Cada usuário acessa exclusivamente os próprios registros. |
| RN02 | É permitido no máximo um registro de sono por data de referência. |
| RN03 | Registros podem ser lançados retroativamente em até sete dias. |
| RN04 | O humor é registrado em escala ordinal de cinco pontos, de "muito baixo" a "muito alto". |
| RN05 | O relatório mensal só é gerado para meses que contenham ao menos um registro. |
| RN06 | Notificações são emitidas no máximo uma vez por regra por dia, evitando repetição excessiva. |
| RN07 | O usuário pode desativar individualmente qualquer regra de notificação. |
| RN08 | A exclusão de conta remove todos os registros associados de forma definitiva. |

**Motor de regras — gatilhos previstos**

| ID | Condição | Ação | Limiar padrão (configurável) |
|---|---|---|---|
| MR01 | Ausência de qualquer registro por N dias | Lembrete de registro | 3 dias |
| MR02 | Medicação marcada como não tomada em N dias consecutivos | Alerta de adesão | 2 dias |
| MR03 | Sono abaixo de X horas por N noites consecutivas | Sinalização de privação de sono | 6 h / 3 noites |
| MR04 | Variação do horário de dormir superior a X horas na semana | Alerta de irregularidade do ritmo | 2 h |
| MR05 | Humor em extremo da escala por N dias consecutivos | Sugestão de buscar apoio profissional | 3 dias |

O motor é implementado como sistema baseado em regras, com avaliação determinística sobre os registros do usuário. A escolha por regras explícitas, em vez de modelo de aprendizado de máquina, decorre de três fatores: previsibilidade do comportamento em um domínio de saúde mental; testabilidade unitária, que contribui diretamente para a meta de cobertura; e execução local, sem envio de dados sensíveis a serviços de terceiros.

### 2.6 Fora do Escopo

O sistema **não** contemplará:

- Diagnóstico, previsão clínica ou qualquer forma de recomendação terapêutica.
- Substituição de acompanhamento profissional.
- Área de acesso para profissionais de saúde ("consultório online") com armazenamento de prontuários — registrado como evolução futura (§9).
- Vínculo entre contas de paciente e profissional.
- Envio automático de relatórios a terceiros.
- Coleta automática de dados por sensores do dispositivo.
- Aplicativos nativos publicados em lojas.
- Integração com prontuário eletrônico ou sistemas de saúde.
- Chat, fórum ou qualquer funcionalidade social entre usuários.

---

## 3. Fluxos e Comportamento do Sistema

### 3.1 Fluxo Principal do Usuário

```
Acesso pelo navegador
        │
        ▼
   Autenticação  ──────► Cadastro (primeiro acesso)
        │
        ▼
    Dashboard  ◄──────────────────────┐
        │                             │
        ├─► Registrar sono ───────────┤
        ├─► Registrar hidratação ─────┤
        ├─► Registrar medicação ──────┤
        ├─► Registrar humor ──────────┤
        │                             │
        ├─► Histórico e gráficos ─────┤
        ├─► Relatório mensal ─► Exportar PDF ─► Compartilhar
        └─► Configurações ─► Regras e lembretes
```

Após cada registro, o motor de regras é acionado e avalia os gatilhos ativos; havendo condição satisfeita, uma notificação é emitida.

**Diagrama de atividades — registro diário**

![Diagrama de Atividades](img/02-atividades-registro.svg)

**Diagrama de sequência — registro com sincronização**

![Diagrama de Sequência](img/03-sequencia-registro.svg)

**Fluxo de avaliação do motor de regras**

![Motor de Regras](img/09-motor-regras.svg)

### 3.2 Fluxos Alternativos

| ID | Cenário | Comportamento esperado |
|---|---|---|
| FA01 | Registro efetuado sem conexão | Persistência local e marcação como pendente de sincronização |
| FA02 | Falha na sincronização | Nova tentativa automática e indicação visual do estado pendente |
| FA03 | Conflito entre registro local e remoto | Prevalece o registro de data de modificação mais recente |
| FA04 | Tentativa de segundo registro de sono na mesma data | Bloqueio com oferta de edição do registro existente (RN02) |
| FA05 | Geração de relatório de mês sem registros | Mensagem informativa; relatório não é gerado (RN05) |
| FA06 | Permissão de notificação negada pelo navegador | Alertas exibidos apenas dentro da aplicação |
| FA07 | Sessão expirada | Redirecionamento para autenticação com preservação do registro em andamento |
| FA08 | Indisponibilidade da API | Modo somente leitura sobre o cache local, com aviso ao usuário |

---

## 4. Mockups e Experiência do Usuário (UX)

> ⚠️ **SEÇÃO INTEIRAMENTE PENDENTE.** Produzir em Figma ou Excalidraw e inserir as imagens.

### 4.1 Fluxo de Navegação

`Login → Dashboard → Registro → Histórico → Relatório`

![Fluxo de Navegação](img/01-fluxo-navegacao.svg)

### 4.2 Wireframes ou Mockups das Telas

Telas mínimas a produzir:

1. **Tela inicial / Dashboard** — estado do dia, atalhos de registro, alertas ativos.
2. **Tela de registro** — fluxo principal, com a restrição de três interações (RNF12).
3. **Tela de histórico** — gráficos comparativos das quatro variáveis.
4. **Tela de relatório mensal** — pré-visualização e exportação.
5. **Tela de configurações** — regras do motor e limiares.

Para cada tela: imagem, breve descrição da funcionalidade e ações principais do usuário.

### 4.3 Fluxo de Interação do Usuário

Sequência a ilustrar: acesso → cadastro → primeiro registro → visualização do histórico → geração do relatório mensal.

### 4.4 Feedback Inicial de Usuários

`[A DEFINIR — coletar após os mockups, junto ao parceiro externo]`

---

## 5. Arquitetura do Sistema

### 5.1 Diagrama C4

Os três níveis são apresentados a seguir, acompanhados da descrição textual correspondente.

**Nível 1 — Contexto**

![C4 Nível 1 — Contexto](img/05-c4-contexto.svg)

- **Atores:** Usuário (pessoa com TB). O profissional de saúde é destinatário externo do relatório, não usuário do sistema.
- **Sistema:** MAREA.
- **Sistemas externos:** navegador do usuário (Service Worker, armazenamento local, API de notificações); serviço de e-mail transacional para recuperação de senha.
- **Fluxo de valor:** o usuário registra a rotina → o sistema processa, armazena e avalia regras → devolve notificações, gráficos e relatório mensal → o usuário compartilha o relatório com o profissional por meio externo.

**Nível 2 — Containers**

![C4 Nível 2 — Containers](img/06-c4-containers.svg)

| Container | Tecnologia | Responsabilidade |
|---|---|---|
| Aplicação Web (PWA) | React + Vite | Interface mobile-first, Service Worker, cache e armazenamento local |
| API | Node.js + Express | Regras de negócio, autenticação, persistência, motor de regras |
| Banco de dados | PostgreSQL | Persistência dos registros e das configurações |
| Serviço de relatório | Biblioteca de geração de PDF | Composição do relatório mensal com gráficos |

Comunicação entre a PWA e a API por JSON sobre HTTPS.

**Nível 3 — Componentes (dentro da API)**

![C4 Nível 3 — Componentes](img/07-c4-componentes.svg)

- **Controladores** — recepção das requisições HTTP e validação de entrada.
- **Serviços de domínio** — regras de negócio de registro, histórico e relatório.
- **Motor de regras** — avaliação dos gatilhos MR01–MR05.
- **Repositórios** — acesso a dados, isolando o ORM do domínio.
- **Módulo de autenticação** — emissão e verificação de tokens.
- **Camada de observabilidade** — exposição de métricas e logs estruturados.

### 5.2 Modelo de Dados

Entidades principais:

| Entidade | Atributos principais |
|---|---|
| `usuario` | id, email, senha_hash, criado_em |
| `registro_sono` | id, usuario_id, data_referencia, hora_dormir, hora_acordar, duracao_min |
| `registro_hidratacao` | id, usuario_id, data_referencia, quantidade_ml |
| `registro_medicacao` | id, usuario_id, data_referencia, medicamento_id, tomado, horario |
| `medicamento` | id, usuario_id, nome, dose, horario_previsto, ativo |
| `registro_humor` | id, usuario_id, data_referencia, nivel, observacao |
| `configuracao_regra` | id, usuario_id, regra_codigo, ativa, limiar |
| `notificacao` | id, usuario_id, regra_codigo, gerada_em, lida |
| `relatorio_mensal` | id, usuario_id, mes_referencia, gerado_em |

Relacionamento predominante: `usuario` 1:N com todas as demais entidades.

![Modelo de Dados — DER](img/08-der.svg)

### 5.3 Principais Componentes

- **PWA (frontend)** — telas de registro, histórico e relatório; Service Worker para cache e funcionamento offline; fila de sincronização.
- **API REST** — endpoints de autenticação, registros, configurações e relatório.
- **Motor de regras** — módulo isolado, sem dependência de framework, com alta cobertura de testes unitários.
- **Gerador de relatório** — composição do PDF mensal com gráficos.
- **Camada de persistência** — repositórios sobre PostgreSQL.
- **Pipeline de CI/CD** — build, testes, cobertura, análise estática e deploy.

### 5.4 Stack Tecnológica

| Tecnologia | Justificativa |
|---|---|
| **React + Vite** | Ecossistema maduro para SPA, com suporte consolidado a PWA via plugin de Service Worker e build otimizado. |
| **Node.js + Express** | Mesma linguagem no frontend e no backend, reduzindo custo de contexto em projeto individual; adequado a carga predominantemente de I/O. |
| **PostgreSQL** | Banco relacional em servidor, com suporte transacional e a tipos de data e hora adequados às séries temporais dos registros. |
| **Service Worker + IndexedDB** | Viabilizam o registro offline e a sincronização posterior (RF13, RF14). |
| **Jest / Vitest** | Execução dos testes unitários e apuração da cobertura exigida (RNF04). |
| **GitHub Actions** | Pipeline de CI/CD integrado ao repositório do projeto. |
| **SonarCloud** | Análise estática e de segurança do código (RNF10). |
| **Prometheus + Grafana** | Observabilidade e monitoramento em produção (RNF11). |
| **VPS em nuvem** | Hospedagem em ambiente produtivo público e estável (RNF07). |

**Decisões e alternativas consideradas**

| Decisão | Alternativa descartada | Justificativa |
|---|---|---|
| PostgreSQL | SQLite | Banco em disco local é vedado pelos critérios obrigatórios da linha Web Apps. |
| VPS | Vercel, Netlify, Render | Plataformas otimizadas para frontend estão vedadas pelos critérios da linha. |
| Deploy por pipeline | Deploy manual por SSH ou FTP | Deploy manual é vedado pelos critérios da linha. |
| PWA | Aplicativo nativo (Flutter) | Elimina a dependência de lojas e o custo de manutenção de duas bases de código. |
| Motor de regras determinístico | Modelo de aprendizado de máquina ou LLM | Previsibilidade em domínio de saúde, testabilidade e não exposição de dados sensíveis a terceiros. |

### 5.5 Princípios de Software Maduro

| Princípio | Aplicação no MAREA |
|---|---|
| **Disponibilidade** | Funcionamento offline via Service Worker mantém o registro possível mesmo com a API indisponível. |
| **Consistência** | Resolução de conflitos de sincronização por data de modificação mais recente (FA03). |
| **Resiliência** | Fila de sincronização com nova tentativa automática; degradação para modo somente leitura. |
| **Escalabilidade** | API sem estado, permitindo replicação horizontal. |
| **Teorema CAP** | Em cenário de partição, o sistema privilegia disponibilidade sobre consistência imediata: o registro local é sempre aceito e reconciliado depois. Trata-se de decisão adequada ao domínio, no qual perder o registro do usuário é mais grave que uma inconsistência temporária. |

---

## 6. Segurança e Privacidade

- **OWASP Top 10** — validação de entrada em todos os endpoints; consultas parametrizadas contra injeção; proteção de sessão; cabeçalhos de segurança; verificação de dependências vulneráveis no pipeline.
- **Autenticação e autorização** — senhas com hash e sal; tokens com expiração; verificação de propriedade do recurso em toda requisição (RN01).
- **Transporte** — HTTPS obrigatório.
- **Análise contínua** — SonarCloud no pipeline, bloqueando merge com issues críticas.

### 6.1 Privacidade e LGPD

**Dados coletados.** E-mail e senha para autenticação; registros de sono, hidratação, medicação e humor; configurações de regras e lembretes. Os registros constituem **dado pessoal sensível** nos termos do art. 5º, II, da Lei 13.709/2018, por dizerem respeito à saúde do titular.

**Base legal.** Consentimento do titular, coletado no cadastro, com finalidade específica e informada.

**Armazenamento.** Registros mantidos localmente no dispositivo sempre que a funcionalidade permitir; a persistência em servidor ocorre para viabilizar sincronização e recuperação, com acesso restrito ao próprio titular.

**Compartilhamento.** Não há compartilhamento automático com terceiros. O envio do relatório mensal a um profissional de saúde é ação deliberada do usuário, realizada por meio externo ao sistema.

**Direitos do titular.** Acesso aos próprios dados, correção de registros (RF05), portabilidade por meio da exportação em PDF (RF12) e eliminação definitiva mediante solicitação de exclusão da conta (RF16, RN08).

**Minimização.** Não são coletados nome civil, CPF, telefone, geolocalização ou quaisquer dados não essenciais à finalidade declarada.

---

## 7. Planejamento do Projeto

| Marco | Descrição | Prazo |
|---|---|---|
| **M0** | Definição do parceiro externo e início do trâmite de convênio | 28/08/2026 (sexta-feira) |
| **M1** | Primeira orientação evidenciada; RFC v2.0 aprovada, com a mudança de banco registrada em ata | 04/09/2026 (sexta-feira) |
| **M2** | Setup: repositório público, CI/CD, SonarCloud, PostgreSQL, ambiente de produção provisionado, prova de conceito de PWA | 18/09/2026 (sexta-feira) |
| **M3** | Segunda orientação evidenciada — **gate de habilitação** | 30/09/2026 (quarta-feira) |
| **M4** | Fluxo 1 concluído: registro diário das quatro variáveis, com testes | 16/10/2026 (sexta-feira) |
| **M5** | Fluxo 2 concluído: motor de regras e notificações, com testes; terceira orientação | 30/10/2026 (sexta-feira) |
| **M6** | Fluxo 3 concluído: histórico, gráficos e relatório mensal em PDF; quarta orientação | 13/11/2026 (sexta-feira) |
| **M7** | Estabilização: cobertura em 75%/25%, correção de issues do SonarCloud, observabilidade ativa, validação com o parceiro e peer review | 24/11/2026 (terça-feira) |
| **M8** | **Entrega:** software em release, prova de autoria, cinco orientações evidenciadas, aceite do parceiro, pôster em PDF com QR Code | 30/11/2026 (segunda-feira) |
| **M9** | Segunda tentativa da prova de autoria, se necessária | 03/12/2026 (quinta-feira) |
| **M10** | Poster + Demo Day | 10, 15 e 16/12/2026 |

O planejamento reserva as duas semanas finais (M7) para estabilização, por ser a cobertura de testes item verificado na prova de autoria e passível de reprovação.

---

## 8. Referências

ANMELLA, G.; FAURHOLT-JEPSEN, M. et al. Smartphone-based interventions in bipolar disorder: systematic review and meta-analyses of efficacy. A position paper from the International Society for Bipolar Disorders (ISBD) Big Data Task Force. **Bipolar Disorders**, 2022. DOI: 10.1111/bdi.13243.

BRASIL. **Lei nº 13.709, de 14 de agosto de 2018.** Lei Geral de Proteção de Dados Pessoais (LGPD).

FAURHOLT-JEPSEN, M. et al. Smartphone-based objective monitoring in bipolar disorder: status and considerations. **International Journal of Bipolar Disorders**, v. 6, n. 6, 2018. DOI: 10.1186/s40345-017-0110-8.

FAURHOLT-JEPSEN, M. et al. Objective smartphone data as a potential diagnostic marker of bipolar disorder. **Australian and New Zealand Journal of Psychiatry**, 2019. DOI: 10.1177/0004867418808900.

FIELDING, R. T. **Architectural Styles and the Design of Network-based Software Architectures.** Tese (Doutorado) — University of California, Irvine, 2000.

OWASP FOUNDATION. **OWASP Top 10.** Disponível em: https://owasp.org/www-project-top-ten/.

PRESSMAN, R.; MAXIM, B. **Engenharia de Software — Uma Abordagem Profissional.** 9. ed. Porto Alegre: AMGH, 2016.

SOMMERVILLE, I. **Software Engineering.** 10. ed. Boston: Addison-Wesley, 2015.

TAKAESU, Y. Circadian rhythm in bipolar disorder: a review of the literature. **Psychiatry and Clinical Neurosciences**, v. 72, n. 9, p. 673-682, 2018. DOI: 10.1111/pcn.12688.

TONON, A. C. et al. Sleep and circadian disruption in bipolar disorders: from psychopathology to digital phenotyping in clinical practice. **Psychiatry and Clinical Neurosciences**, v. 78, n. 11, p. 654-666, 2024. DOI: 10.1111/pcn.13729.

> ⚠️ **PENDENTE — acrescentar documentação técnica** de React, Vite, Node.js, Express, PostgreSQL, Service Worker (MDN) e do modelo C4, conforme exige o item "documentação técnica" do modelo.

---

## 9. Apêndices

### Apêndice A — Evolução futura

**Área para profissionais de saúde ("consultório online").** Ambiente autenticado no qual o profissional acessaria os relatórios mensais de pacientes vinculados, com histórico preservado. A funcionalidade foi avaliada e deliberadamente excluída do escopo desta entrega por três motivos: exigiria controle de acesso baseado em papéis e vínculo consentido entre contas, com custo incompatível com o prazo; implicaria armazenamento centralizado de dados de saúde de terceiros, elevando a exposição sob a LGPD; e contrariaria o eixo de privacidade local que constitui o diferencial do produto (§1.3). Permanece como direção natural de evolução, condicionada a respaldo jurídico e clínico adequado.

**Demais direções:** integração opcional com dados de sono de dispositivos vestíveis; internacionalização; modo para cuidador ou familiar com consentimento explícito.

### Apêndice B — Repositório e artefatos

- Repositório: `[A DEFINIR]`
- Aplicação em produção: `[A DEFINIR]`
- Wiki de documentação técnica: `[A DEFINIR]`
- Protótipo navegável: `[A DEFINIR]`

### Apêndice C — Instrumentos de pesquisa

`[A DEFINIR — questionário aplicado aos usuários e roteiro de entrevista com o parceiro externo]`
