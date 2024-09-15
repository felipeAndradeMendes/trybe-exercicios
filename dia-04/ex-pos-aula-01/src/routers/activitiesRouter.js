const app = require('../app');
const express = require('express');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({"message": "tudo ok"});
});

router.post('/', validateName, validatePrice, validateDescription, (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = router;