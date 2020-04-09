const fsPromises = require('fs').promises;
const path = require('path');

const getCardsMiddleware = (req, res, next) => {
  const folderPath = path.resolve('data/cards.json');
  fsPromises.readFile(folderPath, { encoding: 'utf8' })
    .catch(() => {
      res.status(500).send({ message: 'Ошибка на стороне сервера' });
    })
    .then((data) => {
      res.cards = JSON.parse(data);
      next();
    });
};

const sendCards = (req, res) => {
  res.send(res.cards);
};

module.exports = { getCardsMiddleware, sendCards };
