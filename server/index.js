import fs from 'node:fs/promises';

console.log('Leyendo el archivo 1');

(async () => {
  try {
    // Leer el primer archivo
    const text1 = await fs.readFile('./text.txt', 'utf-8');
    console.log(`Iterando llegamos a ${text1} en el primer archivo`);

    console.log('Leyendo el archivo 2');

    // Leer el segundo archivo
    const text2 = await fs.readFile('./texto.txt', 'utf-8');
    console.log(`Iterando llegamos a ${text2} en el segundo archivo`);
  } catch (error) {
    console.error('Ocurrió un error al leer los archivos:', error.message);
  }
})();