const BookService  = require('../services/BookService');

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    
    return res.status(200).json(books);  
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.create({ title, author, pageQuantity });

    if(!newBook) {
      return res.status(400).json({ message: "error" });
    }
    
    return res.status(201).json( newBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const updatedUser = await BookService.update(id, { title, author, pageQuantity });

    if(!updatedUser) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(201).json({ message: "Book updated!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await BookService.remove(id);

    if(!removed) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Book removed!" });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};