import { describe, it, expect } from 'vitest';
import { avaliarMR07 } from './mr07.js';

describe('MR07 — alternância entre polos do humor', () => {
  const hoje = new Date('2026-08-12');

  it('não dispara quando o humor permanece no mesmo polo', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 1 },
      { dataReferencia: '2026-08-11', nivel: 1 },
      { dataReferencia: '2026-08-10', nivel: 1 },
    ];

    expect(avaliarMR07(registros, hoje, 2)).toBe(false);
  });

  it('não dispara com uma única alternância', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 5 },
      { dataReferencia: '2026-08-11', nivel: 1 },
    ];

    expect(avaliarMR07(registros, hoje, 2)).toBe(false);
  });

  it('dispara com duas alternâncias na janela', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 1 },
      { dataReferencia: '2026-08-11', nivel: 5 },
      { dataReferencia: '2026-08-10', nivel: 1 },
    ];

    expect(avaliarMR07(registros, hoje, 2)).toBe(true);
  });

  it('conta a alternância mesmo com dias no meio da escala entre os polos', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 5 },
      { dataReferencia: '2026-08-11', nivel: 3 },
      { dataReferencia: '2026-08-10', nivel: 1 },
      { dataReferencia: '2026-08-09', nivel: 3 },
      { dataReferencia: '2026-08-08', nivel: 5 },
    ];

    expect(avaliarMR07(registros, hoje, 2)).toBe(true);
  });

  it('dispara mesmo que o humor de hoje esteja no meio da escala', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 3 },
      { dataReferencia: '2026-08-11', nivel: 1 },
      { dataReferencia: '2026-08-10', nivel: 5 },
      { dataReferencia: '2026-08-09', nivel: 1 },
    ];

    expect(avaliarMR07(registros, hoje, 2)).toBe(true);
  });

  it('ignora registros fora da janela de sete dias', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 1 },
      { dataReferencia: '2026-08-11', nivel: 5 },
      { dataReferencia: '2026-08-01', nivel: 1 },
    ];

    expect(avaliarMR07(registros, hoje, 2)).toBe(false);
  });

  it('inclui o sétimo dia da janela', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 1 },
      { dataReferencia: '2026-08-11', nivel: 5 },
      { dataReferencia: '2026-08-06', nivel: 1 },
    ];

    expect(avaliarMR07(registros, hoje, 2)).toBe(true);
  });

  it('não dispara quando não há registro nenhum', () => {
    expect(avaliarMR07([], hoje, 2)).toBe(false);
  });

  it('rejeita limiar inválido', () => {
    expect(() => avaliarMR07([], hoje, 0)).toThrow();
    expect(() => avaliarMR07([], hoje, -1)).toThrow();
  });

});