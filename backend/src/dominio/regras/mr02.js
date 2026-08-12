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
  
  export function avaliarMR02(registros, hoje, limiarDias) {
    if (!Number.isInteger(limiarDias) || limiarDias < 1) {
      throw new Error('O limiar de MR02 deve ser um inteiro maior ou igual a 1.');
    }
  
    const porData = new Map();
    for (const registro of registros) {
      porData.set(registro.dataReferencia, registro.tomado);
    }
  
    let dia = inicioDoDia(hoje);
    let diasSeguidos = 0;
  
    while (porData.get(paraChave(dia)) === false) {
      diasSeguidos += 1;
  
      if (diasSeguidos >= limiarDias) {
        return true;
      }
  
      dia = diaAnterior(dia);
    }
  
    return false;
  }