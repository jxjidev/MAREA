# Diagramas — MAREA

Código-fonte em Mermaid. O GitHub renderiza estes blocos nativamente em arquivos `.md` e na Wiki.

---

## 1. Fluxo de Navegação (§4.1)

```mermaid
flowchart TD
    A[Acesso pelo navegador] --> B{Possui sessão ativa?}
    B -->|Não| C[Login]
    B -->|Sim| D[Dashboard]
    C --> E{Possui conta?}
    E -->|Não| F[Cadastro]
    F --> D
    E -->|Sim| D
    D --> G[Registro]
    D --> H[Histórico e gráficos]
    D --> I[Relatório mensal]
    D --> J[Configurações]
    G --> D
    H --> D
    I --> K[Exportar PDF]
    K --> L[Compartilhar]
    L --> D
    J --> M[Regras e limiares]
    J --> N[Lembretes]
    M --> D
    N --> D
```

---

## 2. Diagrama de Atividades — Registro Diário (§3.1)

```mermaid
flowchart TD
    S([Início]) --> A[Usuário abre o Dashboard]
    A --> B[Seleciona a variável a registrar]
    B --> C[Informa o valor]
    C --> D{Dados válidos?}
    D -->|Não| E[Exibe mensagem de validação]
    E --> C
    D -->|Sim| F{Já existe registro<br/>para a data?}
    F -->|Sim, e a regra RN02 se aplica| G[Oferece edição do registro existente]
    G --> C
    F -->|Não| H[Persiste no armazenamento local]
    H --> I{Há conexão?}
    I -->|Sim| J[Envia à API]
    I -->|Não| K[Marca como pendente de sincronização]
    J --> L{Envio bem-sucedido?}
    L -->|Não| K
    L -->|Sim| M[Marca como sincronizado]
    K --> N[Aciona o motor de regras]
    M --> N
    N --> O{Algum gatilho<br/>foi satisfeito?}
    O -->|Não| P[Atualiza o Dashboard]
    O -->|Sim| Q{Regra já notificada hoje?<br/>RN06}
    Q -->|Sim| P
    Q -->|Não| R[Emite notificação]
    R --> P
    P --> T([Fim])
```

---

## 3. Diagrama de Sequência — Registro com Sincronização (§3.1)

```mermaid
sequenceDiagram
    actor U as Usuário
    participant PWA as Aplicação PWA
    participant SW as Service Worker
    participant DB as IndexedDB
    participant API as API (Node/Express)
    participant PG as PostgreSQL

    U->>PWA: Informa o registro
    PWA->>PWA: Valida os dados
    PWA->>DB: Persiste o registro
    DB-->>PWA: Confirma persistência
    PWA-->>U: Exibe confirmação imediata

    alt Com conexão
        PWA->>API: POST /registros
        API->>API: Autentica e autoriza (RN01)
        API->>PG: Grava o registro
        PG-->>API: Confirma gravação
        API->>API: Executa o motor de regras
        API-->>PWA: 201 Created + alertas gerados
        PWA->>DB: Marca como sincronizado
        PWA-->>U: Exibe notificação, se houver
    else Sem conexão
        PWA->>DB: Marca como pendente
        PWA->>SW: Registra sincronização em segundo plano
        Note over SW: Aguarda o retorno da conexão
        SW->>API: POST /registros (fila pendente)
        API->>PG: Grava os registros
        PG-->>API: Confirma gravação
        API-->>SW: 201 Created
        SW->>DB: Marca como sincronizado
        SW-->>U: Notifica a sincronização concluída
    end
```

---

## 4. Diagrama de Casos de Uso (§2.2)

```mermaid
flowchart LR
    U(("Usuário"))
    P(("Profissional<br/>de saúde"))

    subgraph MAREA
        UC01[UC01 Registrar sono]
        UC02[UC02 Registrar hidratação]
        UC03[UC03 Registrar medicação]
        UC04[UC04 Registrar humor]
        UC05[UC05 Visualizar histórico]
        UC06[UC06 Receber notificação]
        UC07[UC07 Configurar regras e lembretes]
        UC08[UC08 Exportar relatório mensal]
        UC09[UC09 Utilizar sem conexão]
        UC10[UC10 Instalar no dispositivo]
    end

    R[/Relatório em PDF/]

    U --- UC01
    U --- UC02
    U --- UC03
    U --- UC04
    U --- UC05
    U --- UC06
    U --- UC07
    U --- UC08
    U --- UC09
    U --- UC10
    UC08 --> R
    R -.compartilhamento externo.-> P
```

