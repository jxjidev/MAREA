import { describe, it, expect } from 'vitest';
import { avaliarMR04 } from './mr04.js';

describe('MR04 — irregularidade do horário de dormir', () => {
  const hoje = new Date('2026-08-12');

  it('não dispara quando os horários são regulares', () => {
    const registros = [
      { dataReferencia: '2026-08-12', horaDormir: '23:00' },
      { dataReferencia: '2026-08-11', horaDormir: '23:15' },
      { dataReferencia: '2026-08-10', horaDormir: '22:50' },
      { dataReferencia: '2026-08-09', horaDormir: '23:10' },
    ];

    expect(avaliarMR04(registros, hoje, 2)).toBe(false);
  });

  it('dispara quando a amplitude ultrapassa o limiar', () => {
    const registros = [
      { dataReferencia: '2026-08-12', horaDormir: '21:00' },
      { dataReferencia: '2026-08-11', horaDormir: '23:00' },
      { dataReferencia: '2026-08-10', horaDormir: '02:00' },
    ];

    expect(avaliarMR04(registros, hoje, 2)).toBe(true);
  });

  it('trata corretamente horários que atravessam a meia-noite', () => {
    const registros = [
      { dataReferencia: '2026-08-12', horaDormir: '23:00' },
      { dataReferencia: '2026-08-11', horaDormir: '00:00' },
      { dataReferencia: '2026-08-10', horaDormir: '01:00' },
    ];

    expect(avaliarMR04(registros, hoje, 3)).toBe(false);
  });
  it('não avalia com menos de três registros na janela', () => {
    const registros = [
      { dataReferencia: '2026-08-12', horaDormir: '21:00' },
      { dataReferencia: '2026-08-11', horaDormir: '03:00' },
    ];

    expect(avaliarMR04(registros, hoje, 2)).toBe(false);
  });

  it('ignora registros fora da janela de sete dias', () => {
    const registros = [
      { dataReferencia: '2026-08-12', horaDormir: '23:00' },
      { dataReferencia: '2026-08-11', horaDormir: '23:10' },
      { dataReferencia: '2026-08-10', horaDormir: '22:55' },
      { dataReferencia: '2026-08-01', horaDormir: '04:00' },
    ];

    expect(avaliarMR04(registros, hoje, 2)).toBe(false);
  });

  it('inclui o sétimo dia da janela', () => {
    const registros = [
      { dataReferencia: '2026-08-12', horaDormir: '23:00' },
      { dataReferencia: '2026-08-11', horaDormir: '23:00' },
      { dataReferencia: '2026-08-06', horaDormir: '02:00' },
    ];

    expect(avaliarMR04(registros, hoje, 2)).toBe(true);
  });

  it('não dispara quando a amplitude é exatamente o limiar', () => {
    const registros = [
      { dataReferencia: '2026-08-12', horaDormir: '22:00' },
      { dataReferencia: '2026-08-11', horaDormir: '23:00' },
      { dataReferencia: '2026-08-10', horaDormir: '00:00' },
    ];

    expect(avaliarMR04(registros, hoje, 2)).toBe(false);
  });

  it('não dispara quando não há registro nenhum', () => {
    expect(avaliarMR04([], hoje, 2)).toBe(false);
  });

  it('rejeita limiar inválido', () => {
    expect(() => avaliarMR04([], hoje, 0)).toThrow();
    expect(() => avaliarMR04([], hoje, -1)).toThrow();
  });

  it('rejeita horário em formato inválido', () => {
    const registros = [
      { dataReferencia: '2026-08-12', horaDormir: '25:00' },
      { dataReferencia: '2026-08-11', horaDormir: '23:00' },
      { dataReferencia: '2026-08-10', horaDormir: '22:00' },
    ];

    expect(() => avaliarMR04(registros, hoje, 2)).toThrow();
  });

});