const MINUTOS_POR_HORA = 60;

function paraChave(data) {
  return data.toISOString().slice(0, 10);
}

function inicioDoDia(data) {
  return new Date(Date.UTC(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate()));
}

function diaAnterior(data) {
  const anterior = new Date(data);
  anterior.setUTCDate(anterior.getUTCDate() - 1);
  return anterior;
}

export function avaliarMR03(registros, hoje, limiarHoras, limiarNoites) {
  if (!Number.isInteger(limiarHoras) || limiarHoras < 1) {
    throw new Error('O limiar de horas de MR03 deve ser um inteiro maior ou igual a 1.');
  }

  if (!Number.isInteger(limiarNoites) || limiarNoites < 1) {
    throw new Error('O limiar de noites de MR03 deve ser um inteiro maior ou igual a 1.');
  }

  const limiarMinutos = limiarHoras * MINUTOS_POR_HORA;

  const porData = new Map();
  for (const registro of registros) {
    porData.set(registro.dataReferencia, registro.duracaoMin);
  }

  let dia = inicioDoDia(hoje);
  let noitesSeguidas = 0;

  while (true) {
    const duracao = porData.get(paraChave(dia));

    if (duracao === undefined || duracao >= limiarMinutos) {
      return false;
    }

    noitesSeguidas += 1;

    if (noitesSeguidas >= limiarNoites) {
      return true;
    }

    dia = diaAnterior(dia);
  }
}