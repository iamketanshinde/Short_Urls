const express = require('express');

const {HandleSignUpUser} =require('../controllers/user')

const router = express.Router();

router.post('/',HandleSignUpUser)

module.exports = router;