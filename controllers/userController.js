const User = require('../models/userModel');
const {v4:uuidv4} = require('uuid')
const {setUser}=require('../service/auth')
const { use } = require('../routes/url');

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
    if(!user) return res.render('login',{error:"INVALID PASSWORD OR EMAIL"})
    
        const sessionId = uuidv4();
        setUser(sessionId, user);
        res.cookie("uid",sessionId);
    return res.redirect('/');
}


module.exports= {
    UserSignUpPage,
    UserLogInPage,
}