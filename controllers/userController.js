const User = require('../models/userModel');
const {v4:uuidv4} = require('uuid')
const { use } = require('../routes/url');

async function UserSignUpPage(req,res){
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    const sessionId = uuidv4();
    return res.redirect('/');
}

async function UserLogInPage(req,res){
    const {email,password} = req.body;
    await User.findOne({
        email,
        password,
    });
    if(!User) return res.render('login',{error:"INVALID PASSWORD OR EMAIL"})
    return res.redirect('/');
}


module.exports= {
    UserSignUpPage,
    UserLogInPage,
}