const shortid = require('shortid');
const URL = require('../models/urls')

async function handleNewShortUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(404).json({error:"Create New Url's"})
        const shortId = shortid();
        await URL.create({
            shortId:shortId,
            redirectUrl:body.url,
            visitHistory:[],
        });
        return res.json({id:shortId})
};

async function handleGetAnalytics(req,res){
    const short_id = req.params.shortId;
    const result = await URL.findOne({shortId})
    return res.json({totalClicks:result.visitHistory.length,analytics:visitHistory})
}


module.exports={
    handleNewShortUrl,
    handleGetAnalytics,
}