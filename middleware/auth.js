const {getUser} = require('../service/auth')


async function restrictToLoggedInUser(req, res, next) {
    console.log(req,'hii req');
    const userUid = req.cookies?.uid;
    console.log('USER', userUid);
    if(!userUid) return res.redirect('/login');

    const user = getUser(userUid);
    if(!user) return res.redirect('/login');
    
    req.user = user;
    
    next(); 
}

module.exports={
    restrictToLoggedInUser,
}