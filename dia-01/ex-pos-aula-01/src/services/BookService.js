const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async (bookObj) => {
  console.log('BOOK OBJ:', bookObj);
  const { title, author, pageQuantity } = bookObj;
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};

module.exports = {
  getAll,
  getById,
  create,
};