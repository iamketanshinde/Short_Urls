const mongoose = require('mongoose');
mongoose.set("strictQuery",true)
async function ConnectToMongoDb(url) {
    return mongoose.connect(url);
}

module.exports = {
    ConnectToMongoDb,
}