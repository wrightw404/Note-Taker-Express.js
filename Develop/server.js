const path = require('path');
const fs = require('fs');
const PORT = 3001;
const express = require('express');
const app = express();

//routes 
const routesAPI = require('./routes/routesAPI');
const routesHTML = require('./routes/routesHTML');


//create app.listen
app.listen(PORT, () => {
    console.log(`Express server listening at http://localhost:${PORT}!`)
})