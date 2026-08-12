import { describe, it, expect } from 'vitest';
import { calcularDuracaoMin } from './sono.js';

describe('calcularDuracaoMin', () => {
  it('calcula sono que atravessa a meia-noite', () => {
    expect(calcularDuracaoMin('23:00', '07:00')).toBe(480);
  });

  it('calcula sono que não atravessa a meia-noite', () => {
    expect(calcularDuracaoMin('01:00', '07:00')).toBe(360);
  });

  it('calcula sono com minutos quebrados atravessando a meia-noite', () => {
    expect(calcularDuracaoMin('22:30', '06:15')).toBe(465);
  });

  it('calcula sono diurno', () => {
    expect(calcularDuracaoMin('14:00', '22:00')).toBe(480);
  });

  it('calcula sono iniciado exatamente à meia-noite', () => {
    expect(calcularDuracaoMin('00:00', '08:00')).toBe(480);
  });

  it('considera volta completa quando as horas são iguais', () => {
    expect(calcularDuracaoMin('23:00', '23:00')).toBe(1440);
  });

  it('rejeita horário em formato inválido', () => {
    expect(() => calcularDuracaoMin('25:00', '07:00')).toThrow();
    expect(() => calcularDuracaoMin('abc', '07:00')).toThrow();
    expect(() => calcularDuracaoMin('23:00', '07:99')).toThrow();
  });
});