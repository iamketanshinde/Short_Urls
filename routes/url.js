const express = require('express');

const {handleNewShortUrl, handleGetAnalytics} = require('../controllers/url');

const router = express.Router();

router.get("/", handleNewShortUrl);
router.post("/", handleNewShortUrl);
router.get("/analytics/:shortId", handleGetAnalytics);


module.exports = router;