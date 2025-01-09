const User = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../service/auth');

async function UserSignUpPage(req,res){
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect('/');
}

async function UserLogInPage(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({
        email,
        password,
    });
    // console.log('requser',user);
    if(!user) return res.render('login', {error:"INVALID PASSWORD OR EMAIL"});
    const token = setUser(user);
    console.log(token)
    res.cookie('token', token);
    return res.redirect("/");
}


module.exports = {
    UserSignUpPage,
    UserLogInPage,
}