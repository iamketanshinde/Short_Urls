const express = require('express');
const shortid= require('shortid');
const app = express();
app.use(express.json()); 

async function handleNewShortUrl(req, res) {
  const body = req.body;
  if (!body || !body.url) {
    return res.status(404).json({ error: "Create New Url's" });
  }
  const shortId =shortid();
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}




module.exports={
    handleNewShortUrl,
}