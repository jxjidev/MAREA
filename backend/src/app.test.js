import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { criarApp } from './app.js';

describe('API — endpoint de saúde', () => {
  const app = criarApp();

  it('responde com status 200', async () => {
    const resposta = await request(app).get('/api/saude');

    expect(resposta.status).toBe(200);
  });

  it('informa que o serviço está operacional', async () => {
    const resposta = await request(app).get('/api/saude');

    expect(resposta.body.status).toBe('ok');
    expect(resposta.body.servico).toBe('marea-api');
  });

  it('retorna um horário em formato ISO válido', async () => {
    const resposta = await request(app).get('/api/saude');

    expect(Number.isNaN(Date.parse(resposta.body.horario))).toBe(false);
  });

  it('responde 404 em rota inexistente', async () => {
    const resposta = await request(app).get('/api/nao-existe');

    expect(resposta.status).toBe(404);
  });
});