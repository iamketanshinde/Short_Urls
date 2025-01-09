const jwt = require('jsonwebtoken');
const secretKey = "secretkey";

function setUser( user ){
    console.log(user);
    return jwt.sign({...user}, secretKey);
}


function getUser(token){
    if(!token) return null;
    try{
        const user = jwt.verify(token, secretKey);
        return user;
    }
    catch(err){
        console.log('Jwterr', err);
    }
}


module.exports={
    setUser,
    getUser,
}