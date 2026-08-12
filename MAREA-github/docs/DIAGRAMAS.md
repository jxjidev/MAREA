# Catálogo de Diagramas — MAREA

Este documento reúne todos os diagramas do projeto em um só lugar, para visualização direta no GitHub. Cada diagrama indica a seção da [RFC](RFC.md) a que corresponde e o arquivo-fonte que o gera.

**Formatos disponíveis para cada diagrama:**

| Formato | Onde está | Para que serve |
|---|---|---|
| `.mmd` | `docs/diagramas-fonte/` | Código-fonte Mermaid — é o que se edita |
| `.svg` | `docs/img/` | Vetorial — RFC, Wiki e pôster A0 |
| `.png` | `docs/img/` | Bitmap 2× — Word e PowerPoint |

---

## Registro de versões

| Versão | Data | Alteração | Autor |
|---|---|---|---|
| 1.0 | 12/08/2026 | Criação dos 9 diagramas a partir da RFC v2.0 | Gabriel Costa dos Santos |

> Ao alterar um diagrama, edite o arquivo `.mmd`, regenere as imagens e registre a alteração nesta tabela.

---

## 1. Fluxo de Navegação

**Seção da RFC:** §4.1 — Mockups e Experiência do Usuário
**Fonte:** [`01-fluxo-navegacao.mmd`](diagramas-fonte/01-fluxo-navegacao.mmd)

Percurso do usuário entre as telas do sistema, do acesso inicial até a exportação do relatório mensal. Serve de referência para a construção dos mockups e para a definição das rotas da aplicação.

![Fluxo de Navegação](img/01-fluxo-navegacao.svg)

---

## 2. Diagrama de Atividades — Registro Diário

**Seção da RFC:** §3.1 — Fluxo Principal do Usuário
**Fonte:** [`02-atividades-registro.mmd`](diagramas-fonte/02-atividades-registro.mmd)

Fluxo completo de um registro, da seleção da variável até a atualização do painel. Contempla a validação de entrada, a verificação da regra RN02 (registro único de sono por data), a decisão entre envio imediato e enfileiramento offline, e o acionamento do motor de regras com a supressão de notificações repetidas prevista na RN06.

![Diagrama de Atividades](img/02-atividades-registro.svg)

---

## 3. Diagrama de Sequência — Registro com Sincronização

**Seção da RFC:** §3.1 — Fluxo Principal do Usuário
**Fonte:** [`03-sequencia-registro.mmd`](diagramas-fonte/03-sequencia-registro.mmd)

Interação entre usuário, PWA, Service Worker, IndexedDB, API e banco de dados nos dois cenários possíveis: com e sem conexão.

Observe que a confirmação ao usuário ocorre **antes** da comunicação com a API. É decisão deliberada: o registro é persistido localmente e confirmado de imediato, de modo que nunca falhe por indisponibilidade de rede. A sincronização acontece depois, de forma transparente. Corresponde ao posicionamento do sistema no teorema CAP descrito na §5.5 da RFC — disponibilidade privilegiada sobre consistência imediata.

![Diagrama de Sequência](img/03-sequencia-registro.svg)

---

## 4. Diagrama de Casos de Uso

**Seção da RFC:** §2.2 — Casos de Uso Principais
**Fonte:** [`04-casos-de-uso.mmd`](diagramas-fonte/04-casos-de-uso.mmd)

Os dez casos de uso do sistema e sua relação com o ator principal. O profissional de saúde aparece deliberadamente **fora** da fronteira do sistema: não possui conta nem acesso, recebendo o relatório apenas por compartilhamento externo feito pelo próprio usuário.

![Casos de Uso](img/04-casos-de-uso.svg)

---

## 5. C4 — Nível 1: Contexto

**Seção da RFC:** §5.1 — Arquitetura do Sistema
**Fonte:** [`05-c4-contexto.mmd`](diagramas-fonte/05-c4-contexto.mmd)

Visão macro: o MAREA como caixa preta, seus atores e os sistemas externos com os quais interage. O foco não é tecnologia, e sim como o software se encaixa no contexto real de uso.

![C4 Nível 1 — Contexto](img/05-c4-contexto.svg)

---

## 6. C4 — Nível 2: Containers

**Seção da RFC:** §5.1 — Arquitetura do Sistema
**Fonte:** [`06-c4-containers.mmd`](diagramas-fonte/06-c4-containers.mmd)

Decomposição do sistema em unidades de execução independentes, com as decisões tecnológicas fundamentais e os protocolos de comunicação entre elas.

![C4 Nível 2 — Containers](img/06-c4-containers.svg)

---

## 7. C4 — Nível 3: Componentes da API

**Seção da RFC:** §5.1 — Arquitetura do Sistema
**Fonte:** [`07-c4-componentes.mmd`](diagramas-fonte/07-c4-componentes.mmd)

Organização interna do container da API, em camadas. O **motor de regras** aparece destacado por concentrar a lógica de domínio específica do produto e por ser o componente com maior exigência de cobertura de testes unitários (RNF04).

![C4 Nível 3 — Componentes](img/07-c4-componentes.svg)

---

## 8. Modelo de Dados — DER

**Seção da RFC:** §5.2 — Modelo de Dados
**Fonte:** [`08-der.mmd`](diagramas-fonte/08-der.mmd)

Nove entidades, todas com relacionamento 1:N a partir de `usuario`, o que reflete a regra RN01 — cada usuário acessa exclusivamente os próprios registros.

O uso de **UUID** como chave primária, em vez de inteiro sequencial, decorre do requisito de operação offline (RF13): o identificador precisa ser gerado no cliente sem risco de colisão no momento da sincronização.

![Modelo de Dados](img/08-der.svg)

---

## 9. Motor de Regras — Fluxo de Avaliação

**Seção da RFC:** §2.5 — Regras de Negócio
**Fonte:** [`09-motor-regras.mmd`](diagramas-fonte/09-motor-regras.mmd)

Como cada gatilho é avaliado após a persistência de um registro. O motor percorre apenas as regras ativas do usuário, consulta a janela de registros exigida por cada uma e aplica o limiar configurado. A verificação da RN06 impede que a mesma regra notifique mais de uma vez no mesmo dia.

![Motor de Regras](img/09-motor-regras.svg)

---

## Como editar um diagrama

Os diagramas são gerados a partir de código, não desenhados manualmente. Para alterar qualquer um deles:

1. Edite o arquivo `.mmd` correspondente em `docs/diagramas-fonte/`.
2. Regenere as imagens:

```bash
npm install -g @mermaid-js/mermaid-cli
mmdc -i docs/diagramas-fonte/08-der.mmd -o docs/img/08-der.svg -b white -w 1400
mmdc -i docs/diagramas-fonte/08-der.mmd -o docs/img/08-der.png -b white -w 1600 -s 2
```

3. Registre a alteração na tabela de versões no topo deste documento.

Sem instalar nada: cole o conteúdo do `.mmd` em [mermaid.live](https://mermaid.live) e exporte por lá.
