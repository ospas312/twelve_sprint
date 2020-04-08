const express = require('express');
const path = require('path');
const routerUsers = require('./routes/users.js');
const routerCards = require('./routes/cards.js');

const app = express();
const { PORT = 3000 } = process.env;


app.use('/users', routerUsers);
app.use('/cards', routerCards);
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
app.listen(PORT);
