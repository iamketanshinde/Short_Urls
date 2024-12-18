const express = require('express');
const app = express();
const PORT = 4001;
const urlroute = require('./routes/url')
const {ConnectToMongoDb}= require('./connections')
const URL = require('./models/urls')

ConnectToMongoDb('mongodb://localhost:27017/Url_Generator')
.then(()=>console.log("MongoDb Connected!!!"))


app.use(express.json());
app.use('/url',urlroute);

app.get('/:shortId', async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{
            timestamp:Date.now()
        }
    }}
);
res.redirect(entry.redirectUrl)
});

app.listen(PORT, ()=>console.log(`Server Connected On PORT :${PORT}`));



