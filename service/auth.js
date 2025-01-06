const jwt = require('jsonwebtoken');
const secretKey = "secretkey";

function setUser( user ){
    return jwt.sign({...user}, secretKey);
}


function getUser(token){
    if(!token) return null;
    try{
        jwt.verify(token, secretKey);
    }
    catch(err){
        console.log('Jwterr', err);
    }
}


module.exports={
    setUser,
    getUser,
}