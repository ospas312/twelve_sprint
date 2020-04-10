const router = require('express').Router();
const { getCardsMiddleware, sendCards } = require('./cards');
const { getUsersMiddleware, sendUsers, doesUserExist } = require('./users.js');

router.use('/cards', getCardsMiddleware);
router.get('/cards', sendCards);
router.use('/users', getUsersMiddleware);
router.get('/users', sendUsers);
router.get('/users/:id', doesUserExist);
module.exports = router;
