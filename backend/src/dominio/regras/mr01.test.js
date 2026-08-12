import { describe, it, expect } from 'vitest';
import { avaliarMR01 } from './mr01.js';

describe('MR01 — ausência de registros', () => {

  it('não dispara quando há registro hoje', () => {
    const hoje = new Date('2026-08-12');
    const registros = [{ dataReferencia: '2026-08-12' }];

    expect(avaliarMR01(registros, hoje, 3)).toBe(false);
  });

  it('não dispara quando o último registro foi há 2 dias e o limiar é 3', () => {
    const hoje = new Date('2026-08-12');
    const registros = [{ dataReferencia: '2026-08-10' }];

    expect(avaliarMR01(registros, hoje, 3)).toBe(false);
  });

  it('dispara quando o último registro foi há exatamente 3 dias e o limiar é 3', () => {
    const hoje = new Date('2026-08-12');
    const registros = [{ dataReferencia: '2026-08-09' }];

    expect(avaliarMR01(registros, hoje, 3)).toBe(true);
  });

  it('considera apenas o registro mais recente quando há vários', () => {
    const hoje = new Date('2026-08-12');
    const registros = [
      { dataReferencia: '2026-07-20' },
      { dataReferencia: '2026-08-11' },
      { dataReferencia: '2026-08-01' },
    ];

    expect(avaliarMR01(registros, hoje, 3)).toBe(false);
  });

  it('dispara quando o usuário nunca registrou nada', () => {
    const hoje = new Date('2026-08-12');

    expect(avaliarMR01([], hoje, 3)).toBe(true);
  });

  it('não dispara com registro em data futura', () => {
    const hoje = new Date('2026-08-12');
    const registros = [{ dataReferencia: '2026-08-20' }];

    expect(avaliarMR01(registros, hoje, 3)).toBe(false);
  });

  it('rejeita limiar inválido', () => {
    const hoje = new Date('2026-08-12');

    expect(() => avaliarMR01([], hoje, 0)).toThrow();
    expect(() => avaliarMR01([], hoje, -1)).toThrow();
  });

});