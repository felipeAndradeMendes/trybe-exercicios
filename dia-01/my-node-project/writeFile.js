const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso');
  } catch (error) {
    console.log(`Erro ao escrever o arquivo: ${error.message}`);   
  }
}

main();