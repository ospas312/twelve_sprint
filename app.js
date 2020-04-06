const express = require('express');
const path = require('path');
const app = express();
const { PORT = 3000 } = process.env;
const bodyParser = require('body-parser');
const routerUsers = require('./routes/users.js');
const routerCards = require('./routes/cards.js');

app.use('/', routerUsers);
app.use('/', routerCards);
app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res) => {
  res.status(404).send({"message": "Запрашиваемый ресурс не найден"});
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});