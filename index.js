const express = require('express');
const app = express();
const PORT = 4001;
const urlroute =require('./routes/url')
const {ConnectToMongoDb}= require('./connections')


ConnectToMongoDb('mongodb://localhost:27017/Url_Generator')
.then(()=>console.log("MongoDb Connected!!!"))


app.use(express.json());
app.use('/url',urlroute);
app.listen(PORT, ()=>console.log(`Server Connected On PORT :${PORT}`));



