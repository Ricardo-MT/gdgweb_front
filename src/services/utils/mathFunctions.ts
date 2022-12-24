// Función para convertir de Bytes hasta GB
const convertSize: (mySize: number) => string = (element) => {
  let respuesta: number = element;
  let formato: string = ' B';
  const listaFormatos: Array<string> = [' KB', ' MB', ' GB'];

  for (let temp = 0; respuesta > 1024; temp++) {
    respuesta /= 1024;
    formato = listaFormatos[temp];
  }
  return respuesta.toFixed(2) + formato;
};

export default convertSize;
