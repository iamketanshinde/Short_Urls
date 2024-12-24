const User = require('../models/user');
const { handleGetAnalytics } = require('./url');

async function HandleSignUpUser(req, res ){
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    })
      return res.redirect('/'); 
}

async function HandleUserLogin(req, res ){
    const { email, password} = req.body;
    const user = await User.findOne({
        email, password,
    });
    if(!user) res.render('login', {error:'INVALID EMAIL OR PASSWORD!'})
      return res.redirect('/'); 
}



module.exports = {
    HandleSignUpUser,
    HandleUserLogin,
}