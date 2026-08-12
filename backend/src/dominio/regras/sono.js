const MINUTOS_POR_DIA = 24 * 60;
const FORMATO_HORARIO = /^([01]\d|2[0-3]):([0-5]\d)$/;

function paraMinutos(horario) {
  const partes = FORMATO_HORARIO.exec(horario);

  if (partes === null) {
    throw new Error(`Horário inválido: "${horario}". Use o formato HH:MM em 24 horas.`);
  }

  const horas = Number(partes[1]);
  const minutos = Number(partes[2]);

  return horas * 60 + minutos;
}

export function calcularDuracaoMin(horaDormir, horaAcordar) {
  const inicio = paraMinutos(horaDormir);
  const fim = paraMinutos(horaAcordar);

  if (fim > inicio) {
    return fim - inicio;
  }

  return MINUTOS_POR_DIA - inicio + fim;
}