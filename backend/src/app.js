import express from 'express';

export function criarApp() {
  const app = express();

  app.use(express.json());

  app.get('/api/saude', (req, res) => {
    res.json({
      status: 'ok',
      servico: 'marea-api',
      versao: '0.1.0',
      horario: new Date().toISOString(),
    });
  });

  return app;
}