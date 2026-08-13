-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro_sono" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "data_referencia" DATE NOT NULL,
    "hora_dormir" TEXT NOT NULL,
    "hora_acordar" TEXT NOT NULL,
    "duracao_min" INTEGER NOT NULL,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registro_sono_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro_hidratacao" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "data_referencia" DATE NOT NULL,
    "quantidade_ml" INTEGER NOT NULL,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registro_hidratacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicamento" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dose" TEXT NOT NULL,
    "horario_previsto" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "medicamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro_medicacao" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "medicamento_id" TEXT NOT NULL,
    "data_referencia" DATE NOT NULL,
    "tomado" BOOLEAN NOT NULL,
    "horario" TEXT,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registro_medicacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro_humor" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "data_referencia" DATE NOT NULL,
    "nivel" SMALLINT NOT NULL,
    "observacao" TEXT,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registro_humor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configuracao_regra" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "regra_codigo" TEXT NOT NULL,
    "ativa" BOOLEAN NOT NULL DEFAULT true,
    "limiar" JSONB NOT NULL,

    CONSTRAINT "configuracao_regra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificacao" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "regra_codigo" TEXT NOT NULL,
    "gerada_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lida" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "notificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relatorio_mensal" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "mes_referencia" DATE NOT NULL,
    "gerado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "relatorio_mensal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "registro_sono_usuario_id_data_referencia_key" ON "registro_sono"("usuario_id", "data_referencia");

-- CreateIndex
CREATE UNIQUE INDEX "registro_hidratacao_usuario_id_data_referencia_key" ON "registro_hidratacao"("usuario_id", "data_referencia");

-- CreateIndex
CREATE UNIQUE INDEX "registro_medicacao_medicamento_id_data_referencia_key" ON "registro_medicacao"("medicamento_id", "data_referencia");

-- CreateIndex
CREATE UNIQUE INDEX "registro_humor_usuario_id_data_referencia_key" ON "registro_humor"("usuario_id", "data_referencia");

-- CreateIndex
CREATE UNIQUE INDEX "configuracao_regra_usuario_id_regra_codigo_key" ON "configuracao_regra"("usuario_id", "regra_codigo");

-- CreateIndex
CREATE UNIQUE INDEX "relatorio_mensal_usuario_id_mes_referencia_key" ON "relatorio_mensal"("usuario_id", "mes_referencia");

-- AddForeignKey
ALTER TABLE "registro_sono" ADD CONSTRAINT "registro_sono_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_hidratacao" ADD CONSTRAINT "registro_hidratacao_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicamento" ADD CONSTRAINT "medicamento_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_medicacao" ADD CONSTRAINT "registro_medicacao_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_medicacao" ADD CONSTRAINT "registro_medicacao_medicamento_id_fkey" FOREIGN KEY ("medicamento_id") REFERENCES "medicamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_humor" ADD CONSTRAINT "registro_humor_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configuracao_regra" ADD CONSTRAINT "configuracao_regra_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificacao" ADD CONSTRAINT "notificacao_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relatorio_mensal" ADD CONSTRAINT "relatorio_mensal_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
