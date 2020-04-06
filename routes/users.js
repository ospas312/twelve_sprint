const routerUsers = require('express').Router();
const users = require('../data/users.json');

routerUsers.get('/users', (req, res) => {
  res.send(users);
  //res.status(200).json(users);
});
routerUsers.get('/users/:id', (req, res) => {
  if (!users.find(item => item._id === req.params.id)) {
    res.status(404).send({"message": "Нет пользователя с таким id"});
    return;
  }else{
    res.send(users.find(item => item._id === req.params.id));
  };
});

module.exports = routerUsers;