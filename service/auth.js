const sessionIdToUserMap = new Map();

function setUser(user,id){
sessionIdToUserMap.set(user,id);
}


function getUser(id){
    return sessionIdToUserMap.set(id);
}


module.exports={
    setUser,
    getUser,
}