const MS_POR_DIA = 24 * 60 * 60 * 1000;

function paraData(dataReferencia) {
  return new Date(`${dataReferencia}T00:00:00Z`);
}

function inicioDoDia(data) {
  return new Date(Date.UTC(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate()));
}

export function avaliarMR01(registros, hoje, limiarDias) {
  if (!Number.isInteger(limiarDias) || limiarDias < 1) {
    throw new Error('O limiar de MR01 deve ser um inteiro maior ou igual a 1.');
  }

  const referencia = inicioDoDia(hoje);

  const datas = registros
    .map((registro) => paraData(registro.dataReferencia))
    .filter((data) => data <= referencia);

    if (datas.length === 0) {
        return registros.length === 0;
      }

  const maisRecente = new Date(Math.max(...datas.map((data) => data.getTime())));
  const diasSemRegistro = Math.round((referencia - maisRecente) / MS_POR_DIA);

  return diasSemRegistro >= limiarDias;
}