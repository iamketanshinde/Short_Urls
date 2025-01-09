const express = require('express');
const app = express();
const PORT = 4001;
const path = require('path');
const {ConnectToMongoDb}= require('./connections');

const cookieParser = require('cookie-parser');

const URL = require('./models/urls');
const urlroute = require('./routes/url');
const staticroute = require('./routes/stsaticRouter');
const userRouter = require('./routes/userRouter');
const {checkForAuthentication,restrictTo}= require('./middleware/auth');


ConnectToMongoDb('mongodb://localhost:27017/Url-Generate')
.then(()=>console.log("MongoDb Connected!!!"));

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(checkForAuthentication)

app.use('/url', restrictTo(['NORMAL','ADMIN']), urlroute);
app.use('/user', userRouter);
app.use('/', staticroute);



app.get('/test', async(req,res)=>{
    if(!req.user) return res.redirect('/login')
    const allurls = await URL.find({createdBy:req.user._id})
    return res.render("home",{
        urls:allurls,
    });
});

app.get('/analytics/:shortId', async(req, res)=>{
    // console.log('sdfsfsd');
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId},{
        $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
    });
    res.redirect(entry.redirectURL);
});

app.listen(PORT, ()=>console.log(`Server Connected On PORT :${PORT}`));



