const express = require('express');
const router = express.Router();
const {handleNewShortUrl} = require('../controllers/url')

router.post('/',handleNewShortUrl);

module.exports = router;