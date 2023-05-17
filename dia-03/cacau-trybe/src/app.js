const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));

  if (!chocolate) return res.status(404).json({ message: "Chocolate not found" });

  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));

  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await cacauTrybe.getTotalChocolates();
  console.log('TOTAL CHOCS', totalChocolates);
  res.status(200).json({ total_de_chocolates: totalChocolates });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolate = await cacauTrybe.getChocolateByName(name);

  res.status(!chocolate ? 404 : 200).json({ chocolate });
});

// termina exercicios at é ex 03 do bonus

module.exports = app;