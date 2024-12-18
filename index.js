const express = require('express');
const app = express();
const PORT = 4001;
const urlroute =require('./routes/url')



app.use('/url',urlroute);
app.listen(PORT, ()=>console.log(`Server Connected On PORT :${PORT}`));



