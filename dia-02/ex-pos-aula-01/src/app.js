const express = require('express');
const app = express();
app.use(express.json());

const { readFunc } = require('./readFile');
const { writeFunc } = require('./writeFile')

// Selecionar todos os filmes lidos no arquivo json local - Ex 06;
app.get('/movies', async (req, res) => {
  const data = await readFunc();
  res.status(200).json({data});
});

// Selecionar filme pelo id - Ex 05;
app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readFunc();

  const selectedMovie = data.find((movie) => movie.id === Number(id));
  console.log(selectedMovie);
  res.status(200).json({ filme_selecionado: selectedMovie});
});

app.post('/movies', async (req, res) => {
  const movies = await readFunc();
  const { movie, price } = req.body;
  const newMovie = {
    id: movies[movies.length - 1].id +1,
    movie,
    price,
  };
  const allMovies = JSON.stringify([...movies, newMovie]);
  await fs.writeFunc(movies)

});

app.delete('/movie/:id', (req, res) => {
  const { id } = req.params;
  
});

module.exports = app;

// feito até exercicio 07