import { paraMinutos } from './sono.js';

const MINUTOS_POR_DIA = 24 * 60;
const MINUTOS_POR_HORA = 60;
const DIAS_DA_JANELA = 7;
const MINIMO_DE_REGISTROS = 3;

function inicioDoDia(data) {
  return new Date(Date.UTC(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate()));
}

function amplitudeCircular(minutos) {
  const ordenados = [...minutos].sort((a, b) => a - b);

  let maiorIntervalo = 0;

  for (let i = 0; i < ordenados.length; i += 1) {
    const atual = ordenados[i];
    const proximo = ordenados[(i + 1) % ordenados.length];

    const intervalo = i === ordenados.length - 1
      ? MINUTOS_POR_DIA - atual + proximo
      : proximo - atual;

    if (intervalo > maiorIntervalo) {
      maiorIntervalo = intervalo;
    }
  }

  return MINUTOS_POR_DIA - maiorIntervalo;
}

export function avaliarMR04(registros, hoje, limiarHoras) {
  if (!Number.isInteger(limiarHoras) || limiarHoras < 1) {
    throw new Error('O limiar de MR04 deve ser um inteiro maior ou igual a 1.');
  }

  const fim = inicioDoDia(hoje);
  const inicio = new Date(fim);
  inicio.setUTCDate(inicio.getUTCDate() - (DIAS_DA_JANELA - 1));

  const naJanela = registros.filter((registro) => {
    const data = new Date(`${registro.dataReferencia}T00:00:00Z`);
    return data >= inicio && data <= fim;
  });

  if (naJanela.length < MINIMO_DE_REGISTROS) {
    return false;
  }

  const minutos = naJanela.map((registro) => paraMinutos(registro.horaDormir));

  return amplitudeCircular(minutos) > limiarHoras * MINUTOS_POR_HORA;
}