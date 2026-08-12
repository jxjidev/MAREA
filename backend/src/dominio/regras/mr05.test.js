import { describe, it, expect } from 'vitest';
import { avaliarMR05 } from './mr05.js';

describe('MR05 — humor em extremo por dias consecutivos', () => {
  const hoje = new Date('2026-08-12');

  it('não dispara quando o humor está no meio da escala', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 3 },
      { dataReferencia: '2026-08-11', nivel: 3 },
      { dataReferencia: '2026-08-10', nivel: 3 },
    ];

    expect(avaliarMR05(registros, hoje, 3)).toBe(false);
  });

  it('não dispara com dois dias no extremo quando o limiar é três', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 1 },
      { dataReferencia: '2026-08-11', nivel: 1 },
    ];

    expect(avaliarMR05(registros, hoje, 3)).toBe(false);
  });

  it('dispara com exatamente três dias no extremo inferior', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 1 },
      { dataReferencia: '2026-08-11', nivel: 1 },
      { dataReferencia: '2026-08-10', nivel: 1 },
    ];

    expect(avaliarMR05(registros, hoje, 3)).toBe(true);
  });

  it('dispara com três dias no extremo superior', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 5 },
      { dataReferencia: '2026-08-11', nivel: 5 },
      { dataReferencia: '2026-08-10', nivel: 5 },
    ];

    expect(avaliarMR05(registros, hoje, 3)).toBe(true);
  });

  it('não dispara quando o polo alterna entre os extremos', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 1 },
      { dataReferencia: '2026-08-11', nivel: 5 },
      { dataReferencia: '2026-08-10', nivel: 1 },
    ];

    expect(avaliarMR05(registros, hoje, 3)).toBe(false);
  });

  it('não dispara quando um dia no meio da escala interrompe a sequência', () => {
    const registros = [
      { dataReferencia: '2026-08-12', nivel: 1 },
      { dataReferencia: '2026-08-11', nivel: 3 },
      { dataReferencia: '2026-08-10', nivel: 1 },
    ];

    expect(avaliarMR05(registros, hoje, 3)).toBe(false);
  });                          

    it('não dispara quando a ausência de registro interrompe a sequência', () => {
        const registros = [
          { dataReferencia: '2026-08-12', nivel: 1 },
          { dataReferencia: '2026-08-10', nivel: 1 },
          { dataReferencia: '2026-08-09', nivel: 1 },
        ];
    
        expect(avaliarMR05(registros, hoje, 3)).toBe(false);
      });
    
      it('não dispara quando não há registro nenhum', () => {
        expect(avaliarMR05([], hoje, 3)).toBe(false);
      });
    
      it('rejeita limiar inválido', () => {
        expect(() => avaliarMR05([], hoje, 0)).toThrow();
        expect(() => avaliarMR05([], hoje, -1)).toThrow();
      });

  });