> O profissional de saúde não é ator do sistema: não possui conta nem acesso. Recebe o relatório por meio externo, por ação deliberada do usuário.

---

## 5. C4 — Nível 1: Contexto (§5.1)

```mermaid
flowchart TD
    U["<b>Usuário</b><br/><i>[Pessoa]</i><br/>Pessoa com Transtorno Bipolar<br/>que registra a própria rotina"]
    S["<b>MAREA</b><br/><i>[Sistema]</i><br/>Aplicação Web Progressiva de<br/>automonitoramento de rotina"]
    N["<b>Navegador</b><br/><i>[Sistema externo]</i><br/>Service Worker, armazenamento<br/>local e notificações"]
    E["<b>Serviço de e-mail</b><br/><i>[Sistema externo]</i><br/>Recuperação de senha"]
    P["<b>Profissional de saúde</b><br/><i>[Pessoa — fora do sistema]</i><br/>Recebe o relatório mensal"]

    U -->|"Registra sono, hidratação,<br/>medicação e humor"| S
    S -->|"Devolve notificações,<br/>gráficos e relatório mensal"| U
    S -->|"Utiliza recursos de"| N
    S -->|"Envia mensagens<br/>transacionais via"| E
    U -.->|"Compartilha o relatório<br/>por meio externo"| P

    style S fill:#1168bd,color:#fff
    style U fill:#08427b,color:#fff
    style N fill:#999,color:#fff
    style E fill:#999,color:#fff
    style P fill:#ccc,color:#000
```

---

## 6. C4 — Nível 2: Containers (§5.1)

```mermaid
flowchart TD
    U(["<b>Usuário</b><br/><i>[Pessoa]</i>"])

    subgraph MAREA["Sistema MAREA"]
        PWA["<b>Aplicação Web (PWA)</b><br/><i>[React + Vite]</i><br/>Interface mobile-first, Service Worker,<br/>cache e fila de sincronização"]
        LOCAL[("<b>Armazenamento local</b><br/><i>[IndexedDB]</i><br/>Registros offline e<br/>fila de pendências")]
        API["<b>API</b><br/><i>[Node.js + Express]</i><br/>Regras de negócio, autenticação,<br/>motor de regras"]
        PDF["<b>Gerador de relatório</b><br/><i>[Biblioteca de PDF]</i><br/>Composição do relatório<br/>mensal com gráficos"]
        PG[("<b>Banco de dados</b><br/><i>[PostgreSQL]</i><br/>Registros e configurações")]
    end

    OBS["<b>Observabilidade</b><br/><i>[Prometheus + Grafana]</i>"]

    U -->|"Acessa via HTTPS"| PWA
    PWA -->|"Lê e grava"| LOCAL
    PWA -->|"JSON sobre HTTPS"| API
    API -->|"SQL"| PG
    API -->|"Solicita geração"| PDF
    PDF -->|"Retorna o PDF"| PWA
    API -->|"Expõe métricas"| OBS

    style PWA fill:#1168bd,color:#fff
    style API fill:#1168bd,color:#fff
    style PDF fill:#1168bd,color:#fff
    style PG fill:#1168bd,color:#fff
    style LOCAL fill:#1168bd,color:#fff
    style U fill:#08427b,color:#fff
    style OBS fill:#999,color:#fff
```

---

## 7. C4 — Nível 3: Componentes da API (§5.1)

