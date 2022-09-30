const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

//routes 
const routesAPI = require('./routes/routesAPI');
const routesHTML = require('./routes/routesHTML');


//create app.listen
