const {getUser} = require('../service/auth')

function checkForAuthentication(req, res, next){
    const tokenCookie = req.cookies?.token;
    req.user = null;
    if(!tokenCookie) return next()
    // console.log('tokencookie',tokenCookie)
    const token = tokenCookie;
    const user = getUser(token);
    // console.log('user',user);
    req.user = user;
    return next();   
}

function restrictTo(roles = []){
    // console.log('hello',roles);
    return function(req, res, next){
        // console.log('working',req.user._doc.role);
        if(!req.user) return res.redirect('/login'); 
        if(!roles.includes(req.user._doc.role)) return res.end('UnAuthorized');
        return next();
    }
}


module.exports={
 checkForAuthentication,
 restrictTo,
}