```mermaid
flowchart TD
    PWA["<b>Aplicação Web (PWA)</b><br/><i>[Container]</i>"]

    subgraph API["Container: API — Node.js + Express"]
        CTRL["<b>Controladores</b><br/>Recepção HTTP e<br/>validação de entrada"]
        AUTH["<b>Módulo de autenticação</b><br/>Emissão e verificação<br/>de tokens"]
        SVC["<b>Serviços de domínio</b><br/>Registro, histórico<br/>e relatório"]
        MR["<b>Motor de regras</b><br/>Avaliação dos gatilhos<br/>MR01 a MR05"]
        REPO["<b>Repositórios</b><br/>Acesso a dados,<br/>isolando o ORM"]
        OBSC["<b>Observabilidade</b><br/>Métricas e<br/>logs estruturados"]
    end

    PG[("<b>PostgreSQL</b><br/><i>[Container]</i>")]

    PWA -->|"JSON/HTTPS"| CTRL
    CTRL --> AUTH
    CTRL --> SVC
    SVC --> MR
    SVC --> REPO
    MR --> REPO
    REPO -->|"SQL"| PG
    CTRL --> OBSC
    SVC --> OBSC

    style CTRL fill:#85bbf0,color:#000
    style AUTH fill:#85bbf0,color:#000
    style SVC fill:#85bbf0,color:#000
    style MR fill:#f5a623,color:#000
    style REPO fill:#85bbf0,color:#000
    style OBSC fill:#85bbf0,color:#000
    style PWA fill:#1168bd,color:#fff
    style PG fill:#1168bd,color:#fff
```

> O **motor de regras** aparece destacado por ser o componente com maior exigência de cobertura de testes unitários (RNF04) e por concentrar a lógica de domínio específica do produto.

---

## 8. Modelo de Dados — DER (§5.2)

```mermaid
erDiagram
    USUARIO ||--o{ REGISTRO_SONO : possui
    USUARIO ||--o{ REGISTRO_HIDRATACAO : possui
    USUARIO ||--o{ REGISTRO_HUMOR : possui
    USUARIO ||--o{ MEDICAMENTO : cadastra
    USUARIO ||--o{ REGISTRO_MEDICACAO : possui
    USUARIO ||--o{ CONFIGURACAO_REGRA : configura
    USUARIO ||--o{ NOTIFICACAO : recebe
    USUARIO ||--o{ RELATORIO_MENSAL : gera
    MEDICAMENTO ||--o{ REGISTRO_MEDICACAO : referencia

    USUARIO {
        uuid id PK
        varchar email UK
        varchar senha_hash
        timestamp criado_em
    }
    REGISTRO_SONO {
        uuid id PK
        uuid usuario_id FK
        date data_referencia
        time hora_dormir
        time hora_acordar
        int duracao_min
        timestamp atualizado_em
    }
    REGISTRO_HIDRATACAO {
        uuid id PK
        uuid usuario_id FK
        date data_referencia
        int quantidade_ml
        timestamp atualizado_em
    }
    MEDICAMENTO {
        uuid id PK
        uuid usuario_id FK
        varchar nome
        varchar dose
        time horario_previsto
        boolean ativo
    }
    REGISTRO_MEDICACAO {
        uuid id PK
        uuid usuario_id FK
        uuid medicamento_id FK
        date data_referencia
        boolean tomado
        time horario
        timestamp atualizado_em
    }
    REGISTRO_HUMOR {
        uuid id PK
        uuid usuario_id FK
        date data_referencia
        smallint nivel
        text observacao
        timestamp atualizado_em
    }
    CONFIGURACAO_REGRA {
        uuid id PK
        uuid usuario_id FK
        varchar regra_codigo
        boolean ativa
        jsonb limiar
    }
    NOTIFICACAO {
        uuid id PK
        uuid usuario_id FK
        varchar regra_codigo
        timestamp gerada_em
        boolean lida
    }
    RELATORIO_MENSAL {
        uuid id PK
        uuid usuario_id FK
        date mes_referencia
        timestamp gerado_em
    }
```

---

## 9. Motor de Regras — Fluxo de Avaliação (§2.5)

```mermaid
flowchart TD
    S([Registro persistido]) --> A[Carrega as regras ativas do usuário]
    A --> B{Há regra a avaliar?}
    B -->|Não| Z([Fim])
    B -->|Sim| C[Seleciona a próxima regra]
    C --> D[Consulta a janela de registros<br/>exigida pela regra]
    D --> E{Condição satisfeita<br/>para o limiar configurado?}
    E -->|Não| B
    E -->|Sim| F{Já houve notificação<br/>desta regra hoje? RN06}
    F -->|Sim| B
    F -->|Não| G[Registra a notificação]
    G --> H[Envia ao usuário]
    H --> B
```
