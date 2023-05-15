const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.some((team) => team.id === id)) {
    return next();
  }
  res.status(404).json({ "ERRO": 'Time não encontrado' });
};

module.exports = existingId;