const PORT = process.env.PORT || 3002;
const express = require('express');
const app = express();

//routes 
//const routesAPI = require('./routes/routesAPI/index.js');
const routesHTML = require('./routes/routesHTML/index.js');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//call the routes 
//app.use('/api', routesAPI);
app.use('/', routesHTML);


//create app.listen
app.listen(PORT, () => {
    console.log(`Express server listening at http://localhost:${PORT}`)
})