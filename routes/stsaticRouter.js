const express = require('express');

const router = express.Router();

application.get('/',(req, res){
    return res.render('home')
})

module.exports = router;