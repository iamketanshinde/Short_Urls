const shortid = require('shortid');
const URL = require('../models/urls')

async function handleNewShortUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(404).json({error:"Create New Url's"});
    const shortID = shortid();

    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
        createdBy:req.user._id,
    });
    // console.log(shortID); 
    return res.render('home',{
        id:shortID
    })
};

async function handleGetAnalytics(req, res){
    // console.log('sdfsf');
    const shortId = req.params.shortId;
    console.log(shortId)
    const result = await URL.findOne({shortId});
    // console.log(result);
    return res.json({ 
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
};


module.exports={
    handleNewShortUrl,
    handleGetAnalytics,
}