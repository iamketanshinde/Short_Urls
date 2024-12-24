const User = require('../models/user');
const { handleGetAnalytics } = require('./url');

async function HandleSignUpUser(req, res ){
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    })
      return res.render('User');
}
module.exports = {
    HandleSignUpUser,
}