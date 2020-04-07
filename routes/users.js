const routerUsers = require('express').Router();
const fs = require('fs');

const getUsersMiddleware = (req, res, next) => {
  fs.readFile('./data/users.json', (err, data) => {
    if (err) {
      next(err);
      return;
    }
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
