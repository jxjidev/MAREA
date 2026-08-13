# Infraestrutura

Documentação do ambiente de produção do MAREA: como foi provisionado, como acessar e como recriar.

**Última atualização:** 13/08/2026

---

## Visão geral

O MAREA roda em uma única instância EC2 na AWS, que hospeda a aplicação Node.js, o banco PostgreSQL e o Nginx como proxy reverso.

**Decisão de arquitetura:** banco de dados na mesma instância, em vez de um serviço gerenciado (RDS). A escolha decorre de restrição de custo em projeto acadêmico — o RDS não é coberto de forma suficiente pelo nível gratuito. Em ambiente de produção real, separar o banco em instância dedicada seria o passo seguinte, com ganho em backup automatizado, alta disponibilidade e escalabilidade independente.

---

## Recursos provisionados

| Item | Valor |
|---|---|
| Provedor | AWS |
| Região | sa-east-1 (São Paulo) |
| Serviço | EC2 |
| Tipo de instância | t3.micro (nível gratuito) |
| Sistema operacional | Ubuntu Server 24.04 LTS |
| ID da instância | `i-0946238c163610cb7` |
| IP público | `18.229.105.19` (Elastic IP, fixo) |
| Armazenamento | 20 GiB, gp3, 3000 IOPS |
| Criptografia do volume | Habilitada, chave `aws/ebs` |
| Proteção contra encerramento | Habilitada |

**Região São Paulo** foi escolhida por dois motivos: menor latência para os usuários do público-alvo, e hospedagem em território nacional dos dados de saúde tratados, o que reforça a adequação à LGPD descrita na seção 6.1 da RFC.

**Criptografia em repouso** foi habilitada por se tratar de dado pessoal sensível nos termos do art. 5º, II, da Lei 13.709/2018.

**Elastic IP** garante endereço fixo. Sem ele, o IP público muda a cada parada e reinício da instância, quebrando links publicados.

---

## Regras de firewall (grupo de segurança)

| Porta | Protocolo | Origem | Finalidade |
|---|---|---|---|
| 22 | TCP | IP administrativo específico | Acesso SSH |
| 80 | TCP | 0.0.0.0/0 | HTTP público |
| 443 | TCP | 0.0.0.0/0 | HTTPS público |

A porta 22 é restrita a um único endereço, enquanto 80 e 443 são públicas. A distinção é deliberada: o serviço precisa ser acessível a qualquer usuário, mas o acesso administrativo não. Portas SSH expostas à internet recebem tentativas automatizadas de invasão em poucas horas.

> **Consequência operacional:** ao trocar de rede, o endereço de origem muda e o acesso SSH deixa de funcionar. É necessário atualizar a regra no console da AWS com o novo endereço.

---

## Acesso

```bash
ssh -i ~/.ssh/marea-key.pem ubuntu@18.229.105.19
```

A chave privada `marea-key.pem` é gerada uma única vez, no momento da criação do par de chaves, e não pode ser recuperada pela AWS. Deve ser mantida com permissão `400` (leitura apenas pelo proprietário) — o cliente SSH recusa a conexão caso o arquivo esteja acessível a outros usuários.

```bash
chmod 400 ~/.ssh/marea-key.pem
```

---

## Provisionamento

Sequência executada na instância após a criação. Reproduzível em uma instância nova do mesmo sistema operacional.

### 1. Atualização do sistema

```bash
sudo apt update && sudo apt upgrade -y
```

A imagem base disponibilizada pela AWS pode ter semanas ou meses. A atualização aplica correções de segurança publicadas nesse intervalo.

### 2. Node.js 22

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

O repositório oficial do Node é adicionado porque a versão distribuída pelo Ubuntu costuma estar defasada. A versão 22 corresponde à utilizada em desenvolvimento e no pipeline de integração contínua.

Verificação:

```bash
node -v    # v22.x
npm -v
```

### 3. PostgreSQL

```bash
sudo apt install -y postgresql postgresql-contrib
sudo systemctl status postgresql
```

O serviço é habilitado automaticamente na inicialização do sistema.

### 4. Nginx

```bash
sudo apt install -y nginx
```

O Nginx atua como proxy reverso: recebe as requisições nas portas 80 e 443 e as encaminha para a aplicação Node, que escuta em porta interna. Essa arquitetura permite o encerramento TLS, o serviço de arquivos estáticos e a substituição da aplicação sem interrupção da porta pública.

---

## Segurança da conta AWS

- Autenticação multifator (MFA) habilitada na conta raiz
- Orçamento de gasto zero configurado, com notificação por e-mail
- Volume EBS criptografado em repouso
- Acesso SSH por par de chaves, sem autenticação por senha
- Proteção contra encerramento habilitada na instância

---

## Operações

**Parar** a instância desliga a máquina e preserva o disco; a instância pode ser reiniciada posteriormente.

**Encerrar** destrói a instância. Como o volume está configurado com "excluir no encerramento", o disco e o banco de dados são removidos junto. A proteção contra encerramento está habilitada e precisa ser desativada explicitamente antes de qualquer tentativa.

Reinício do Nginx após alteração de configuração:

```bash
sudo systemctl restart nginx
```

Verificação do estado dos serviços:

```bash
sudo systemctl status nginx
sudo systemctl status postgresql
```

---

## Pendências

- [ ] Certificado TLS e redirecionamento de HTTP para HTTPS
- [ ] Configuração do Nginx como proxy reverso para a aplicação Node
- [ ] Banco de dados de produção e aplicação das migrações
- [ ] Deploy automatizado a partir do pipeline de integração contínua
- [ ] Monitoramento e observabilidade (Prometheus e Grafana)
- [ ] Rotina de backup do banco de dados