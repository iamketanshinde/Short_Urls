const express = require('express');
const router  = express.Router();
const {UserSignUpPage,UserLogInPage} = require('../controllers/userController')

router.post('/',UserSignUpPage)
router.post('/login',UserLogInPage)

module.exports = router;
