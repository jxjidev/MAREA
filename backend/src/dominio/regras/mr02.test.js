import { describe, it, expect } from 'vitest';
import { avaliarMR02 } from './mr02.js';

describe('MR02 — medicação não tomada em dias consecutivos', () => {
  const hoje = new Date('2026-08-12');

  it('não dispara quando tomou hoje', () => {
    const registros = [{ dataReferencia: '2026-08-12', tomado: true }];

    expect(avaliarMR02(registros, hoje, 2)).toBe(false);
  });

  it('não dispara quando não tomou só hoje e o limiar é 2', () => {
    const registros = [{ dataReferencia: '2026-08-12', tomado: false }];

    expect(avaliarMR02(registros, hoje, 2)).toBe(false);
  });

  it('dispara quando não tomou hoje e ontem e o limiar é 2', () => {
    const registros = [
      { dataReferencia: '2026-08-12', tomado: false },
      { dataReferencia: '2026-08-11', tomado: false },
    ];

    expect(avaliarMR02(registros, hoje, 2)).toBe(true);
  });

  it('dispara quando não tomou hoje e ontem, mesmo tendo tomado anteontem', () => {
    const registros = [
      { dataReferencia: '2026-08-12', tomado: false },
      { dataReferencia: '2026-08-11', tomado: false },
      { dataReferencia: '2026-08-10', tomado: true },
    ];

    expect(avaliarMR02(registros, hoje, 2)).toBe(true);
  });

  it('não dispara quando a ausência de registro interrompe a sequência', () => {
    const registros = [
      { dataReferencia: '2026-08-12', tomado: false },
      { dataReferencia: '2026-08-10', tomado: false },
    ];

    expect(avaliarMR02(registros, hoje, 2)).toBe(false);
  });

  it('não dispara quando ter tomado interrompe a sequência', () => {
    const registros = [
      { dataReferencia: '2026-08-12', tomado: false },
      { dataReferencia: '2026-08-11', tomado: true },
      { dataReferencia: '2026-08-10', tomado: false },
    ];

    expect(avaliarMR02(registros, hoje, 2)).toBe(false);
  });

  it('não dispara quando não há registro nenhum', () => {
    expect(avaliarMR02([], hoje, 2)).toBe(false);
  });

  it('rejeita limiar inválido', () => {
    expect(() => avaliarMR02([], hoje, 0)).toThrow();
    expect(() => avaliarMR02([], hoje, -1)).toThrow();
  });
});