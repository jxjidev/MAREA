# MAREA

**Aplicação Web Progressiva de apoio ao automonitoramento de rotina para pessoas com Transtorno Bipolar**

Projeto de Portfólio — Engenharia de Software, Centro Universitário Católica de Santa Catarina
Autor: Gabriel Costa dos Santos · Linha de projeto: **Web Apps** · Semestre 2026/2

---

## Sobre

O MAREA permite o registro diário de **sono, hidratação, medicação e humor**, identifica padrões por meio de um motor de regras e gera um relatório mensal em PDF que o próprio usuário compartilha com seu profissional de saúde.

Três características orientam o projeto:

- **Sem loja de aplicativos.** Por ser uma PWA, é acessada pelo navegador e instalável opcionalmente no dispositivo.
- **Funciona offline.** O registro nunca depende de conexão; a sincronização acontece depois.
- **Privacidade por decisão arquitetural.** Dados mantidos localmente sempre que possível; nenhum compartilhamento automático com terceiros.

O sistema **não** realiza diagnóstico, previsão clínica ou recomendação terapêutica, nem substitui acompanhamento profissional.

---

## 📄 Documentação

| Documento | Conteúdo |
|---|---|
| **[RFC — Documento do Projeto](docs/RFC.md)** | Documento principal: problema, benchmark, requisitos, arquitetura, segurança e planejamento |
| **[Catálogo de Diagramas](docs/DIAGRAMAS.md)** | Os 9 diagramas do projeto reunidos, com descrição individual e registro de versões |
| **[Pendências](docs/PENDENCIAS.md)** | O que ainda falta na documentação, organizado por prazo |
| **[Infraestrutura](docs/INFRAESTRUTURA.md)** | Provisionamento do servidor, acesso e operações |

### Atalhos para as seções da RFC

| Seção | Conteúdo |
|---|---|
| [1. Visão do Produto e Impacto](docs/RFC.md#1-visão-do-produto-e-impacto-o-problema) | Problema, evidências, benchmark, público-alvo, objetivos e KPIs |
| [2. Engenharia de Requisitos](docs/RFC.md#2-engenharia-de-requisitos) | Personas, casos de uso, RF, RNF, regras de negócio e fora do escopo |
| [3. Fluxos e Comportamento](docs/RFC.md#3-fluxos-e-comportamento-do-sistema) | Fluxo principal e fluxos alternativos |
| [4. Mockups e UX](docs/RFC.md#4-mockups-e-experiência-do-usuário-ux) | Navegação, wireframes e fluxo de interação |
| [5. Arquitetura do Sistema](docs/RFC.md#5-arquitetura-do-sistema) | C4, modelo de dados, componentes e stack |
| [6. Segurança e Privacidade](docs/RFC.md#6-segurança-e-privacidade) | OWASP Top 10 e conformidade com a LGPD |
| [7. Planejamento](docs/RFC.md#7-planejamento-do-projeto) | Marcos M0 a M10, com datas |
| [8. Referências](docs/RFC.md#8-referências) | Bibliografia e documentação técnica |
| [9. Apêndices](docs/RFC.md#9-apêndices) | Evolução futura, artefatos e instrumentos de pesquisa |

---

## 🏗️ Arquitetura

| Camada | Tecnologia |
|---|---|
| Frontend | React + Vite (PWA, Service Worker, IndexedDB) |
| Backend | Node.js + Express |
| Banco de dados | PostgreSQL |
| Testes | Jest / Vitest |
| CI/CD | GitHub Actions |
| Qualidade | SonarCloud |
| Observabilidade | Prometheus + Grafana |
| Hospedagem | VPS em nuvem |

Visão completa em [C4 — Nível 2: Containers](docs/DIAGRAMAS.md#6-c4-nível-2-containers).

---

## 🔗 Links do projeto

| Recurso | Endereço |
|---|---|
| Aplicação em produção | `a definir` |
| Protótipo navegável | `a definir` |
| Cobertura de testes | `a definir` |
| Análise estática | `a definir` |

---

## 📊 Metas de qualidade

| Métrica | Meta |
|---|---|
| Cobertura de testes — backend | ≥ 75% |
| Cobertura de testes — frontend | ≥ 25% |
| Tempo de resposta da API (p95) | < 300 ms |
| Lighthouse PWA | ≥ 90 |
| Issues críticas no SonarCloud | 0 |

Conjunto completo em [§1.6 — Métricas de Sucesso](docs/RFC.md#16-métricas-de-sucesso-kpis).

---

## 📅 Marcos

| Marco | Descrição | Prazo |
|---|---|---|
| M2 | Setup: repositório, CI/CD, SonarCloud, banco e ambiente de produção | 18/09/2026 |
| M3 | Segunda orientação evidenciada — *gate de habilitação* | 30/09/2026 |
| M4 | Fluxo 1: registro diário das quatro variáveis | 16/10/2026 |
| M5 | Fluxo 2: motor de regras e notificações | 30/10/2026 |
| M6 | Fluxo 3: histórico, gráficos e relatório mensal | 13/11/2026 |
| M7 | Estabilização: cobertura, qualidade e validação com o parceiro | 24/11/2026 |
| M8 | **Entrega e prova de autoria** | 30/11/2026 |
| M10 | Poster + Demo Day | 10, 15 e 16/12/2026 |

Cronograma completo em [§7 — Planejamento do Projeto](docs/RFC.md#7-planejamento-do-projeto).

---

## 📁 Estrutura do repositório

```
.
├── README.md                    ← este arquivo
└── docs/
    ├── RFC.md                   ← documento principal do projeto
    ├── DIAGRAMAS.md             ← catálogo visual dos diagramas
    ├── PENDENCIAS.md            ← o que ainda falta
    ├── img/                     ← diagramas em SVG e PNG
    └── diagramas-fonte/         ← código-fonte Mermaid (.mmd)
```

---

## Aviso

Este é um projeto acadêmico. Não constitui dispositivo médico, não realiza diagnóstico e não substitui acompanhamento profissional de saúde.
