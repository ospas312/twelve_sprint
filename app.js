const express = require('express');
const path = require('path');
const router = require('./routes/router.js');

const app = express();
const { PORT = 3000 } = process.env;

app.use('/', router);

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
app.listen(PORT);
