const express = require('express');
const router  = express.Router();
const {UserSignUpPage} = require('../controllers/userController')

router.post('/',UserSignUpPage)


module.exports = router;
