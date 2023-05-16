const validateName = (req, res, next) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).json({ "message": "O campo name é obrigatório" });
  }
  if (name.length < 5) {
    return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
  }

  next();
};

module.exports = validateName;