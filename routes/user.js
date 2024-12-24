const express = require('express');

const {HandleSignUpUser, HandleUserLogin} =require('../controllers/user')

const router = express.Router();

router.post('/',HandleSignUpUser);
router.post('/login',HandleUserLogin);

module.exports = router;