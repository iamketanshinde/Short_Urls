const User = require('../models/userModel')

async function UserSignUpPage(req,res){
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.render('home');
}

module.exports= {
    UserSignUpPage,
}