const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);

  if(!book) {
    return res.status(404).json({ message: 'Book not found' });
  };

  res.status(200).json(book);
};

const create = async (req, res) => {
  try {
    console.log('BODY:', req.body);
    const result = await BookService.create(req.body);
  
    res.status(201).json(result);    
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

/* Parei nonfinal do exercicio 11, porem testando da um erro no thunderclient */

module.exports = {
  getAll,
  getById,
  create,
};