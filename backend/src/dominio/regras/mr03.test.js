import { describe, it, expect } from 'vitest';
import { avaliarMR03 } from './mr03.js';

describe('MR03 — sono insuficiente em noites consecutivas', () => {
  const hoje = new Date('2026-08-12');

  it('não dispara quando dormiu bem hoje', () => {
    const registros = [{ dataReferencia: '2026-08-12', duracaoMin: 480 }];

    expect(avaliarMR03(registros, hoje, 6, 3)).toBe(false);
  });

  it('não dispara com duas noites ruins quando o limiar é três', () => {
    const registros = [
      { dataReferencia: '2026-08-12', duracaoMin: 300 },
      { dataReferencia: '2026-08-11', duracaoMin: 320 },
    ];

    expect(avaliarMR03(registros, hoje, 6, 3)).toBe(false);
  });

  it('dispara com exatamente três noites ruins consecutivas', () => {
    const registros = [
      { dataReferencia: '2026-08-12', duracaoMin: 300 },
      { dataReferencia: '2026-08-11', duracaoMin: 320 },
      { dataReferencia: '2026-08-10', duracaoMin: 200 },
    ];

    expect(avaliarMR03(registros, hoje, 6, 3)).toBe(true);
  });

  it('não considera ruim a noite com duração exatamente igual ao limiar', () => {
    const registros = [
      { dataReferencia: '2026-08-12', duracaoMin: 360 },
      { dataReferencia: '2026-08-11', duracaoMin: 360 },
      { dataReferencia: '2026-08-10', duracaoMin: 360 },
    ];

    expect(avaliarMR03(registros, hoje, 6, 3)).toBe(false);
  });

  it('não dispara quando uma noite boa interrompe a sequência', () => {
    const registros = [
      { dataReferencia: '2026-08-12', duracaoMin: 300 },
      { dataReferencia: '2026-08-11', duracaoMin: 480 },
      { dataReferencia: '2026-08-10', duracaoMin: 300 },
    ];

    expect(avaliarMR03(registros, hoje, 6, 3)).toBe(false);
  });

  it('não dispara quando a ausência de registro interrompe a sequência', () => {
    const registros = [
      { dataReferencia: '2026-08-12', duracaoMin: 300 },
      { dataReferencia: '2026-08-10', duracaoMin: 300 },
      { dataReferencia: '2026-08-09', duracaoMin: 300 },
    ];

    expect(avaliarMR03(registros, hoje, 6, 3)).toBe(false);
  });

  it('respeita limiar de horas personalizado', () => {
    const registros = [
      { dataReferencia: '2026-08-12', duracaoMin: 420 },
      { dataReferencia: '2026-08-11', duracaoMin: 420 },
    ];

    expect(avaliarMR03(registros, hoje, 8, 2)).toBe(true);
    expect(avaliarMR03(registros, hoje, 6, 2)).toBe(false);
  });

  it('não dispara quando não há registro nenhum', () => {
    expect(avaliarMR03([], hoje, 6, 3)).toBe(false);
  });

  it('rejeita limiares inválidos', () => {
    expect(() => avaliarMR03([], hoje, 0, 3)).toThrow();
    expect(() => avaliarMR03([], hoje, 6, 0)).toThrow();
    expect(() => avaliarMR03([], hoje, -1, 3)).toThrow();
  });
});