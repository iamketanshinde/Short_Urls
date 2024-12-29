const sessionIdMapUser = new Map();

function setUser(id,user){
    sessionIdMapUser.set(id, user);
}

function getUser(id){
    sessionIdMapUser.set(id);
}

module.exports={
    setUser,
    getUser,
    
}