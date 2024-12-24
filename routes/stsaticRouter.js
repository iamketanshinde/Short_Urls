const express = require('express');
const URL = require('../models/urls')


const router = express.Router();

router.get('/', async(req, res)=>{
    const allurls = await URL.find({});
    return res.render("home",{
        urls:allurls,
    })
})

router.get('/signup', (req, res)=>{
      return res.render('SignUp')
})

router.get('/login', (req, res)=>{
    return res.render('LogIn')
})

module.exports = router;