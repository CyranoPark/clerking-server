const express = require('express');
const userController = require('./controller/users');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.get('/:userId', userController.getUser);

module.exports = router;
