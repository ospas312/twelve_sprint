const routerUsers = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const getUsersMiddleware = (req, res, next) => {
  const folderPath = path.resolve('data/users.json');
  fsPromises.readFile(folderPath, { encoding: 'utf8' })
    .catch(() => {
      throw new Error(' Ого, ошибка! o_O');
    })
    .then((data) => {
      res.users = JSON.parse(data);
      next();
    });
};

const sendUsers = (req, res) => {
  res.send(res.users);
};
const doesUserExist = (req, res) => {
  if (!res.users.find((item) => item._id === req.params.id)) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }
  res.send(res.users.find((item) => item._id === req.params.id));
};

routerUsers.use('/', getUsersMiddleware);
routerUsers.get('/', sendUsers);
routerUsers.get('/:id', doesUserExist);

module.exports = routerUsers;
