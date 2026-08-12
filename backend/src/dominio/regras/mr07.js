const EXTREMOS = [1, 5];
const DIAS_DA_JANELA = 7;

function inicioDoDia(data) {
  return new Date(Date.UTC(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate()));
}

export function avaliarMR07(registros, hoje, limiarAlternancias) {
  if (!Number.isInteger(limiarAlternancias) || limiarAlternancias < 1) {
    throw new Error('O limiar de MR07 deve ser um inteiro maior ou igual a 1.');
  }

  const fim = inicioDoDia(hoje);
  const inicio = new Date(fim);
  inicio.setUTCDate(inicio.getUTCDate() - (DIAS_DA_JANELA - 1));

  const polos = registros
    .filter((registro) => {
      const data = new Date(`${registro.dataReferencia}T00:00:00Z`);
      return data >= inicio && data <= fim && EXTREMOS.includes(registro.nivel);
    })
    .sort((a, b) => a.dataReferencia.localeCompare(b.dataReferencia))
    .map((registro) => registro.nivel);

  let alternancias = 0;

  for (let i = 1; i < polos.length; i += 1) {
    if (polos[i] !== polos[i - 1]) {
      alternancias += 1;
    }
  }

  return alternancias >= limiarAlternancias;
}