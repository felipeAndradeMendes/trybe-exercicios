const fs = require('fs').promises;
const { readFunc } = require('./readFile');

const path = require('path');

const movies = 'movies.json';


async function writeFunc(newData) {
  try {
    const allMovies = await readFunc();
    const moviesUpdated = [...allMovies, ...newData]

    await fs.writeFile(path.resolve(__dirname, './movies.json', moviesUpdated));
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

module.exports = { writeFunc };