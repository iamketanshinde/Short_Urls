const express = require('express');
const app = express();
const PORT = 4001;
const urlroute = require('./routes/url')
const {ConnectToMongoDb}= require('./connections')
const URL = require('./models/urls')

ConnectToMongoDb('mongodb://localhost:27017/Url-Generate')
.then(()=>console.log("MongoDb Connected!!!"));

app.set("view engine","ejs")

app.use(express.json());

app.use('/url',urlroute);

app.get('/test',async(req,res)=>{
    const allurls = await URL.find({})
    return res.end(`
        <html>
            <head></head>
            <body>
                <ol>
                    ${allurls.map(url=>`<li>${url.shortId} -${url.redirectURL} -${url.visitHistory.length}</li>`).join('')}
                </ol>
            </body>
        </html>
        `)
})

app.get('/url/:shortId', async(req, res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId},{
        $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
    });
    return res.redirect(entry.redirectURL);
});

app.listen(PORT, ()=>console.log(`Server Connected On PORT :${PORT}`));



