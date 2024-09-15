const fs = require('fs').promises;
const path = require('path');

const movies = '/movies.json';

async function readFunc() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './movies.json'));
    const movies = JSON.parse(data);
    
    console.log(movies);
    return movies;
  } catch (error) {
    console.log(`Erro ao ler o arquivo: ${error.message}`);
  }
}

module.exports = { readFunc };