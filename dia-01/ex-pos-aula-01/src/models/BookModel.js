const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  });

//   (async () => {
//     await sequelize.sync({ force: true });
//     // As funções vão aqui
// })();

  return Book;
}

module.exports = BookModel;